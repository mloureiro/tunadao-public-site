import type { Payload } from 'payload';

const albumsData = [
  {
    title: 'Por Ruelas e Calçadas',
    year: 2003,
    description: 'O primeiro CD da Tunadão 1998, gravado ao vivo no espectáculo "Por Ruelas e Calçadas" realizado na Aula Magna do ISPV a 6 de Dezembro de 2003.',
    spotifyUrl: 'https://open.spotify.com/artist/7HeYIxlV5Nb1KvZkBx00sH',
    recordingType: 'live',
  },
  {
    title: 'De Capa Bem Traçada',
    year: 2008,
    description: 'O segundo CD da Tunadão 1998, gravado em estúdio para comemorar os 10 anos da tuna. Lançado por exigência dos estudantes de toda a Academia.',
    spotifyUrl: 'https://open.spotify.com/artist/7HeYIxlV5Nb1KvZkBx00sH',
    recordingType: 'studio',
  },
];

export const seedAlbums = async (payload: Payload) => {
  for (const album of albumsData) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'albums',
        where: { title: { equals: album.title } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Album "${album.title}" already exists, skipping...`);
        continue;
      }

      await payload.create({
        collection: 'albums',
        data: {
          ...album,
          tracks: [],
          status: 'published',
        },
      });
      console.log(`  ✅ Created album: ${album.title} (${album.year})`);
    } catch (error) {
      console.error(`  ❌ Failed to create album "${album.title}":`, error);
    }
  }
};
