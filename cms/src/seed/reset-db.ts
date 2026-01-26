import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';
import { createClient } from '@libsql/client';

// Load .env.local (overrides .env)
dotenvConfig({ path: '.env.local', override: true });

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

    // Disable foreign keys temporarily
    await client.execute('PRAGMA foreign_keys = OFF');

    // Drop all tables
    for (const row of tables.rows) {
      const tableName = row.name as string;
      console.log(`🗑️  Dropping ${tableName}...`);
      await client.execute(`DROP TABLE IF EXISTS "${tableName}"`);
    }

    // Re-enable foreign keys
    await client.execute('PRAGMA foreign_keys = ON');

    console.log('\n✅ Database reset complete!');
  } catch (error) {
    console.error('❌ Reset failed:', error);
    process.exit(1);
  }

  process.exit(0);
};

resetDatabase();
