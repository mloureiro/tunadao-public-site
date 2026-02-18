import { CollectionConfig } from 'payload';

export const Tunas: CollectionConfig = {
  slug: 'tunas',
  admin: {
    useAsTitle: 'fullName',
    group: 'Content',
    description: 'Tunas académicas e grupos similares',
    defaultColumns: ['shortName', 'fullName', 'city', 'type'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'shortName',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Nome abreviado/sigla (ex: TDK, TEUP) - identificador único',
      },
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
      admin: {
        description: 'Nome completo oficial',
      },
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
      admin: {
        description: 'Logo da tuna',
      },
    },
    {
      name: 'city',
      type: 'text',
      admin: {
        description: 'Cidade de origem',
      },
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'tuna',
      options: [
        { label: 'Tuna', value: 'tuna' },
        { label: 'Tuna Feminina', value: 'tuna-feminina' },
        { label: 'Tuna Veterana', value: 'tuna-veterana' },
        { label: 'Tuna Senior', value: 'tuna-senior' },
        { label: 'Internacional', value: 'international' },
        { label: 'Grupo', value: 'group' },
        { label: 'Solista', value: 'soloist' },
      ],
      admin: {
        description: 'Tipo de tuna/grupo',
      },
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Website ou perfil (URL completo)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Descrição da tuna',
      },
    },
  ],
};
