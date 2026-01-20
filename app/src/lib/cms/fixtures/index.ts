/**
 * Test Fixtures - Static data for E2E tests and development without CMS
 *
 * These fixtures are used when USE_TEST_FIXTURES=true environment variable is set.
 * This allows builds to complete without a running CMS instance.
 */

import type {
  CMSCitadaoEdition,
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
  { id: 'at1', name: 'Melhor Tuna', slug: 'melhor-tuna' },
  { id: 'at2', name: 'Melhor Serenata', slug: 'melhor-serenata' },
  { id: 'at3', name: 'Tuna Mais Tuna', slug: 'tuna-mais-tuna' },
  { id: 'at4', name: 'Melhor Pandeireta', slug: 'melhor-pandeireta' },
  { id: 'at5', name: 'Melhor Instrumental', slug: 'melhor-instrumental' },
];

// =============================================================================
// CITADÃO EDITIONS
// =============================================================================

const citadaoEditions: CMSCitadaoEdition[] = [
  {
    id: 'ce1',
    title: 'XVIII CITADÃO',
    edition: 18,
    year: 2024,
    date: '2024-05-15',
    venue: 'Teatro Viriato, Viseu',
    tunas: [
      { name: 'Tuna Exemplo 1' },
      { name: 'Tuna Exemplo 2' },
      { name: 'Tuna Exemplo 3' },
    ],
    guests: [{ name: 'Artista Convidado' }],
    awards: [
      { awardType: awardTypes[0], winner: 'Tuna Exemplo 1' },
      { awardType: awardTypes[1], winner: 'Tuna Exemplo 2' },
    ],
    status: 'published',
  },
  {
    id: 'ce2',
    title: 'XVII CITADÃO',
    edition: 17,
    year: 2023,
    date: '2023-05-10',
    venue: 'Teatro Viriato, Viseu',
    tunas: [{ name: 'Tuna Teste A' }, { name: 'Tuna Teste B' }],
    status: 'published',
  },
];

// =============================================================================
// PALMARÉS
// =============================================================================

const palmaresYears: CMSPalmaresYear[] = [
  {
    id: 'py1',
    yearTitle: '2024',
    year: 2024,
    festivals: [
      {
        name: 'Festival Exemplo',
        location: 'Lisboa',
        awards: [{ awardType: awardTypes[0] }, { awardType: awardTypes[3] }],
      },
    ],
    status: 'published',
  },
  {
    id: 'py2',
    yearTitle: '2023',
    year: 2023,
    festivals: [
      {
        name: 'Outro Festival',
        location: 'Porto',
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
    id: 'bp1',
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
      id: 'img1',
      url: '/placeholder.jpg',
      filename: 'placeholder.jpg',
      mimeType: 'image/jpeg',
      filesize: 1000,
      alt: 'Imagem de teste',
    },
    author: { id: 'u1', email: 'test@test.com', role: 'admin' },
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
    id: 'v1',
    title: 'Vídeo de Teste',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'atuacao',
    featured: true,
    publishedAt: '2024-01-10T10:00:00.000Z',
    status: 'published',
  },
  {
    id: 'v2',
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
    id: 'a1',
    title: 'Álbum de Teste',
    year: 2020,
    coverImage: {
      id: 'img2',
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
  siteName: 'Tunadão 1998',
  siteDescription: 'Tuna Académica do Instituto Politécnico de Viseu',
  instagram: 'https://www.instagram.com/tunadao1998/',
  facebook: 'https://www.facebook.com/tunadao1998',
  tiktok: 'https://www.tiktok.com/@tunadao1998',
  youtube: 'https://www.youtube.com/@TUNADAO1998',
  spotify: 'https://open.spotify.com/artist/7HeYIxlV5Nb1KvZkBx00sH',
};

const contactInfo: CMSContactInfo = {
  email: 'tunadao@gmail.com',
  phone: '+351 928 155 399',
  address: 'Campus Politécnico de Viseu, 3504-510 Viseu',
};

// =============================================================================
// EXPORTS
// =============================================================================

export const fixtures = {
  'citadao-editions': () => paginate(citadaoEditions),
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
