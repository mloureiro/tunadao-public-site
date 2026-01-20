/**
 * CMS Client - Raw fetch functions for PayloadCMS REST API
 *
 * Set USE_TEST_FIXTURES=true to use static fixtures instead of live CMS.
 * This is useful for E2E tests and builds without a running CMS.
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
import {
  fixtures,
  globalFixtures,
  type FixtureEndpoint,
  type GlobalFixtureEndpoint,
} from './fixtures';

const CMS_URL = import.meta.env.CMS_URL || 'http://localhost:3000';
const USE_TEST_FIXTURES = import.meta.env.USE_TEST_FIXTURES === 'true';

interface FetchOptions {
  depth?: number;
  where?: Record<string, unknown>;
  sort?: string;
  limit?: number;
  page?: number;
}

export class CMSError extends Error {
  constructor(
    message: string,
    public readonly endpoint: string,
    public readonly statusCode?: number
  ) {
    super(message);
    this.name = 'CMSError';
  }
}

async function fetchFromCMS<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  // Use test fixtures if enabled
  if (USE_TEST_FIXTURES) {
    const fixtureKey = endpoint as FixtureEndpoint;
    if (fixtureKey in fixtures) {
      console.log(`[CMS:Fixtures] Using fixture for ${endpoint}`);
      return fixtures[fixtureKey]() as T;
    }
    throw new CMSError(`No fixture found for endpoint: ${endpoint}`, endpoint);
  }

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

  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new CMSError(
      `Failed to connect to CMS at ${CMS_URL}. Is the CMS running?`,
      endpoint
    );
  }

  if (!response.ok) {
    throw new CMSError(
      `CMS returned error ${response.status} for ${endpoint}`,
      endpoint,
      response.status
    );
  }

  const data = await response.json();
  return data;
}

async function fetchGlobal<T>(slug: string): Promise<T> {
  // Use test fixtures if enabled
  if (USE_TEST_FIXTURES) {
    const fixtureKey = slug as GlobalFixtureEndpoint;
    if (fixtureKey in globalFixtures) {
      console.log(`[CMS:Fixtures] Using fixture for global ${slug}`);
      return globalFixtures[fixtureKey]() as T;
    }
    throw new CMSError(`No fixture found for global: ${slug}`, `globals/${slug}`);
  }

  const url = `${CMS_URL}/api/globals/${slug}?depth=2`;

  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new CMSError(
      `Failed to connect to CMS at ${CMS_URL}. Is the CMS running?`,
      `globals/${slug}`
    );
  }

  if (!response.ok) {
    throw new CMSError(
      `CMS returned error ${response.status} for global ${slug}`,
      `globals/${slug}`,
      response.status
    );
  }

  const data = await response.json();
  return data;
}

// Citadão Editions
export async function getCitadaoEditions(): Promise<CMSCitadaoEdition[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSCitadaoEdition>>('citadao-editions', {
    where: { status: { equals: 'published' } },
    sort: '-year',
    limit: 100,
  });

  console.log(`[CMS] Fetched ${response.docs.length} Citadão editions`);
  return response.docs;
}

export async function getCitadaoEditionByYear(year: number): Promise<CMSCitadaoEdition | null> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSCitadaoEdition>>('citadao-editions', {
    where: {
      and: [{ status: { equals: 'published' } }, { year: { equals: year } }],
    },
    limit: 1,
  });

  if (response.docs.length > 0) {
    console.log(`[CMS] Fetched Citadão edition ${year}`);
    return response.docs[0];
  }

  return null;
}

// Palmarés
export async function getPalmaresYears(): Promise<CMSPalmaresYear[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSPalmaresYear>>('palmares-years', {
    where: { status: { equals: 'published' } },
    sort: '-year',
    limit: 100,
  });

  console.log(`[CMS] Fetched ${response.docs.length} Palmarés years`);
  return response.docs;
}

// Award Types
export async function getAwardTypes(): Promise<CMSAwardType[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSAwardType>>('award-types', {
    limit: 100,
  });

  console.log(`[CMS] Fetched ${response.docs.length} award types`);
  return response.docs;
}

// Blog Posts
export async function getBlogPosts(): Promise<CMSBlogPost[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSBlogPost>>('blog-posts', {
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 100,
  });

  console.log(`[CMS] Fetched ${response.docs.length} blog posts`);
  return response.docs;
}

export async function getBlogPostBySlug(slug: string): Promise<CMSBlogPost | null> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSBlogPost>>('blog-posts', {
    where: {
      and: [{ status: { equals: 'published' } }, { slug: { equals: slug } }],
    },
    limit: 1,
  });

  if (response.docs.length > 0) {
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

  console.log(`[CMS] Fetched ${response.docs.length} videos`);
  return response.docs;
}

// Albums
export async function getAlbums(): Promise<CMSAlbum[]> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSAlbum>>('albums', {
    where: { status: { equals: 'published' } },
    sort: '-year',
    limit: 100,
  });

  console.log(`[CMS] Fetched ${response.docs.length} albums`);
  return response.docs;
}

// Pages
export async function getPageBySlug(slug: string): Promise<CMSPage | null> {
  const response = await fetchFromCMS<CMSPaginatedResponse<CMSPage>>('pages', {
    where: {
      and: [{ status: { equals: 'published' } }, { slug: { equals: slug } }],
    },
    limit: 1,
  });

  if (response.docs.length > 0) {
    console.log(`[CMS] Fetched page: ${slug}`);
    return response.docs[0];
  }

  return null;
}

// Globals
export async function getSiteSettings(): Promise<CMSSiteSettings> {
  const data = await fetchGlobal<CMSSiteSettings>('site-settings');
  console.log('[CMS] Fetched site settings');
  return data;
}

export async function getContactInfo(): Promise<CMSContactInfo> {
  const data = await fetchGlobal<CMSContactInfo>('contact-info');
  console.log('[CMS] Fetched contact info');
  return data;
}

// Health check - throws if CMS is not reachable (skipped in fixtures mode)
export async function checkCMSConnection(): Promise<void> {
  if (USE_TEST_FIXTURES) {
    console.log('[CMS:Fixtures] Using test fixtures - skipping CMS connection check');
    return;
  }

  try {
    const response = await fetch(`${CMS_URL}/api/users/me`, {
      method: 'GET',
    });
    if (response.status === 404) {
      throw new CMSError('CMS API not found', 'users/me', 404);
    }
    console.log(`[CMS] Connected to ${CMS_URL}`);
  } catch (error) {
    if (error instanceof CMSError) throw error;
    throw new CMSError(
      `Failed to connect to CMS at ${CMS_URL}. Is the CMS running?`,
      'users/me'
    );
  }
}
