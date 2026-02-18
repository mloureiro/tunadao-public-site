import { CollectionConfig } from 'payload';
import { triggerFrontendRebuild } from '../utils/triggerRebuild';

export const FestivalParticipants: CollectionConfig = {
  slug: 'festival-participants',
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        await triggerFrontendRebuild('festival-participants', operation);
        return doc;
      },
    ],
  },
  admin: {
    useAsTitle: 'id',
    group: 'Content',
    description: 'Participacoes de tunas nos festivais externos',
    defaultColumns: ['festival', 'tuna', 'type'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'festival',
      type: 'relationship',
      relationTo: 'festivals',
      required: true,
      admin: {
        description: 'Festival',
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
        description: 'Tipo de participacao',
      },
    },
  ],
};
