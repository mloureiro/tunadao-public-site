import { CollectionConfig } from 'payload';

export const CitadaoParticipants: CollectionConfig = {
  slug: 'citadao-participants',
  admin: {
    useAsTitle: 'id',
    group: 'Content',
    description: 'Participações de tunas nas edições do Citadão',
    defaultColumns: ['edition', 'tuna', 'type'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'edition',
      type: 'relationship',
      relationTo: 'citadao-editions',
      required: true,
      admin: {
        description: 'Edição do festival',
      },
    },
    {
      name: 'tuna',
      type: 'relationship',
      relationTo: 'tunas',
      required: true,
      admin: {
        description: 'Tuna participante',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'contestant',
      options: [
        { label: 'A Concurso', value: 'contestant' },
        { label: 'Convidado', value: 'guest' },
      ],
      admin: {
        description: 'Tipo de participação',
      },
    },
  ],
};
