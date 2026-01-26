import { CollectionConfig } from 'payload';

export const CitadaoAwards: CollectionConfig = {
  slug: 'citadao-awards',
  admin: {
    useAsTitle: 'id',
    group: 'Content',
    description: 'Prémios atribuídos nas edições do Citadão',
    defaultColumns: ['edition', 'award', 'tuna'],
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
      name: 'award',
      type: 'relationship',
      relationTo: 'award-types',
      required: true,
      admin: {
        description: 'Tipo de prémio',
      },
    },
    {
      name: 'tuna',
      type: 'relationship',
      relationTo: 'tunas',
      required: true,
      admin: {
        description: 'Tuna vencedora',
      },
    },
  ],
};
