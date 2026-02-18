/**
 * CMS Types - TypeScript interfaces for PayloadCMS data structures
 */

// Base types
export interface CMSMedia {
  id: number;
  url?: string;
  filename: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  alt: string;
  caption?: string;
  publicId?: string;
}

export interface CMSUser {
  id: number;
  email: string;
  name?: string;
  role: 'admin' | 'editor';
}

// Venues
export interface CMSVenue {
  id: number;
  name: string;
  address?: string;
  photo?: CMSMedia | number;
}

// Tunas
export interface CMSTuna {
  id: number;
  shortName: string;
  fullName: string;
  logo?: CMSMedia | number;
  city?: string;
  website?: string;
  description?: string;
  type?: string;
}

// Award Types
export interface CMSAwardType {
  id: number | string;
  name: string;
  slug: string;
  aliases?: { alias: string }[];
  description?: string;
  criteria?: CMSRichText;
  icon?: string;
}

// Citadão Editions (new schema)
export interface CMSCitadaoEdition {
  id: number;
  title?: string;
  editionNumber: number;
  startDate: string;
  endDate: string;
  poster?: CMSMedia | number;
  schedule?: {
    date: string;
    venue: CMSVenue | number;
  }[];
  description?: string;
  notes?: string;
  status: 'draft' | 'published';
}

// Citadão Participants (links edition + tuna + type)
export interface CMSCitadaoParticipant {
  id: number;
  edition: CMSCitadaoEdition | number;
  tuna: CMSTuna | number;
  type: 'contestant' | 'guest';
}

// Citadão Awards (links edition + award + tuna)
export interface CMSCitadaoAward {
  id: number;
  edition: CMSCitadaoEdition | number;
  award: CMSAwardType | number;
  tuna: CMSTuna | number;
}

// Festivals
export interface CMSFestival {
  id: number;
  name: string;
  date: string;
  location?: string;
  organizingTuna?: CMSTuna | number;
  poster?: CMSMedia | number;
  status: 'draft' | 'published';
}

export interface CMSFestivalAward {
  id: number;
  festival: CMSFestival | number;
  awardType?: CMSAwardType | number;
  customName?: string;
}

export interface CMSFestivalParticipant {
  id: number;
  festival: CMSFestival | number;
  tuna: CMSTuna | number;
  type: 'contestant' | 'guest';
}

// Blog Posts
export interface CMSBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: CMSRichText;
  featuredImage: CMSMedia | number;
  author: CMSUser | number;
  tags?: { tag: string }[];
  publishedAt: string;
  status: 'draft' | 'published';
}

// Videos
export interface CMSVideo {
  id: number;
  title: string;
  youtubeUrl: string;
  youtubeId?: string;
  description?: string;
  category: 'atuacao' | 'festival' | 'serenata' | 'citadao' | 'outro';
  featured?: boolean;
  publishedAt: string;
  status: 'draft' | 'published';
}

// Albums
export interface CMSAlbum {
  id: number;
  title: string;
  year: number;
  coverImage: CMSMedia | number;
  description?: CMSRichText;
  spotifyUrl?: string;
  tracks?: CMSAlbumTrack[];
  recordingType?: 'live' | 'studio';
  status: 'draft' | 'published';
}

export interface CMSAlbumTrack {
  number: number;
  title: string;
  duration?: string;
}

// Pages (generic)
export interface CMSPage {
  id: number;
  title: string;
  slug: string;
  content: CMSRichText;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: CMSMedia | number;
  status: 'draft' | 'published';
}

// Globals
export interface CMSSiteSettings {
  id: number;
  siteName: string;
  siteDescription: string;
  logo?: CMSMedia | number;
  favicon?: CMSMedia | number;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  spotify?: string;
  defaultSeoImage?: CMSMedia | number;
  googleAnalyticsId?: string;
}

export interface CMSContactInfo {
  id: number;
  email: string;
  phone?: string;
  address?: string;
  mapEmbedUrl?: string;
  coordinates?: {
    latitude?: number;
    longitude?: number;
  };
}

// Rich Text (Lexical format)
export interface CMSRichText {
  root: {
    type: string;
    children: CMSRichTextNode[];
    direction?: 'ltr' | 'rtl';
    format?: string;
    indent?: number;
    version?: number;
  };
}

export interface CMSRichTextNode {
  type: string;
  version?: number;
  children?: CMSRichTextNode[];
  text?: string;
  format?: number;
  style?: string;
  tag?: string;
  listType?: 'bullet' | 'number';
  value?: number;
  direction?: 'ltr' | 'rtl';
  indent?: number;
  url?: string;
  target?: string;
  rel?: string;
}

// API Response types
export interface CMSPaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// Transformed frontend types (matching existing app types)
export interface FrontendTunaWithLogo {
  shortName: string;
  fullName: string;
  logoUrl?: string;
  city?: string;
  website?: string;
}

export interface FrontendCitadaoEdition {
  edition: number;
  year: number;
  date: string;
  venue: string;
  tunas: FrontendTunaWithLogo[];
  guests: FrontendTunaWithLogo[];
  awards: Record<string, string> | null;
  notes?: string;
  posterUrl?: string;
}

export interface FrontendBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readingTime: number;
}

export interface FrontendVideo {
  id: string;
  title: string;
  youtubeId: string;
  category: string;
  year: number;
}

export interface FrontendAlbum {
  id: string;
  title: string;
  year: number;
  spotifyAlbumId?: string;
  description: string;
  type: 'live' | 'studio';
}

export interface FrontendPalmaresYear {
  year: number;
  festivals: FrontendPalmaresFestival[];
}

export interface FrontendPalmaresOrganizingTuna {
  shortName: string;
  fullName: string;
  logoUrl?: string;
  city?: string;
  website?: string;
}

export interface FrontendPalmaresAward {
  slug: string;
  name: string;
}

export interface FrontendPalmaresFestival {
  name: string;
  location: string;
  organizingTuna?: FrontendPalmaresOrganizingTuna;
  posterUrl?: string;
  awards: FrontendPalmaresAward[];
  contestants?: FrontendTunaWithLogo[];
  guests?: FrontendTunaWithLogo[];
}

export interface FrontendContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface FrontendSocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  spotify?: string;
}
