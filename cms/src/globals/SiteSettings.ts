import { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Tunadão 1998',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'Tuna do Instituto Politécnico de Viseu',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'collapsible',
      label: 'Redes Sociais',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          admin: {
            description: 'URL do Instagram',
          },
        },
        {
          name: 'facebook',
          type: 'text',
          admin: {
            description: 'URL do Facebook',
          },
        },
        {
          name: 'tiktok',
          type: 'text',
          admin: {
            description: 'URL do TikTok',
          },
        },
        {
          name: 'youtube',
          type: 'text',
          admin: {
            description: 'URL do YouTube',
          },
        },
        {
          name: 'spotify',
          type: 'text',
          admin: {
            description: 'URL do Spotify',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'SEO Defaults',
      fields: [
        {
          name: 'defaultSeoImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Imagem padrão para partilha em redes sociais',
          },
        },
        {
          name: 'googleAnalyticsId',
          type: 'text',
          admin: {
            description: 'Google Analytics ID (ex: G-XXXXXXXXXX)',
          },
        },
      ],
    },
  ],
};
