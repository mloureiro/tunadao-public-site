import { CollectionConfig } from 'payload';

export const Tunas: CollectionConfig = {
  slug: 'tunas',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    description: 'Tunas académicas e grupos similares',
    defaultColumns: ['name', 'city', 'website', 'status'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Nome oficial da tuna',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Identificador único (ex: tunadao-1998)',
      },
    },
    {
      name: 'shortName',
      type: 'text',
      admin: {
        description: 'Nome abreviado/sigla (ex: TDK, TEUP)',
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
      type: 'row',
      fields: [
        {
          name: 'city',
          type: 'text',
          admin: {
            description: 'Cidade de origem',
            width: '50%',
          },
        },
        {
          name: 'foundedYear',
          type: 'number',
          admin: {
            description: 'Ano de fundação',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Website ou perfil (URL completo)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      admin: {
        description: 'Descrição curta (aparece em hover/tooltip)',
      },
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
