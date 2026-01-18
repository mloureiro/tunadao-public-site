/**
 * CMS Types - TypeScript interfaces for PayloadCMS data structures
 */

// Base types
export interface CMSMedia {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  alt: string;
  caption?: string;
  sizes?: {
    thumbnail?: CMSMediaSize;
    card?: CMSMediaSize;
    hero?: CMSMediaSize;
  };
}

export interface CMSMediaSize {
  url: string;
  width: number;
  height: number;
  filename: string;
}

export interface CMSUser {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'editor';
}

// Award Types
export interface CMSAwardType {
  id: string;
  name: string;
  slug: string;
  aliases?: { alias: string }[];
  description?: string;
  criteria?: CMSRichText;
  icon?: string;
}

// Citadão Editions
export interface CMSCitadaoEdition {
  id: string;
  title: string;
  edition: number;
  year: number;
  date?: string;
  venue?: string;
  poster?: CMSMedia | string;
  tunas: { name: string }[];
  guests?: { name: string }[];
  awards?: CMSCitadaoAward[];
  notes?: string;
  status: 'draft' | 'published';
}

export interface CMSCitadaoAward {
  awardType: CMSAwardType | string;
  winner: string;
}

// Palmarés Years
export interface CMSPalmaresYear {
  id: string;
  yearTitle: string;
  year: number;
  festivals: CMSPalmaresFestival[];
  status: 'draft' | 'published';
}

export interface CMSPalmaresFestival {
  name: string;
  location?: string;
  awards: CMSPalmaresAward[];
}

export interface CMSPalmaresAward {
  awardType?: CMSAwardType | string;
  customName?: string;
}

// Blog Posts
export interface CMSBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: CMSRichText;
  featuredImage: CMSMedia | string;
  author: CMSUser | string;
  tags?: { tag: string }[];
  publishedAt: string;
  status: 'draft' | 'published';
}

// Videos
export interface CMSVideo {
  id: string;
  title: string;
  youtubeUrl: string;
  youtubeId: string;
  description?: string;
  category: 'atuacao' | 'festival' | 'serenata' | 'citadao' | 'outro';
  featured: boolean;
  publishedAt: string;
  status: 'draft' | 'published';
}

// Albums
export interface CMSAlbum {
  id: string;
  title: string;
  year: number;
  coverImage: CMSMedia | string;
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
  id: string;
  title: string;
  slug: string;
  content: CMSRichText;
  seoDescription?: string;
  status: 'draft' | 'published';
}

// Globals
export interface CMSSiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: CMSMedia | string;
  favicon?: CMSMedia | string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  spotify?: string;
  defaultSeoImage?: CMSMedia | string;
  googleAnalyticsId?: string;
}

export interface CMSContactInfo {
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
export interface FrontendCitadaoEdition {
  edition: number;
  year: number;
  date: string;
  venue: string;
  tunas: string[];
  guests: string[];
  awards: Record<string, string> | null;
  notes?: string;
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

export interface FrontendPalmaresFestival {
  name: string;
  location: string;
  awards: string[];
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
