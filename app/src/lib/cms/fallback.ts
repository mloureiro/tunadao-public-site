/**
 * Fallback Data - Static data when CMS is unavailable
 */

import type {
  FrontendCitadaoEdition,
  FrontendBlogPost,
  FrontendVideo,
  FrontendAlbum,
  FrontendPalmaresYear,
  FrontendContactInfo,
  FrontendSocialLinks,
} from './types';

// Import existing static data
import { editionsData, awardLabels } from '@data/citadao-editions';
import { postsData, getAllPosts } from '@data/blog-posts';

// Re-export for direct access if needed
export { editionsData, awardLabels, postsData, getAllPosts };

// Citadão editions fallback
export function getFallbackCitadaoEditions(): FrontendCitadaoEdition[] {
  return Object.values(editionsData).sort((a, b) => b.year - a.year);
}

export function getFallbackCitadaoEditionByYear(year: number): FrontendCitadaoEdition | null {
  return editionsData[year] || null;
}

// Blog posts fallback
export function getFallbackBlogPosts(): FrontendBlogPost[] {
  return getAllPosts();
}

export function getFallbackBlogPostBySlug(slug: string): FrontendBlogPost | null {
  return postsData[slug] || null;
}

// Videos fallback
export function getFallbackVideos(): FrontendVideo[] {
  return [
    {
      id: 'video1',
      title: 'CITADÃO 2024 - Melhores Momentos',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'citadao',
      year: 2024,
    },
    {
      id: 'video2',
      title: 'Serenata na Praça da República',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'serenata',
      year: 2023,
    },
    {
      id: 'video3',
      title: 'FITUA 2023 - Atuação Completa',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'festival',
      year: 2023,
    },
    {
      id: 'video4',
      title: 'Passacalles Queima das Fitas Viseu',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'atuacao',
      year: 2024,
    },
    {
      id: 'video5',
      title: 'CITADÃO 2023 - 17ª Edição',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'citadao',
      year: 2023,
    },
    {
      id: 'video6',
      title: 'Atuação Aniversário IPV',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'atuacao',
      year: 2023,
    },
  ];
}

// Albums fallback
export function getFallbackAlbums(): FrontendAlbum[] {
  return [
    {
      id: 'de-capa-bem-tracada',
      title: 'De Capa Bem Traçada',
      year: 2008,
      spotifyAlbumId: '5ljVRcZan9DLkFDm5aWAgt',
      description:
        'O segundo álbum da Tunadão, gravado em estúdio com os maiores sucessos do repertório.',
      type: 'studio',
    },
    {
      id: 'por-ruelas-e-calcadas',
      title: 'Por Ruelas e Calçadas',
      year: 2003,
      spotifyAlbumId: '3xcpAOCKk7soUNfdnTC6Sn',
      description:
        'O primeiro álbum da Tunadão, uma gravação ao vivo que captura a essência das nossas atuações.',
      type: 'live',
    },
  ];
}

// Palmarés fallback
export function getFallbackPalmaresYears(): FrontendPalmaresYear[] {
  return [
    {
      year: 2019,
      festivals: [
        {
          name: 'XXIX FITUA',
          location: 'Aveiro',
          awards: ['Melhor Instrumental', 'Melhor Tuna', 'Tuna + Bebedoura'],
        },
        {
          name: 'XXIX FITU Bracara Augusta',
          location: 'Braga',
          awards: ['Tuna do Público', 'Melhor Pandeireta', 'Melhor Tuna'],
        },
        {
          name: 'XIII FITUCB',
          location: 'Castelo Branco',
          awards: ['Melhor Estandarte', '2ª Melhor Tuna'],
        },
      ],
    },
    {
      year: 2018,
      festivals: [
        {
          name: 'XXVIII Festuna',
          location: 'Coimbra',
          awards: ['2ª Melhor Tuna', 'Melhor Pandeireta'],
        },
        {
          name: 'XII Cidade de Berço',
          location: 'Guimarães',
          awards: [
            'Melhor Solista',
            'Melhor Instrumental',
            'Tuna + Tuna',
            'Melhor Interpretação Musical',
            'Melhor Tuna',
            'Melhor Serenata',
          ],
        },
      ],
    },
    {
      year: 2017,
      festivals: [
        { name: 'XVI Oppidana', location: 'Guarda', awards: ['Tuna + Tuna'] },
        {
          name: 'XII Barca Celi',
          location: 'Barcelos',
          awards: ['Melhor Tema Original', 'Melhor Tuna'],
        },
        {
          name: 'XXVII FITU Bracara Augusta',
          location: 'Braga',
          awards: ['Melhor Pandeireta', '3ª Melhor Tuna'],
        },
        {
          name: 'IX Cantar de Estudante',
          location: 'Coimbra',
          awards: ['Tuna + Tuna', 'Tuna do Público'],
        },
      ],
    },
    {
      year: 2016,
      festivals: [
        {
          name: 'VII Collipo',
          location: 'Leiria',
          awards: ['Melhor Passacalles', 'Tuna + Tuna', 'Tuna do Público', 'Melhor Solista'],
        },
        {
          name: 'XXVI FITU Bracara Augusta',
          location: 'Braga',
          awards: [
            'Prémio Ibero-Americano',
            'Tuna + Tuna',
            'Melhor Pandeireta',
            'Melhor Estandarte',
            'Melhor Tuna',
          ],
        },
      ],
    },
    {
      year: 2015,
      festivals: [
        {
          name: 'VI Collipo',
          location: 'Leiria',
          awards: ['Melhor Tuna', 'Melhor Serenata', 'Tuna do Público'],
        },
        {
          name: 'III Herminius',
          location: 'Covilhã',
          awards: ['Melhor Tuna', 'Melhor Serenata', 'Tuna do Público'],
        },
        {
          name: 'FITUCB',
          location: 'Castelo Branco',
          awards: ['Melhor Instrumental', 'Tuna + Tuna', '2ª Melhor Tuna'],
        },
        {
          name: 'VII Cantar de Estudante',
          location: 'Coimbra',
          awards: ['Tuna + Tuna', 'Tuna do Público'],
        },
      ],
    },
    {
      year: 2014,
      festivals: [
        {
          name: 'XIX Alcatráz',
          location: 'Vila do Conde',
          awards: ['Melhor Tuna'],
        },
        {
          name: 'IX Barca Celi',
          location: 'Barcelos',
          awards: [
            '2ª Melhor Tuna',
            'Serenata',
            'Melhor Instrumental',
            'Melhor Porta-Estandarte',
            'Melhor Solista',
            'Tuna + Tuna',
          ],
        },
        {
          name: 'XXI Celta',
          location: 'Braga',
          awards: ['Melhor Instrumental'],
        },
      ],
    },
    {
      year: 2013,
      festivals: [
        { name: 'Portuscalle 13', location: 'Porto', awards: ['Tuna + Tuna'] },
        {
          name: 'XXIII FITU Bracara Augusta',
          location: 'Braga',
          awards: ['3ª Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta'],
        },
        {
          name: 'IX Ciclone',
          location: 'Angra do Heroísmo',
          awards: ['Melhor Tuna', 'Melhor Original', 'Melhor Pandeireta'],
        },
      ],
    },
    {
      year: 2012,
      festivals: [
        {
          name: 'XIX FITISEP',
          location: 'Porto',
          awards: ['2ª Melhor Tuna', 'Melhor Bandeira'],
        },
        {
          name: 'Padrecos 2012',
          location: 'Porto',
          awards: ['Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta', 'Melhor Porta-Estandarte'],
        },
        {
          name: 'XII Lethes',
          location: 'Viana do Castelo',
          awards: ['Melhor Pandeireta', 'Tuna + Tuna'],
        },
        {
          name: 'I Noites de Ronda',
          location: 'Porto',
          awards: ['Melhor Serenata', 'Melhor Porta-Estandarte', 'Tuna + Tuna', '2ª Melhor Tuna'],
        },
      ],
    },
    {
      year: 2011,
      festivals: [
        {
          name: 'IX Terra de Cante',
          location: 'Beja',
          awards: ['Melhor Pandeireta', 'Tuna + Tuna', '2ª Melhor Tuna'],
        },
        {
          name: 'XIV FITAFF',
          location: 'Figueira da Foz',
          awards: ['Melhor Tuna', 'Melhor Serenata', 'Melhor Pandeireta'],
        },
        {
          name: 'XIII Fartuna',
          location: 'Faro',
          awards: [
            'Melhor Serenata',
            'Melhor Pandeireta',
            'Melhor Passacalles',
            'Tuna + Marafada',
            'Tuna + Tuna',
          ],
        },
        {
          name: 'IX Estudantino',
          location: 'Lisboa',
          awards: [
            '3ª Melhor Tuna',
            'Tuna + Tuna',
            'Tuna do Público',
            'Melhor Serenata',
            'Melhor Passacalles',
          ],
        },
      ],
    },
    {
      year: 2010,
      festivals: [
        {
          name: 'XI El Açor',
          location: '',
          awards: ['3ª Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta', 'Melhor Estandarte'],
        },
        {
          name: 'IX Templário',
          location: '',
          awards: [
            '2ª Melhor Tuna',
            'Tuna + Tuna',
            'Melhor Pandeireta',
            'Tuna do Público',
            'Melhor Passacalles',
          ],
        },
        { name: 'FITAFF 2010', location: '', awards: ['Melhor Tuna', 'Tuna + Tuna'] },
      ],
    },
    {
      year: 2009,
      festivals: [
        {
          name: 'Oppidana 09',
          location: 'Guarda',
          awards: ['Tuna + Tuna', 'Melhor Tuna'],
        },
        {
          name: 'XIII FETUF',
          location: 'Porto',
          awards: ['Melhor Passacalles', 'Grande Prémio XII FETUF', 'Melhor Estandarte'],
        },
        {
          name: 'XVI FITISEP',
          location: 'Porto',
          awards: ['Melhor Tuna', 'Melhor Pandeireta'],
        },
        {
          name: 'XV FITUP-IDH',
          location: 'Porto',
          awards: ['Melhor Tuna', 'Melhor Pandeireta', 'Tuna + Tuna'],
        },
        { name: 'FITAs 2009', location: 'Castelo Branco', awards: ['Melhor Tuna'] },
        {
          name: 'XI Festilha',
          location: 'Ílhavo',
          awards: [
            'Melhor Tuna',
            'Tuna + Tuna',
            'Melhor Instrumental',
            'Melhor Pandeireta',
            'Melhor Passacalles',
          ],
        },
        {
          name: 'VI Cidade Berço',
          location: 'Guimarães',
          awards: ['2ª Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta'],
        },
        { name: 'XVI Celta', location: 'Braga', awards: ['Tuna + Tuna'] },
      ],
    },
    {
      year: 2008,
      festivals: [
        {
          name: 'X FITAB 2008',
          location: 'Bragança',
          awards: ['Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta', 'Melhor Porta-Estandarte'],
        },
        {
          name: 'V FITUIFF',
          location: 'Figueira da Foz',
          awards: ['Melhor Tuna', 'Instrumental', 'Serenata'],
        },
        {
          name: 'XII FETUF',
          location: 'Porto',
          awards: [
            'Porta-Estandarte',
            'Pandeireta',
            'Passacalles',
            'Instrumental',
            'Tuna + Tuna',
            'Grande Prémio XII FETUF',
          ],
        },
        {
          name: "III Ulveira d'Espital",
          location: 'Oliveira do Hospital',
          awards: [
            'Melhor Tuna',
            'Melhor Pandeireta',
            'Melhor Passacalles',
            'Melhor Porta-Estandarte',
          ],
        },
        {
          name: 'II Festival Tunas da Raia',
          location: 'Sabugal',
          awards: ['Melhor Passacalles', 'Melhor Pandeireta'],
        },
        {
          name: "FITUCB'08",
          location: 'Castelo Branco',
          awards: ['Tuna + Tuna', 'Melhor Tuna', 'Melhor Instrumental'],
        },
        {
          name: 'VIII Festival Internacional de Tunas do Atlântico',
          location: 'Madeira',
          awards: ['Melhor Pandeireta', 'Melhor Tuna', 'Tuna + Tuna', 'Melhor Instrumental'],
        },
      ],
    },
    {
      year: 2007,
      festivals: [
        {
          name: 'II Festival de Tunas Académicas de Santa Comba Dão',
          location: 'Santa Comba Dão',
          awards: ['Melhor Porta-Estandarte'],
        },
        {
          name: 'I Encontro de Tunas da ESEnfC',
          location: 'Coimbra',
          awards: ['Melhor Tuna', 'Tuna + Tuna'],
        },
        {
          name: 'I Por Terras do Sado',
          location: 'Setúbal',
          awards: ['Melhor Instrumental', 'Melhor Serenata', 'Melhor Pandeireta', 'Tuna + Tuna'],
        },
        {
          name: 'II FETUA - ESEnf',
          location: 'Oliveira de Azeméis',
          awards: ['Melhor Tuna'],
        },
      ],
    },
    {
      year: 2005,
      festivals: [
        {
          name: 'Festival de Tunas do 15º Aniversário do ISVOUGA',
          location: 'Santa Maria da Feira',
          awards: ['Melhor Pandeireta'],
        },
        {
          name: 'Maltunas - Festival de Tunas Académicas',
          location: 'Guarda',
          awards: ['Melhor Solista'],
        },
        {
          name: 'FITQFC 2005',
          location: 'Coimbra',
          awards: ['Melhor Tuna', 'Tuna + Tuna'],
        },
        {
          name: 'VII FITAB 2005',
          location: 'Bragança',
          awards: ['Melhor Tuna', 'Melhor Serenata'],
        },
        { name: 'III Festubi', location: 'Covilhã', awards: ['Instrumental'] },
        { name: 'VI Vultos', location: 'Vila Nova de Gaia', awards: ['Tuna + Tuna'] },
      ],
    },
    {
      year: 2004,
      festivals: [
        {
          name: 'Festival de Tunas do Vale do Arda',
          location: 'Castelo de Paiva',
          awards: ['Melhor Instrumental', 'Melhor Solista'],
        },
        {
          name: 'I FITACA',
          location: 'Mirandela',
          awards: ['Melhor Tuna', 'Melhor Instrumental', 'Tuna + Tuna'],
        },
      ],
    },
    {
      year: 2001,
      festivals: [{ name: 'I CENTUP', location: 'Santarém', awards: ['Tuna + Tuna'] }],
    },
    {
      year: 1999,
      festivals: [
        {
          name: '1º Festival de Tunas Académicas de Fornos',
          location: 'Freixo de Espada à Cinta',
          awards: ['3ª Melhor Tuna', 'Melhor Pandeireta'],
        },
      ],
    },
  ];
}

// Contact info fallback
export function getFallbackContactInfo(): FrontendContactInfo {
  return {
    email: 'tunadao@gmail.com',
    phone: '+351 928 155 399',
    address: 'Campus Politécnico de Viseu, 3504-510 Viseu',
  };
}

// Social links fallback
export function getFallbackSocialLinks(): FrontendSocialLinks {
  return {
    instagram: 'https://www.instagram.com/tunadao1998/',
    facebook: 'https://www.facebook.com/tunadao1998',
    tiktok: 'https://www.tiktok.com/@tunadao1998',
    youtube: 'https://www.youtube.com/@TUNADAO1998',
    spotify: 'https://open.spotify.com/artist/7HeYIxlV5Nb1KvZkBx00sH',
  };
}
