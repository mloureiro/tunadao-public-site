/**
 * Test Fixtures - Static data for E2E tests and development without CMS
 *
 * These fixtures are used when USE_TEST_FIXTURES=true environment variable is set.
 * This allows builds to complete without a running CMS instance.
 */

import type {
  CMSCitadaoEdition,
  CMSCitadaoParticipant,
  CMSCitadaoAward,
  CMSTuna,
  CMSVenue,
  CMSPalmaresYear,
  CMSAwardType,
  CMSBlogPost,
  CMSVideo,
  CMSAlbum,
  CMSSiteSettings,
  CMSContactInfo,
  CMSPaginatedResponse,
} from '../types';

// Helper to create paginated response
function paginate<T>(docs: T[]): CMSPaginatedResponse<T> {
  return {
    docs,
    totalDocs: docs.length,
    limit: 100,
    totalPages: 1,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  };
}

// =============================================================================
// AWARD TYPES
// =============================================================================

const awardTypes: CMSAwardType[] = [
  { id: 1, name: 'Melhor Tuna', slug: 'melhorTuna' },
  { id: 2, name: 'Melhor Serenata', slug: 'melhorSerenata' },
  { id: 3, name: 'Tuna Mais Tuna', slug: 'tunaMaisTuna' },
  { id: 4, name: 'Melhor Pandeireta', slug: 'melhorPandeireta' },
  { id: 5, name: 'Melhor Instrumental', slug: 'melhorInstrumental' },
  { id: 6, name: 'Melhor Estandarte', slug: 'melhorEstandarte' },
  { id: 7, name: 'Melhor Solista', slug: 'melhorSolista' },
  { id: 8, name: 'Melhor Tema Original', slug: 'melhorOriginal' },
  { id: 9, name: 'Tuna do Público', slug: 'tunaDoPublico' },
];

// =============================================================================
// VENUES
// =============================================================================

const venues: CMSVenue[] = [
  { id: 1, name: 'Teatro Viriato, Viseu' },
  { id: 2, name: 'Aula Magna IPV' },
  { id: 3, name: 'Solar Vinhos do Dão' },
];

// =============================================================================
// TUNAS
// =============================================================================

const tunas: CMSTuna[] = [
  { id: 1, shortName: 'TUM', fullName: 'Tuna Universitária do Minho' },
  { id: 2, shortName: 'TUP', fullName: 'Tuna Universitária do Porto' },
  { id: 3, shortName: 'EUL', fullName: 'Estudantina Universitária de Lisboa' },
  { id: 4, shortName: 'Desertuna', fullName: 'Desertuna - Tuna Académica da UBI' },
  { id: 5, shortName: 'Afonsina', fullName: 'Afonsina - Tuna Académica da UC' },
  { id: 6, shortName: 'Viriatuna', fullName: 'Viriatuna - Tuna Académica ESSU' },
];

// =============================================================================
// CITADÃO EDITIONS
// =============================================================================

const citadaoEditions: CMSCitadaoEdition[] = [
  {
    id: 1,
    title: 'XVIII CITADÃO',
    editionNumber: 18,
    startDate: '2024-05-04',
    endDate: '2024-05-04',
    schedule: [{ date: '2024-05-04', venue: venues[0] }],
    poster: {
      id: 10,
      url: '/placeholder-poster.jpg',
      filename: 'citadao-2024-18-poster.jpg',
      mimeType: 'image/jpeg',
      alt: 'Cartaz do 18º Citadão (2024)',
    },
    status: 'published',
  },
  {
    id: 2,
    title: 'XVII CITADÃO',
    editionNumber: 17,
    startDate: '2023-05-05',
    endDate: '2023-05-06',
    schedule: [
      { date: '2023-05-05', venue: venues[2] },
      { date: '2023-05-06', venue: venues[1] },
    ],
    poster: {
      id: 11,
      url: '/placeholder-poster.jpg',
      filename: 'citadao-2023-17-poster.jpg',
      mimeType: 'image/jpeg',
      alt: 'Cartaz do 17º Citadão (2023)',
    },
    status: 'published',
  },
];

// =============================================================================
// CITADÃO PARTICIPANTS
// =============================================================================

const citadaoParticipants: CMSCitadaoParticipant[] = [
  // 2024 edition contestants
  { id: 1, edition: citadaoEditions[0], tuna: tunas[4], type: 'contestant' }, // Afonsina
  { id: 2, edition: citadaoEditions[0], tuna: tunas[3], type: 'contestant' }, // Desertuna
  { id: 3, edition: citadaoEditions[0], tuna: tunas[0], type: 'contestant' }, // TUM
  // 2024 edition guests
  { id: 4, edition: citadaoEditions[0], tuna: tunas[5], type: 'guest' }, // Viriatuna
  // 2023 edition contestants
  { id: 5, edition: citadaoEditions[1], tuna: tunas[2], type: 'contestant' }, // EUL
  { id: 6, edition: citadaoEditions[1], tuna: tunas[0], type: 'contestant' }, // TUM
  { id: 7, edition: citadaoEditions[1], tuna: tunas[1], type: 'contestant' }, // TUP
  // 2023 edition guests
  { id: 8, edition: citadaoEditions[1], tuna: tunas[5], type: 'guest' }, // Viriatuna
];

// =============================================================================
// CITADÃO AWARDS
// =============================================================================

const citadaoAwards: CMSCitadaoAward[] = [
  // 2024 awards
  { id: 1, edition: citadaoEditions[0], award: awardTypes[0], tuna: tunas[4] }, // Melhor Tuna - Afonsina
  { id: 2, edition: citadaoEditions[0], award: awardTypes[2], tuna: tunas[3] }, // Tuna Mais Tuna - Desertuna
  { id: 3, edition: citadaoEditions[0], award: awardTypes[5], tuna: tunas[4] }, // Melhor Estandarte - Afonsina
  // 2023 awards
  { id: 4, edition: citadaoEditions[1], award: awardTypes[0], tuna: tunas[1] }, // Melhor Tuna - TUP
  { id: 5, edition: citadaoEditions[1], award: awardTypes[2], tuna: tunas[2] }, // Tuna Mais Tuna - EUL
  { id: 6, edition: citadaoEditions[1], award: awardTypes[1], tuna: tunas[1] }, // Melhor Serenata - TUP
];

// =============================================================================
// PALMARÉS
// =============================================================================

const palmaresYears: CMSPalmaresYear[] = [
  {
    id: 1,
    yearTitle: '2024',
    year: 2024,
    festivals: [
      {
        name: 'Festival Exemplo',
        location: 'Lisboa',
        organizingTuna: tunas[2], // EUL
        awards: [{ awardType: awardTypes[0] }, { awardType: awardTypes[3] }],
      },
    ],
    status: 'published',
  },
  {
    id: 2,
    yearTitle: '2023',
    year: 2023,
    festivals: [
      {
        name: 'Outro Festival',
        location: 'Porto',
        organizingTuna: tunas[1], // TUP
        awards: [{ awardType: awardTypes[1] }],
      },
    ],
    status: 'published',
  },
];

// =============================================================================
// BLOG POSTS
// =============================================================================

const blogPosts: CMSBlogPost[] = [
  {
    id: 1,
    title: 'Notícia de Teste',
    slug: 'noticia-de-teste',
    excerpt: 'Esta é uma notícia de teste para E2E.',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', text: 'Conteúdo da notícia de teste.' }],
          },
        ],
      },
    },
    featuredImage: {
      id: 1,
      url: '/placeholder.jpg',
      filename: 'placeholder.jpg',
      mimeType: 'image/jpeg',
      filesize: 1000,
      alt: 'Imagem de teste',
    },
    author: { id: 1, email: 'test@test.com', role: 'admin' },
    tags: [{ tag: 'Notícias' }],
    publishedAt: '2024-01-15T10:00:00.000Z',
    status: 'published',
  },
];

// =============================================================================
// VIDEOS
// =============================================================================

const videos: CMSVideo[] = [
  {
    id: 1,
    title: 'Vídeo de Teste',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'atuacao',
    featured: true,
    publishedAt: '2024-01-10T10:00:00.000Z',
    status: 'published',
  },
  {
    id: 2,
    title: 'CITADÃO 2024',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'citadao',
    featured: false,
    publishedAt: '2024-05-20T10:00:00.000Z',
    status: 'published',
  },
];

// =============================================================================
// ALBUMS
// =============================================================================

const albums: CMSAlbum[] = [
  {
    id: 1,
    title: 'Álbum de Teste',
    year: 2020,
    coverImage: {
      id: 2,
      url: '/placeholder.jpg',
      filename: 'album-cover.jpg',
      mimeType: 'image/jpeg',
      filesize: 2000,
      alt: 'Capa do álbum',
    },
    spotifyUrl: 'https://open.spotify.com/album/5ljVRcZan9DLkFDm5aWAgt',
    recordingType: 'studio',
    status: 'published',
  },
];

// =============================================================================
// GLOBALS
// =============================================================================

const siteSettings: CMSSiteSettings = {
  id: 1,
  siteName: 'Tunadão 1998',
  siteDescription: 'Tuna Académica do Instituto Politécnico de Viseu',
  instagram: 'https://www.instagram.com/tunadao1998/',
  facebook: 'https://www.facebook.com/tunadao1998',
  tiktok: 'https://www.tiktok.com/@tunadao1998',
  youtube: 'https://www.youtube.com/@TUNADAO1998',
  spotify: 'https://open.spotify.com/artist/7HeYIxlV5Nb1KvZkBx00sH',
};

const contactInfo: CMSContactInfo = {
  id: 1,
  email: 'tunadao@gmail.com',
  phone: '+351 928 155 399',
  address: 'Campus Politécnico de Viseu, 3504-510 Viseu',
};

// =============================================================================
// EXPORTS
// =============================================================================

export const fixtures = {
  'citadao-editions': () => paginate(citadaoEditions),
  'citadao-participants': () => paginate(citadaoParticipants),
  'citadao-awards': () => paginate(citadaoAwards),
  tunas: () => paginate(tunas),
  venues: () => paginate(venues),
  'palmares-years': () => paginate(palmaresYears),
  'award-types': () => paginate(awardTypes),
  'blog-posts': () => paginate(blogPosts),
  videos: () => paginate(videos),
  albums: () => paginate(albums),
  pages: () => paginate([]),
} as const;

export const globalFixtures = {
  'site-settings': () => siteSettings,
  'contact-info': () => contactInfo,
} as const;

export type FixtureEndpoint = keyof typeof fixtures;
export type GlobalFixtureEndpoint = keyof typeof globalFixtures;
