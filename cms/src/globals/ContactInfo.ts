import { GlobalConfig } from 'payload';

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'tunadao@gmail.com',
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+351 928 155 399',
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: 'Campus Politécnico de Viseu\n3504-510 Viseu',
    },
    {
      type: 'collapsible',
      label: 'Mapa',
      fields: [
        {
          name: 'mapEmbedUrl',
          type: 'text',
          admin: {
            description: 'URL do Google Maps embed (opcional)',
          },
        },
        {
          name: 'coordinates',
          type: 'group',
          fields: [
            {
              name: 'latitude',
              type: 'number',
            },
            {
              name: 'longitude',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
};
