/**
 * Centralized navigation configuration
 * Used by Header and Footer components
 */

export interface NavItem {
  labelKey: string;
  href: string;
  /** Hidden items are excluded from navigation until content is ready */
  hidden?: boolean;
}

export interface NavSection {
  titleKey: string;
  items: NavItem[];
}

/**
 * Main navigation items
 */
export const navItems: NavItem[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.about', href: '/sobre' },
  { labelKey: 'nav.citadao', href: '/citadao' },
  { labelKey: 'nav.palmares', href: '/palmares' },
  { labelKey: 'nav.blog', href: '/blog', hidden: true },
  { labelKey: 'nav.videos', href: '/videos', hidden: true },
  { labelKey: 'nav.music', href: '/musica', hidden: true },
  { labelKey: 'nav.contact', href: '/contacto' },
];

/**
 * Footer navigation sections (grouped)
 */
export const footerSections: NavSection[] = [
  {
    titleKey: 'footer.navigation',
    items: [
      { labelKey: 'nav.home', href: '/' },
      { labelKey: 'nav.about', href: '/sobre' },
      { labelKey: 'nav.citadao', href: '/citadao' },
      { labelKey: 'nav.palmares', href: '/palmares' },
      { labelKey: 'nav.contact', href: '/contacto' },
    ],
  },
  {
    titleKey: 'footer.content',
    items: [
      { labelKey: 'nav.blog', href: '/blog', hidden: true },
      { labelKey: 'nav.videos', href: '/videos', hidden: true },
      { labelKey: 'nav.music', href: '/musica', hidden: true },
    ],
  },
];
