import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { resendAdapter } from '@payloadcms/email-resend';
import { payloadCloudinaryPlugin } from '@jhb.software/payload-cloudinary-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

// Collections
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { AwardTypes } from './collections/AwardTypes';
import { CitadaoEditions } from './collections/CitadaoEditions';
import { PalmaresYears } from './collections/PalmaresYears';
import { BlogPosts } from './collections/BlogPosts';
import { Videos } from './collections/Videos';
import { Albums } from './collections/Albums';
import { Pages } from './collections/Pages';
import { ContactSubmissions } from './collections/ContactSubmissions';

// Globals
import { SiteSettings } from './globals/SiteSettings';
import { ContactInfo } from './globals/ContactInfo';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-key-change-in-production',
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' - Tunadão CMS',
    },
  },

  editor: lexicalEditor(),

  db: sqliteAdapter({
    client: {
      url: process.env.TURSO_DATABASE_URL || 'file:./data/tunadao.db',
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),

  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        defaultFromAddress: 'noreply@tunadao.pt',
        defaultFromName: 'Tunadão 1998',
        apiKey: process.env.RESEND_API_KEY,
      })
    : undefined,

  collections: [
    Users,
    Media,
    AwardTypes,
    CitadaoEditions,
    PalmaresYears,
    BlogPosts,
    Videos,
    Albums,
    Pages,
    ContactSubmissions,
  ],

  globals: [SiteSettings, ContactInfo],

  plugins: [
    // Cloudinary storage for media files (only in production with credentials)
    ...(process.env.CLOUDINARY_CLOUD_NAME
      ? [
          payloadCloudinaryPlugin({
            collections: {
              media: true,
            },
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            credentials: {
              apiKey: process.env.CLOUDINARY_API_KEY!,
              apiSecret: process.env.CLOUDINARY_API_SECRET!,
            },
            folder: 'tunadao',
            useFilename: true,
          }),
        ]
      : []),
  ],

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  cors: [
    'http://localhost:4321', // Astro dev server
    process.env.FRONTEND_URL || '',
  ].filter(Boolean),
});
