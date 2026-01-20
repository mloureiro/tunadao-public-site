/**
 * CMS Public API - Main entry point with data transformation
 */

import type {
  CMSCitadaoEdition,
  CMSBlogPost,
  CMSVideo,
  CMSAlbum,
  CMSPalmaresYear,
  CMSAwardType,
  CMSMedia,
  FrontendCitadaoEdition,
  FrontendBlogPost,
  FrontendVideo,
  FrontendAlbum,
  FrontendPalmaresYear,
  FrontendContactInfo,
  FrontendSocialLinks,
} from './types';

import * as client from './client';
import { richTextToHtml, estimateReadingTime } from './rich-text';

// Re-export types
export type * from './types';

// Re-export utilities
export { richTextToHtml, estimateReadingTime } from './rich-text';
export { CMSError } from './client';

const CMS_URL = import.meta.env.CMS_URL || 'http://localhost:3000';

/**
 * Get the CMS media URL
 */
export function getMediaUrl(media: CMSMedia | string | undefined | null): string {
  if (!media) return '';

  if (typeof media === 'string') {
    // It's already an ID or URL
    if (media.startsWith('http') || media.startsWith('/')) {
      return media;
    }
    // It's an ID, construct the URL
    return `${CMS_URL}/media/${media}`;
  }

  // It's a CMSMedia object
  if (media.url) {
    // If URL is relative, make it absolute
    if (media.url.startsWith('/')) {
      return `${CMS_URL}${media.url}`;
    }
    return media.url;
  }

  return '';
}

// =============================================================================
// CITADÃO EDITIONS
// =============================================================================

function transformCitadaoEdition(cms: CMSCitadaoEdition): FrontendCitadaoEdition {
  // Transform awards from CMS format to Record<string, string>
  let awards: Record<string, string> | null = null;

  if (cms.awards && cms.awards.length > 0) {
    awards = {};
    for (const award of cms.awards) {
      const awardType =
        typeof award.awardType === 'string'
          ? award.awardType
          : (award.awardType as CMSAwardType).slug;
      awards[awardType] = award.winner;
    }
  }

  return {
    edition: cms.edition,
    year: cms.year,
    date: cms.date || '',
    venue: cms.venue || '',
    tunas: cms.tunas?.map((t) => t.name) || [],
    guests: cms.guests?.map((g) => g.name) || [],
    awards,
    notes: cms.notes,
  };
}

export async function getCitadaoEditions(): Promise<FrontendCitadaoEdition[]> {
  const cmsEditions = await client.getCitadaoEditions();
  return cmsEditions.map(transformCitadaoEdition);
}

export async function getCitadaoEditionByYear(
  year: number
): Promise<FrontendCitadaoEdition | null> {
  const cmsEdition = await client.getCitadaoEditionByYear(year);
  if (cmsEdition) {
    return transformCitadaoEdition(cmsEdition);
  }
  return null;
}

// =============================================================================
// BLOG POSTS
// =============================================================================

function transformBlogPost(cms: CMSBlogPost): FrontendBlogPost {
  const content = richTextToHtml(cms.content);
  const readingTime = estimateReadingTime(cms.content);

  // Get first tag as category, or default to 'Notícias'
  const category = cms.tags?.[0]?.tag || 'Notícias';

  // Get featured image URL
  const image = getMediaUrl(cms.featuredImage);

  return {
    slug: cms.slug,
    title: cms.title,
    excerpt: cms.excerpt,
    content,
    date: cms.publishedAt,
    image,
    category,
    readingTime,
  };
}

export async function getBlogPosts(): Promise<FrontendBlogPost[]> {
  const cmsPosts = await client.getBlogPosts();
  return cmsPosts.map(transformBlogPost);
}

export async function getBlogPostBySlug(slug: string): Promise<FrontendBlogPost | null> {
  const cmsPost = await client.getBlogPostBySlug(slug);
  if (cmsPost) {
    return transformBlogPost(cmsPost);
  }
  return null;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const cmsPosts = await client.getBlogPosts();
  return cmsPosts.map((p) => p.slug);
}

// =============================================================================
// VIDEOS
// =============================================================================

function transformVideo(cms: CMSVideo): FrontendVideo {
  const year = new Date(cms.publishedAt).getFullYear();

  return {
    id: cms.id,
    title: cms.title,
    youtubeId: cms.youtubeId,
    category: cms.category,
    year,
  };
}

export async function getVideos(): Promise<FrontendVideo[]> {
  const cmsVideos = await client.getVideos();
  return cmsVideos.map(transformVideo);
}

// =============================================================================
// ALBUMS
// =============================================================================

function extractSpotifyAlbumId(spotifyUrl: string | undefined): string | undefined {
  if (!spotifyUrl) return undefined;

  // Extract album ID from Spotify URL
  // e.g., https://open.spotify.com/album/5ljVRcZan9DLkFDm5aWAgt
  const match = spotifyUrl.match(/album\/([a-zA-Z0-9]+)/);
  return match ? match[1] : undefined;
}

function transformAlbum(cms: CMSAlbum): FrontendAlbum {
  const description = cms.description ? richTextToHtml(cms.description) : '';

  return {
    id: cms.id,
    title: cms.title,
    year: cms.year,
    spotifyAlbumId: extractSpotifyAlbumId(cms.spotifyUrl),
    description,
    type: cms.recordingType || 'studio',
  };
}

export async function getAlbums(): Promise<FrontendAlbum[]> {
  const cmsAlbums = await client.getAlbums();
  return cmsAlbums.map(transformAlbum);
}

// =============================================================================
// PALMARÉS
// =============================================================================

function transformPalmaresYear(
  cms: CMSPalmaresYear,
  awardTypes: Map<string, string>
): FrontendPalmaresYear {
  return {
    year: cms.year,
    festivals: cms.festivals.map((festival) => ({
      name: festival.name,
      location: festival.location || '',
      awards: festival.awards.map((award) => {
        // Use custom name if provided, otherwise look up award type name
        if (award.customName) {
          return award.customName;
        }

        if (award.awardType) {
          const awardTypeId =
            typeof award.awardType === 'string'
              ? award.awardType
              : (award.awardType as CMSAwardType).id;
          return awardTypes.get(awardTypeId) || 'Prémio';
        }

        return 'Prémio';
      }),
    })),
  };
}

export async function getPalmaresYears(): Promise<FrontendPalmaresYear[]> {
  const [cmsYears, cmsAwardTypes] = await Promise.all([
    client.getPalmaresYears(),
    client.getAwardTypes(),
  ]);

  // Create a map of award type IDs to names
  const awardTypesMap = new Map<string, string>();
  for (const at of cmsAwardTypes) {
    awardTypesMap.set(at.id, at.name);
  }

  return cmsYears.map((y) => transformPalmaresYear(y, awardTypesMap));
}

// =============================================================================
// CONTACT INFO
// =============================================================================

export async function getContactInfo(): Promise<FrontendContactInfo> {
  const cmsContact = await client.getContactInfo();
  return {
    email: cmsContact.email,
    phone: cmsContact.phone || '',
    address: cmsContact.address?.replace(/\n/g, ', ') || '',
  };
}

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export async function getSocialLinks(): Promise<FrontendSocialLinks> {
  const cmsSettings = await client.getSiteSettings();
  return {
    instagram: cmsSettings.instagram,
    facebook: cmsSettings.facebook,
    tiktok: cmsSettings.tiktok,
    youtube: cmsSettings.youtube,
    spotify: cmsSettings.spotify,
  };
}

// =============================================================================
// SITE SETTINGS
// =============================================================================

export async function getSiteSettings() {
  const settings = await client.getSiteSettings();
  return {
    siteName: settings.siteName,
    siteDescription: settings.siteDescription,
    logoUrl: getMediaUrl(settings.logo),
    faviconUrl: getMediaUrl(settings.favicon),
    socialLinks: {
      instagram: settings.instagram,
      facebook: settings.facebook,
      tiktok: settings.tiktok,
      youtube: settings.youtube,
      spotify: settings.spotify,
    },
    googleAnalyticsId: settings.googleAnalyticsId,
  };
}

// =============================================================================
// UTILITY
// =============================================================================

export async function checkCMSAvailable(): Promise<void> {
  return client.checkCMSConnection();
}
