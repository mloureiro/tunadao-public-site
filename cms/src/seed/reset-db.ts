import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';
import { createClient } from '@libsql/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env.local (overrides .env)
dotenvConfig({ path: '.env.local', override: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resetDatabase = async () => {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) {
    console.error('❌ TURSO_DATABASE_URL not set');
    process.exit(1);
  }

  console.log(`🔗 Connecting to: ${url}`);

  const client = createClient({
    url,
    authToken,
  });

  try {
    // Get all table names
    const tables = await client.execute(`
      SELECT name FROM sqlite_master
      WHERE type='table'
      AND name NOT LIKE 'sqlite_%'
      AND name NOT LIKE '_litestream_%'
    `);

    if (tables.rows.length === 0) {
      console.log('📭 Database is already empty');
      process.exit(0);
    }

    console.log(`📋 Found ${tables.rows.length} tables to drop:`);
    for (const row of tables.rows) {
      console.log(`   - ${row.name}`);
    }

    // Disable foreign keys
    await client.execute('PRAGMA foreign_keys = OFF');

    // Drop tables individually with retry logic
    let remainingTables = tables.rows.map((row) => row.name as string);
    let attempts = 0;
    const maxAttempts = 3;

    while (remainingTables.length > 0 && attempts < maxAttempts) {
      attempts++;
      const stillRemaining: string[] = [];

      for (const tableName of remainingTables) {
        try {
          await client.execute(`DROP TABLE IF EXISTS "${tableName}"`);
          console.log(`🗑️  Dropped ${tableName}`);
        } catch {
          // Table might have dependency issues, try again later
          stillRemaining.push(tableName);
        }
      }

      remainingTables = stillRemaining;
      if (remainingTables.length > 0 && attempts < maxAttempts) {
        console.log(`   Retrying ${remainingTables.length} tables...`);
      }
    }

    if (remainingTables.length > 0) {
      console.log(`⚠️  Could not drop: ${remainingTables.join(', ')}`);
    }

    // Re-enable foreign keys
    await client.execute('PRAGMA foreign_keys = ON');

    // Also remove local SQLite cache to prevent schema conflicts
    const localDbPath = path.resolve(__dirname, '../../data/tunadao.db');
    if (fs.existsSync(localDbPath)) {
      fs.unlinkSync(localDbPath);
      console.log('🗑️  Removed local SQLite cache');
    }

    console.log('\n✅ Database reset complete!');
  } catch (error) {
    console.error('❌ Reset failed:', error);
    process.exit(1);
  }

  process.exit(0);
};

resetDatabase();
