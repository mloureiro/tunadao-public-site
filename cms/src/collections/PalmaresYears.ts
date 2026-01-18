import { CollectionConfig } from 'payload';

export const PalmaresYears: CollectionConfig = {
  slug: 'palmares-years',
  admin: {
    useAsTitle: 'yearTitle',
    group: 'Content',
    description: 'Prémios ganhos pela Tunadão por ano',
    defaultColumns: ['year', 'festivalCount', 'status'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'yearTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            return `Palmarés ${siblingData.year}`;
          },
        ],
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
      admin: {
        description: 'Ano',
      },
    },
    {
      name: 'festivals',
      type: 'array',
      required: true,
      admin: {
        description: 'Festivais onde participámos',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'Nome do festival',
          },
        },
        {
          name: 'location',
          type: 'text',
          admin: {
            description: 'Localização',
          },
        },
        {
          name: 'awards',
          type: 'array',
          admin: {
            description: 'Prémios ganhos',
          },
          fields: [
            {
              name: 'awardType',
              type: 'relationship',
              relationTo: 'award-types',
              admin: {
                description: 'Tipo de prémio (opcional se não existir na lista)',
              },
            },
            {
              name: 'customName',
              type: 'text',
              admin: {
                description: 'Nome personalizado (se diferente do tipo)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: [
        { label: 'Rascunho', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
    },
  ],
};
