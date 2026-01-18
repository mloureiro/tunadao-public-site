import { CollectionConfig } from 'payload';
import { triggerFrontendRebuild } from '../utils/triggerRebuild';

export const CitadaoEditions: CollectionConfig = {
  slug: 'citadao-editions',
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (doc.status === 'published') {
          await triggerFrontendRebuild('citadao-editions', operation);
        }
        return doc;
      },
    ],
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Edições do Festival Citadão',
    defaultColumns: ['edition', 'year', 'date', 'status'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            return `${siblingData.edition}º Citadão (${siblingData.year})`;
          },
        ],
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'edition',
          type: 'number',
          required: true,
          admin: {
            description: 'Número da edição',
            width: '25%',
          },
        },
        {
          name: 'year',
          type: 'number',
          required: true,
          admin: {
            description: 'Ano',
            width: '25%',
          },
        },
        {
          name: 'date',
          type: 'text',
          admin: {
            description: 'Data (ex: 4-5 Maio)',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'venue',
      type: 'text',
      admin: {
        description: 'Local do evento',
      },
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Cartaz do evento',
      },
    },
    {
      name: 'tunas',
      type: 'array',
      admin: {
        description: 'Tunas participantes (a concurso)',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'guests',
      type: 'array',
      admin: {
        description: 'Tunas/grupos convidados',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'awards',
      type: 'array',
      admin: {
        description: 'Prémios atribuídos',
      },
      fields: [
        {
          name: 'awardType',
          type: 'relationship',
          relationTo: 'award-types',
          required: true,
        },
        {
          name: 'winner',
          type: 'text',
          required: true,
          admin: {
            description: 'Nome da tuna vencedora',
          },
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Notas especiais (ex: 10º Aniversário)',
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
