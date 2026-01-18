import { CollectionConfig } from 'payload';

export const AwardTypes: CollectionConfig = {
  slug: 'award-types',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    description: 'Tipos de prémios (usados no Citadão e Palmarés)',
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
        description: 'Nome principal do prémio (ex: Melhor Pandeireta)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Identificador único (ex: melhor-pandeireta)',
      },
    },
    {
      name: 'aliases',
      type: 'array',
      admin: {
        description: 'Nomes alternativos usados por outros festivais',
      },
      fields: [
        {
          name: 'alias',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Descrição do prémio (aparece em tooltip)',
      },
    },
    {
      name: 'criteria',
      type: 'richText',
      admin: {
        description: 'Critérios de avaliação detalhados',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Ícone do prémio (emoji ou código)',
      },
    },
  ],
};
