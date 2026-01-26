/**
 * CMS Public API - Main entry point with data transformation
 */

import type {
  CMSCitadaoEdition,
  CMSCitadaoParticipant,
  CMSCitadaoAward,
  CMSTuna,
  CMSVenue,
  CMSAwardType,
  CMSBlogPost,
  CMSVideo,
  CMSAlbum,
  CMSPalmaresYear,
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
export function getMediaUrl(media: CMSMedia | number | string | undefined | null): string {
  if (!media) return '';

  if (typeof media === 'number') {
    // It's an ID number, construct the URL
    return `${CMS_URL}/media/${media}`;
  }

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

/**
 * Helper to get tuna display name from participant/award
 */
function getTunaName(tuna: CMSTuna | number): string {
  if (typeof tuna === 'number') {
    return `Tuna #${tuna}`;
  }
  return tuna.fullName || tuna.shortName;
}

/**
 * Helper to get award slug from award type
 */
function getAwardSlug(award: CMSAwardType | number): string {
  if (typeof award === 'number') {
    return `award-${award}`;
  }
  return award.slug;
}

/**
 * Helper to get venue name from schedule
 */
function getVenueName(venue: CMSVenue | number): string {
  if (typeof venue === 'number') {
    return '';
  }
  return venue.name;
}

/**
 * Format date range for display
 */
function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startDay = start.getDate();
  const endDay = end.getDate();
  const month = start.toLocaleString('pt-PT', { month: 'long' });

  if (startDay === endDay) {
    return `${startDay} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
  }

  return `${startDay}-${endDay} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
}

/**
 * Transform edition with participants and awards into frontend format
 */
function transformCitadaoEdition(
  cms: CMSCitadaoEdition,
  participants: CMSCitadaoParticipant[],
  awards: CMSCitadaoAward[]
): FrontendCitadaoEdition {
  // Get year from startDate
  const year = new Date(cms.startDate).getFullYear();

  // Format date range
  const date = formatDateRange(cms.startDate, cms.endDate);

  // Get venue(s) from schedule
  const venues =
    cms.schedule
      ?.map((s) => getVenueName(s.venue))
      .filter((v) => v)
      .filter((v, i, arr) => arr.indexOf(v) === i) || [];
  const venue = venues.join(' / ') || '';

  // Filter participants for this edition
  const editionParticipants = participants.filter((p) => {
    const editionId = typeof p.edition === 'number' ? p.edition : p.edition.id;
    return editionId === cms.id;
  });

  // Separate contestants and guests
  const tunas = editionParticipants.filter((p) => p.type === 'contestant').map((p) => getTunaName(p.tuna));

  const guests = editionParticipants.filter((p) => p.type === 'guest').map((p) => getTunaName(p.tuna));

  // Filter awards for this edition and transform to Record<string, string>
  const editionAwards = awards.filter((a) => {
    const editionId = typeof a.edition === 'number' ? a.edition : a.edition.id;
    return editionId === cms.id;
  });

  let awardsRecord: Record<string, string> | null = null;
  if (editionAwards.length > 0) {
    awardsRecord = {};
    for (const award of editionAwards) {
      const slug = getAwardSlug(award.award);
      const winner = getTunaName(award.tuna);
      awardsRecord[slug] = winner;
    }
  }

  return {
    edition: cms.editionNumber,
    year,
    date,
    venue,
    tunas,
    guests,
    awards: awardsRecord,
    notes: cms.notes,
  };
}

export async function getCitadaoEditions(): Promise<FrontendCitadaoEdition[]> {
  // Fetch all data in parallel
  const [cmsEditions, participants, awards] = await Promise.all([
    client.getCitadaoEditions(),
    client.getCitadaoParticipants(),
    client.getCitadaoAwards(),
  ]);

  return cmsEditions.map((edition) => transformCitadaoEdition(edition, participants, awards));
}

export async function getCitadaoEditionByYear(
  year: number
): Promise<FrontendCitadaoEdition | null> {
  const cmsEdition = await client.getCitadaoEditionByYear(year);
  if (!cmsEdition) {
    return null;
  }

  // Fetch participants and awards for this edition
  const [participants, awards] = await Promise.all([
    client.getCitadaoParticipants(cmsEdition.id),
    client.getCitadaoAwards(cmsEdition.id),
  ]);

  return transformCitadaoEdition(cmsEdition, participants, awards);
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
    id: String(cms.id),
    title: cms.title,
    youtubeId: cms.youtubeId || '',
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
    id: String(cms.id),
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
  awardTypes: Map<number, string>
): FrontendPalmaresYear {
  return {
    year: cms.year,
    festivals: cms.festivals.map((festival) => ({
      name: festival.name,
      location: festival.location || '',
      awards: (festival.awards || []).map((award) => {
        // Use custom name if provided, otherwise look up award type name
        if (award.customName) {
          return award.customName;
        }

        if (award.awardType) {
          const awardTypeId =
            typeof award.awardType === 'number'
              ? award.awardType
              : (award.awardType as CMSAwardType).id;
          return awardTypes.get(Number(awardTypeId)) || 'Prémio';
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
  const awardTypesMap = new Map<number, string>();
  for (const at of cmsAwardTypes) {
    awardTypesMap.set(Number(at.id), at.name);
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
