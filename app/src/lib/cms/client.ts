/**
 * CMS Client - Raw fetch functions for PayloadCMS REST API
 */

import type {
  CMSCitadaoEdition,
  CMSPalmaresYear,
  CMSAwardType,
  CMSBlogPost,
  CMSVideo,
  CMSAlbum,
  CMSPage,
  CMSSiteSettings,
  CMSContactInfo,
  CMSPaginatedResponse,
} from './types';

const CMS_URL = import.meta.env.CMS_URL || 'http://localhost:3000';

interface FetchOptions {
  depth?: number;
  where?: Record<string, unknown>;
  sort?: string;
  limit?: number;
  page?: number;
}

async function fetchFromCMS<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T | null> {
  const { depth = 2, where, sort, limit, page } = options;

  const params = new URLSearchParams();
  params.set('depth', String(depth));

  if (where) {
    params.set('where', JSON.stringify(where));
  }
  if (sort) {
    params.set('sort', sort);
  }
  if (limit) {
    params.set('limit', String(limit));
  }
  if (page) {
    params.set('page', String(page));
  }

  const url = `${CMS_URL}/api/${endpoint}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn(`[CMS] Error fetching ${endpoint}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch {
    // Silently fail - CMS is not available, will use fallback data
    return null;
  }
}

async function fetchGlobal<T>(slug: string): Promise<T | null> {
  const url = `${CMS_URL}/api/globals/${slug}?depth=2`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn(`[CMS] Error fetching global ${slug}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch {
    // Silently fail - CMS is not available, will use fallback data
    return null;
  }
}

// Citadão Editions
export async function getCitadaoEditions(): Promise<CMSCitadaoEdition[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSCitadaoEdition>>(
    'citadao-editions',
    {
      where: { status: { equals: 'published' } },
      sort: '-year',
      limit: 100,
    }
  );

  if (response?.docs) {
    console.log(`[CMS] Fetched ${response.docs.length} Citadão editions`);
    return response.docs;
  }

  return [];
}

export async function getCitadaoEditionByYear(
  year: number
): Promise<CMSCitadaoEdition | null> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSCitadaoEdition>>(
    'citadao-editions',
    {
      where: {
        and: [{ status: { equals: 'published' } }, { year: { equals: year } }],
      },
      limit: 1,
    }
  );

  if (response?.docs && response.docs.length > 0) {
    console.log(`[CMS] Fetched Citadão edition ${year}`);
    return response.docs[0];
  }

  return null;
}

// Palmarés
export async function getPalmaresYears(): Promise<CMSPalmaresYear[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSPalmaresYear>>(
    'palmares-years',
    {
      where: { status: { equals: 'published' } },
      sort: '-year',
      limit: 100,
    }
  );

  if (response?.docs) {
    console.log(`[CMS] Fetched ${response.docs.length} Palmarés years`);
    return response.docs;
  }

  return [];
}

// Award Types
export async function getAwardTypes(): Promise<CMSAwardType[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSAwardType>>(
    'award-types',
    {
      limit: 100,
    }
  );

  if (response?.docs) {
    console.log(`[CMS] Fetched ${response.docs.length} award types`);
    return response.docs;
  }

  return [];
}

// Blog Posts
export async function getBlogPosts(): Promise<CMSBlogPost[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSBlogPost>>(
    'blog-posts',
    {
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 100,
    }
  );

  if (response?.docs) {
    console.log(`[CMS] Fetched ${response.docs.length} blog posts`);
    return response.docs;
  }

  return [];
}

export async function getBlogPostBySlug(
  slug: string
): Promise<CMSBlogPost | null> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSBlogPost>>(
    'blog-posts',
    {
      where: {
        and: [{ status: { equals: 'published' } }, { slug: { equals: slug } }],
      },
      limit: 1,
    }
  );

  if (response?.docs && response.docs.length > 0) {
    console.log(`[CMS] Fetched blog post: ${slug}`);
    return response.docs[0];
  }

  return null;
}

// Videos
export async function getVideos(): Promise<CMSVideo[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSVideo>>('videos', {
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 100,
  });

  if (response?.docs) {
    console.log(`[CMS] Fetched ${response.docs.length} videos`);
    return response.docs;
  }

  return [];
}

// Albums
export async function getAlbums(): Promise<CMSAlbum[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSAlbum>>('albums', {
    where: { status: { equals: 'published' } },
    sort: '-year',
    limit: 100,
  });

  if (response?.docs) {
    console.log(`[CMS] Fetched ${response.docs.length} albums`);
    return response.docs;
  }

  return [];
}

// Pages
export async function getPageBySlug(slug: string): Promise<CMSPage | null> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSPage>>('pages', {
    where: {
      and: [{ status: { equals: 'published' } }, { slug: { equals: slug } }],
    },
    limit: 1,
  });

  if (response?.docs && response.docs.length > 0) {
    console.log(`[CMS] Fetched page: ${slug}`);
    return response.docs[0];
  }

  return null;
}

// Globals
export async function getSiteSettings(): Promise<CMSSiteSettings | null> {
  const data = await fetchGlobal<CMSSiteSettings>('site-settings');

  if (data) {
    console.log('[CMS] Fetched site settings');
    return data;
  }

  return null;
}

export async function getContactInfo(): Promise<CMSContactInfo | null> {
  const data = await fetchGlobal<CMSContactInfo>('contact-info');

  if (data) {
    console.log('[CMS] Fetched contact info');
    return data;
  }

  return null;
}

// Health check
export async function checkCMSConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${CMS_URL}/api/users/me`, {
      method: 'GET',
    });
    return response.status !== 404;
  } catch {
    return false;
  }
}
