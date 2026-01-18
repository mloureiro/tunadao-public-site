import type { Payload } from 'payload';

const awardTypes = [
  {
    name: 'Melhor Tuna',
    slug: 'melhor-tuna',
    aliases: [{ alias: 'Grande Prémio' }, { alias: '1ª Melhor Tuna' }],
    description: 'O prémio máximo atribuído à tuna com melhor desempenho global no festival.',
  },
  {
    name: '2ª Melhor Tuna',
    slug: 'segunda-melhor-tuna',
    aliases: [{ alias: 'Segundo Lugar' }],
    description: 'Segundo lugar na classificação geral.',
  },
  {
    name: '3ª Melhor Tuna',
    slug: 'terceira-melhor-tuna',
    aliases: [{ alias: 'Terceiro Lugar' }],
    description: 'Terceiro lugar na classificação geral.',
  },
  {
    name: 'Tuna Mais Tuna',
    slug: 'tuna-mais-tuna',
    aliases: [{ alias: 'Tuna + Tuna' }, { alias: 'Mais Tunante' }, { alias: 'Espírito Tunante' }],
    description: 'Prémio atribuído à tuna que melhor representa o espírito tunante - alegria, camaradagem e tradição.',
  },
  {
    name: 'Tuna do Público',
    slug: 'tuna-do-publico',
    aliases: [{ alias: 'Prémio do Público' }, { alias: 'Escolha do Público' }],
    description: 'Prémio votado pelo público presente no festival.',
  },
  {
    name: 'Melhor Serenata',
    slug: 'melhor-serenata',
    aliases: [{ alias: 'Serenata' }],
    description: 'Prémio para a melhor interpretação de serenata, avaliando musicalidade, emoção e técnica vocal.',
  },
  {
    name: 'Melhor Passacalles',
    slug: 'melhor-passacalles',
    aliases: [{ alias: 'Passacalles' }],
    description: 'Prémio para o melhor passacalles, avaliando energia, coordenação e animação.',
  },
  {
    name: 'Melhor Pandeireta',
    slug: 'melhor-pandeireta',
    aliases: [{ alias: 'Pandeireta' }],
    description: 'Prémio para o melhor executante de pandeireta, avaliando técnica, ritmo e presença.',
  },
  {
    name: 'Melhor Instrumental',
    slug: 'melhor-instrumental',
    aliases: [{ alias: 'Instrumental' }, { alias: 'Melhor Interpretação Musical' }],
    description: 'Prémio para a melhor performance instrumental coletiva.',
  },
  {
    name: 'Melhor Solista',
    slug: 'melhor-solista',
    aliases: [{ alias: 'Solista' }],
    description: 'Prémio para o melhor solista/vocalista.',
  },
  {
    name: 'Melhor Tema Original',
    slug: 'melhor-original',
    aliases: [{ alias: 'Melhor Original' }, { alias: 'Original' }],
    description: 'Prémio para a melhor composição original apresentada.',
  },
  {
    name: 'Melhor Estandarte',
    slug: 'melhor-estandarte',
    aliases: [{ alias: 'Estandarte' }, { alias: 'Melhor Bandeira' }],
    description: 'Prémio para o estandarte/bandeira mais bonito e bem apresentado.',
  },
  {
    name: 'Melhor Porta-Estandarte',
    slug: 'melhor-porta-estandarte',
    aliases: [{ alias: 'Porta-Estandarte' }],
    description: 'Prémio para o melhor porta-estandarte, avaliando postura e apresentação.',
  },
  {
    name: 'Menção Honrosa',
    slug: 'mencao-honrosa',
    aliases: [],
    description: 'Menção especial de reconhecimento.',
  },
  {
    name: 'Prémio Ibero-Americano',
    slug: 'premio-ibero-americano',
    aliases: [],
    description: 'Prémio especial para tunas de países ibero-americanos.',
  },
  {
    name: 'Prémio de Participação',
    slug: 'premio-participacao',
    aliases: [],
    description: 'Prémio simbólico pela participação no festival.',
  },
];

export const seedAwardTypes = async (payload: Payload) => {
  for (const awardType of awardTypes) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'award-types',
        where: { slug: { equals: awardType.slug } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Award type "${awardType.name}" already exists, skipping...`);
        continue;
      }

      await payload.create({
        collection: 'award-types',
        data: awardType,
      });
      console.log(`  ✅ Created award type: ${awardType.name}`);
    } catch (error) {
      console.error(`  ❌ Failed to create award type "${awardType.name}":`, error);
    }
  }
};
