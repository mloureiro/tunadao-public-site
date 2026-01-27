import { CollectionConfig } from 'payload';
import { triggerFrontendRebuild } from '../utils/triggerRebuild';

export const FestivalAwards: CollectionConfig = {
  slug: 'festival-awards',
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        await triggerFrontendRebuild('festival-awards', operation);
        return doc;
      },
    ],
  },
  admin: {
    useAsTitle: 'id',
    group: 'Content',
    description: 'Premios ganhos em festivais',
    defaultColumns: ['festival', 'awardType', 'customName'],
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
        description: 'Festival onde o premio foi ganho',
      },
    },
    {
      name: 'awardType',
      type: 'relationship',
      relationTo: 'award-types',
      admin: {
        description: 'Tipo de premio (opcional se nao existir na lista)',
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
};
