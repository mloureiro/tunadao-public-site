/**
 * Centralized navigation configuration
 * Used by Header and Footer components
 */

export interface NavItem {
  labelKey: string;
  href: string;
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
  { labelKey: 'nav.blog', href: '/blog' },
  { labelKey: 'nav.videos', href: '/videos' },
  { labelKey: 'nav.music', href: '/musica' },
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
    ],
  },
  {
    titleKey: 'footer.content',
    items: [
      { labelKey: 'nav.blog', href: '/blog' },
      { labelKey: 'nav.videos', href: '/videos' },
      { labelKey: 'nav.music', href: '/musica' },
      { labelKey: 'nav.contact', href: '/contacto' },
    ],
  },
];
