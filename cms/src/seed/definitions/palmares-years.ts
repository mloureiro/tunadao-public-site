/**
 * Palmares years raw data.
 * organizingTuna references use shortName from master-tunas.ts
 * Awards use slug from award-types.ts with optional customNote for variations
 */

export interface PalmaresAwardData {
  /** Award type slug from award-types.ts */
  slug: string;
  /** Custom note/variation (e.g., "Luis Filipe (BOOBOO)" for tuno-mais-tuninho) */
  customNote?: string;
}

export interface PalmaresFestivalData {
  name: string;
  location: string | null;
  /** Organizing tuna shortName (null if unknown/not in master list) */
  organizingTuna: string | null;
  awards: PalmaresAwardData[];
}

export interface PalmaresYearData {
  year: number;
  festivals: PalmaresFestivalData[];
}

/**
 * Mapping of festival name patterns to organizing tuna shortNames
 */
export const FESTIVAL_ORGANIZERS: Record<string, string> = {
  // Aveiro
  fitua: 'TUA',
  festilha: 'TUA',
  // Braga
  'fitu bracara': 'TUM',
  celta: 'Azeituna',
  // Guimaraes
  'cidade berco': 'Afonsina',
  'cidade de berco': 'Afonsina',
  // Castelo Branco
  fitucb: 'Estudantina CB',
  fitas: 'Estudantina CB',
  // Coimbra
  festuna: 'EUC',
  'cantar de estudante': 'TMUC',
  fitqfc: 'EUC',
  // Guarda
  oppidana: "Copituna d'Oppidana",
  maltunas: "Copituna d'Oppidana",
  // Barcelos
  'barca celi': 'TAIPCA',
  // Viana do Castelo
  lethes: 'Hinoportuna',
  // Leiria
  collipo: 'Trovantina',
  // Covilha
  herminius: 'Tuna-MUs',
  festubi: 'Desertuna',
  // Porto
  fitisep: 'TAISEP',
  fetuf: 'TFISCAP',
  portuscalle: 'TEUP',
  fitup: 'TAUP',
  'fitu cidade do porto': 'OUP',
  padrecos: 'TUCP',
  'noites de ronda': 'TMP',
  alcatraz: 'Gatunos',
  alcatr: 'Gatunos',
  fardas: 'TAEP',
  // Acores
  ciclone: 'TUSA',
  'el acor': 'Tunideos',
  // Faro
  fartuna: 'Versus Tuna',
  // Figueira da Foz
  fituff: 'Bruna',
  fitaff: 'Bruna',
  fituiff: 'Bruna',
  // Braganca
  fitab: 'RTUB',
  // Beja
  'terras de cante': 'TUB',
  'terra de cante': 'TUB',
  'fital pax julia': 'Semper Tesus',
  // Lisboa
  estudantino: 'Estudantina ISEL',
  // Tomar
  templario: 'Tuna Templaria',
  // Setubal
  'por terras do sado': 'TASCA',
  // Madeira
  'festival internacional de tunas do atlantico': 'TUM-Madeira',
  // Santarem
  centup: 'Scalabituna',
};

/**
 * Find organizing tuna shortName from festival name
 */
export function findOrganizingTunaShortName(festivalName: string): string | null {
  const normalized = festivalName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  for (const [pattern, shortName] of Object.entries(FESTIVAL_ORGANIZERS)) {
    const normalizedPattern = pattern
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    if (normalized.includes(normalizedPattern)) {
      return shortName;
    }
  }
  return null;
}

/**
 * Map raw award string to slug and optional custom note
 */
export function parseAwardString(awardStr: string): PalmaresAwardData {
  const normalizedLower = awardStr
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // Check for awards with custom notes (e.g., "Tuno mais tuninho - Luis Filipe (BOOBOO)")
  const dashMatch = awardStr.match(/^(.+?)\s*-\s*(.+)$/);
  let awardPart = awardStr;
  let customNote: string | undefined;

  if (dashMatch) {
    awardPart = dashMatch[1].trim();
    customNote = dashMatch[2].trim();
  }

  // Check for special memorial prizes
  if (normalizedLower.includes('premio luis daniel nabais') || normalizedLower.includes('premio mestre tuso')) {
    return { slug: 'tuna-mais-tuna', customNote: awardStr };
  }

  // Map to slugs
  const awardLower = awardPart
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (awardLower.includes('melhor tuna') || awardLower.includes('grande premio')) {
    if (awardLower.includes('2') || awardLower.includes('segunda')) {
      return { slug: 'segunda-melhor-tuna', customNote };
    }
    if (awardLower.includes('3') || awardLower.includes('terceira')) {
      return { slug: 'terceira-melhor-tuna', customNote };
    }
    return { slug: 'melhor-tuna', customNote };
  }

  if (awardLower.includes('tuna + tuna') || awardLower.includes('tuna mais tuna') || awardLower.includes('mais tunante') || awardLower.includes('espirito tunante')) {
    return { slug: 'tuna-mais-tuna', customNote };
  }

  if (awardLower.includes('tuno mais tuninho')) {
    return { slug: 'tuno-mais-tuninho', customNote };
  }

  if (awardLower.includes('tuna + marafada') || awardLower.includes('mais marafada')) {
    return { slug: 'tuna-mais-marafada', customNote };
  }

  if (awardLower.includes('tuna mais real')) {
    return { slug: 'tuna-mais-real', customNote };
  }

  if (awardLower.includes('mais bebedora') || awardLower.includes('bebedoura')) {
    return { slug: 'tuna-mais-bebedora', customNote };
  }

  if (awardLower.includes('publico')) {
    return { slug: 'tuna-do-publico', customNote };
  }

  if (awardLower.includes('serenata')) {
    return { slug: 'melhor-serenata', customNote };
  }

  if (awardLower.includes('passacalles')) {
    return { slug: 'melhor-passacalles', customNote };
  }

  if (awardLower.includes('pandeireta')) {
    return { slug: 'melhor-pandeireta', customNote };
  }

  if (awardLower.includes('instrumental') || awardLower.includes('interpretacao musical')) {
    return { slug: 'melhor-instrumental', customNote };
  }

  if (awardLower.includes('solista')) {
    return { slug: 'melhor-solista', customNote };
  }

  if (awardLower.includes('original') || awardLower.includes('tema original')) {
    return { slug: 'melhor-original', customNote };
  }

  if (awardLower.includes('porta-estandarte') || awardLower.includes('porta estandarte')) {
    return { slug: 'melhor-porta-estandarte', customNote };
  }

  if (awardLower.includes('estandarte') || awardLower.includes('bandeira')) {
    return { slug: 'melhor-estandarte', customNote };
  }

  if (awardLower.includes('ibero-americano') || awardLower.includes('ibero americano')) {
    return { slug: 'premio-ibero-americano', customNote };
  }

  if (awardLower.includes('participacao')) {
    return { slug: 'premio-participacao', customNote };
  }

  if (awardLower.includes('tema cabaret') || awardLower.includes('tema especial')) {
    return { slug: 'premio-tema-especial', customNote };
  }

  if (awardLower.includes('mencao honrosa')) {
    return { slug: 'mencao-honrosa', customNote };
  }

  // Default to custom note with premio-participacao if unknown
  return { slug: 'premio-participacao', customNote: awardStr };
}

export const PALMARES_YEARS: PalmaresYearData[] = [
  {
    year: 2019,
    festivals: [
      {
        name: 'XXIX FITUA',
        location: 'Aveiro',
        organizingTuna: 'TUA',
        awards: [
          { slug: 'melhor-instrumental' },
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-bebedora' },
        ],
      },
      {
        name: 'XXIX FITU Bracara Augusta',
        location: 'Braga',
        organizingTuna: 'TUM',
        awards: [
          { slug: 'tuna-do-publico' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-tuna' },
        ],
      },
      {
        name: 'XIII FITUCB',
        location: 'Castelo Branco',
        organizingTuna: 'Estudantina CB',
        awards: [
          { slug: 'melhor-estandarte' },
          { slug: 'segunda-melhor-tuna' },
        ],
      },
    ],
  },
  {
    year: 2018,
    festivals: [
      {
        name: 'XXVIII Festuna',
        location: 'Coimbra',
        organizingTuna: 'EUC',
        awards: [
          { slug: 'segunda-melhor-tuna' },
          { slug: 'melhor-pandeireta' },
        ],
      },
      {
        name: 'XII Cidade de Berco',
        location: 'Guimaraes',
        organizingTuna: 'Afonsina',
        awards: [
          { slug: 'melhor-solista' },
          { slug: 'melhor-instrumental' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-instrumental', customNote: 'Melhor Interpretacao Musical' },
          { slug: 'melhor-tuna' },
          { slug: 'melhor-serenata' },
        ],
      },
    ],
  },
  {
    year: 2017,
    festivals: [
      {
        name: 'XVI Oppidana',
        location: 'Guarda',
        organizingTuna: "Copituna d'Oppidana",
        awards: [{ slug: 'tuna-mais-tuna' }],
      },
      {
        name: 'XII Barca Celi',
        location: 'Barcelos',
        organizingTuna: 'TAIPCA',
        awards: [
          { slug: 'melhor-original' },
          { slug: 'melhor-tuna' },
        ],
      },
      {
        name: 'XXVII FITU Bracara Augusta',
        location: 'Braga',
        organizingTuna: 'TUM',
        awards: [
          { slug: 'melhor-pandeireta' },
          { slug: 'terceira-melhor-tuna' },
        ],
      },
      {
        name: 'XVII Lethes',
        location: 'Viana do Castelo',
        organizingTuna: 'Hinoportuna',
        awards: [],
      },
      {
        name: 'IX Cantar de Estudante',
        location: 'Coimbra',
        organizingTuna: 'TMUC',
        awards: [
          { slug: 'tuna-mais-tuna' },
          { slug: 'tuna-do-publico' },
        ],
      },
    ],
  },
  {
    year: 2016,
    festivals: [
      {
        name: 'VII Collipo',
        location: 'Leiria',
        organizingTuna: 'Trovantina',
        awards: [
          { slug: 'melhor-passacalles' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'tuna-do-publico' },
          { slug: 'melhor-solista' },
        ],
      },
      {
        name: 'XXVI FITU Bracara Augusta',
        location: 'Braga',
        organizingTuna: 'TUM',
        awards: [
          { slug: 'premio-ibero-americano' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-estandarte' },
          { slug: 'melhor-tuna' },
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
        organizingTuna: 'Trovantina',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-serenata' },
          { slug: 'tuna-do-publico' },
        ],
      },
      {
        name: 'III Herminius',
        location: 'Covilha',
        organizingTuna: 'Tuna-MUs',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-serenata' },
          { slug: 'tuna-do-publico' },
        ],
      },
      {
        name: 'FITUCB',
        location: 'Castelo Branco',
        organizingTuna: 'Estudantina CB',
        awards: [
          { slug: 'melhor-instrumental' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'segunda-melhor-tuna' },
        ],
      },
      {
        name: 'VII Cantar de Estudante',
        location: 'Coimbra',
        organizingTuna: 'TMUC',
        awards: [
          { slug: 'tuna-mais-tuna' },
          { slug: 'tuna-do-publico' },
        ],
      },
    ],
  },
  {
    year: 2014,
    festivals: [
      {
        name: 'XI FITUFF',
        location: 'Figueira da Foz',
        organizingTuna: 'Bruna',
        awards: [{ slug: 'premio-participacao' }],
      },
      {
        name: 'XIX Alcatraz',
        location: 'Vila do Conde',
        organizingTuna: 'Gatunos',
        awards: [{ slug: 'melhor-tuna' }],
      },
      {
        name: 'IX Barca Celi',
        location: 'Barcelos',
        organizingTuna: 'TAIPCA',
        awards: [
          { slug: 'segunda-melhor-tuna' },
          { slug: 'melhor-serenata' },
          { slug: 'melhor-instrumental' },
          { slug: 'melhor-porta-estandarte' },
          { slug: 'melhor-solista' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'XXI Celta',
        location: 'Braga',
        organizingTuna: 'Azeituna',
        awards: [{ slug: 'melhor-instrumental' }],
      },
    ],
  },
  {
    year: 2013,
    festivals: [
      {
        name: 'Portuscalle 13',
        location: 'Porto',
        organizingTuna: 'TEUP',
        awards: [{ slug: 'tuna-mais-tuna' }],
      },
      {
        name: 'XXIII FITU Bracara Augusta',
        location: 'Braga',
        organizingTuna: 'TUM',
        awards: [
          { slug: 'terceira-melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
        ],
      },
      {
        name: 'IX Ciclone',
        location: 'Angra do Heroismo',
        organizingTuna: 'TUSA',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-original' },
          { slug: 'melhor-pandeireta' },
        ],
      },
    ],
  },
  {
    year: 2012,
    festivals: [
      {
        name: 'XIX FITISEP',
        location: 'Porto',
        organizingTuna: 'TAISEP',
        awards: [
          { slug: 'segunda-melhor-tuna' },
          { slug: 'melhor-estandarte' },
        ],
      },
      {
        name: 'Padrecos 2012',
        location: 'Porto',
        organizingTuna: 'TUCP',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-porta-estandarte' },
        ],
      },
      {
        name: 'X Festubi',
        location: 'Covilha',
        organizingTuna: 'Desertuna',
        awards: [
          { slug: 'tuno-mais-tuninho', customNote: 'Luis Filipe (BOOBOO)' },
        ],
      },
      {
        name: 'XII Lethes',
        location: 'Viana do Castelo',
        organizingTuna: 'Hinoportuna',
        awards: [
          { slug: 'melhor-pandeireta' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'I Noites de Ronda',
        location: 'Porto',
        organizingTuna: 'TMP',
        awards: [
          { slug: 'melhor-serenata' },
          { slug: 'melhor-porta-estandarte' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'segunda-melhor-tuna' },
        ],
      },
    ],
  },
  {
    year: 2011,
    festivals: [
      {
        name: 'IX Terra de Cante',
        location: 'Beja',
        organizingTuna: 'TUB',
        awards: [
          { slug: 'melhor-pandeireta' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'segunda-melhor-tuna' },
        ],
      },
      {
        name: 'XIV FITAFF',
        location: 'Figueira da Foz',
        organizingTuna: 'Bruna',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-serenata' },
          { slug: 'melhor-pandeireta' },
        ],
      },
      {
        name: 'XIII Fartuna',
        location: 'Faro',
        organizingTuna: 'Versus Tuna',
        awards: [
          { slug: 'melhor-serenata' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-passacalles' },
          { slug: 'tuna-mais-marafada' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'IX Estudantino',
        location: 'Lisboa',
        organizingTuna: 'Estudantina ISEL',
        awards: [
          { slug: 'terceira-melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'tuna-do-publico' },
          { slug: 'melhor-serenata' },
          { slug: 'melhor-passacalles' },
          { slug: 'tuna-mais-real' },
          { slug: 'tuna-mais-bebedora' },
        ],
      },
    ],
  },
  {
    year: 2010,
    festivals: [
      {
        name: 'XI El Acor',
        location: null,
        organizingTuna: 'Tunideos',
        awards: [
          { slug: 'terceira-melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-estandarte' },
        ],
      },
      {
        name: 'IX Templario',
        location: null,
        organizingTuna: 'Tuna Templaria',
        awards: [
          { slug: 'segunda-melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'tuna-do-publico' },
          { slug: 'melhor-passacalles' },
        ],
      },
      {
        name: 'FITAFF 2010',
        location: null,
        organizingTuna: 'Bruna',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna', customNote: 'Premio Luis Daniel Nabais' },
        ],
      },
    ],
  },
  {
    year: 2009,
    festivals: [
      {
        name: 'Oppidana 09',
        location: 'Guarda',
        organizingTuna: "Copituna d'Oppidana",
        awards: [
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-tuna' },
        ],
      },
      {
        name: 'XIII FETUF',
        location: 'Porto',
        organizingTuna: 'TFISCAP',
        awards: [
          { slug: 'melhor-passacalles' },
          { slug: 'melhor-tuna', customNote: 'Grande Premio XIII FETUF' },
          { slug: 'melhor-estandarte' },
        ],
      },
      {
        name: 'XVI FITISEP',
        location: 'Porto',
        organizingTuna: 'TAISEP',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-pandeireta' },
        ],
      },
      {
        name: 'XV FITUP-IDH',
        location: 'Porto',
        organizingTuna: 'TAUP',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'FITAs 2009',
        location: 'Castelo Branco',
        organizingTuna: 'Estudantina CB',
        awards: [{ slug: 'melhor-tuna' }],
      },
      {
        name: 'XI Festilha',
        location: 'Ilhavo',
        organizingTuna: 'TUA',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-instrumental' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-passacalles' },
        ],
      },
      {
        name: 'VI Cidade Berco',
        location: 'Guimaraes',
        organizingTuna: 'Afonsina',
        awards: [
          { slug: 'segunda-melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
        ],
      },
      {
        name: 'XVI Celta',
        location: 'Braga',
        organizingTuna: 'Azeituna',
        awards: [
          { slug: 'tuna-mais-tuna' },
          { slug: 'premio-tema-especial', customNote: 'Premio Tema Cabaret' },
        ],
      },
    ],
  },
  {
    year: 2008,
    festivals: [
      {
        name: 'X FITAB 2008',
        location: 'Braganca',
        organizingTuna: 'RTUB',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-porta-estandarte' },
        ],
      },
      {
        name: 'V FITUIFF',
        location: 'Figueira da Foz',
        organizingTuna: 'Bruna',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-instrumental' },
          { slug: 'melhor-serenata' },
        ],
      },
      {
        name: 'XII FETUF',
        location: 'Porto',
        organizingTuna: 'TFISCAP',
        awards: [
          { slug: 'melhor-porta-estandarte' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-passacalles' },
          { slug: 'melhor-instrumental' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-tuna', customNote: 'Grande Premio XII FETUF' },
        ],
      },
      {
        name: "III Ulveira d'Espital",
        location: 'Oliveira do Hospital',
        organizingTuna: null,
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-passacalles' },
          { slug: 'melhor-porta-estandarte' },
        ],
      },
      {
        name: 'II Festival Tunas da Raia',
        location: 'Sabugal',
        organizingTuna: null,
        awards: [
          { slug: 'melhor-passacalles' },
          { slug: 'melhor-pandeireta' },
        ],
      },
      {
        name: "FITUCB'08",
        location: 'Castelo Branco',
        organizingTuna: 'Estudantina CB',
        awards: [
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-tuna' },
          { slug: 'melhor-instrumental' },
        ],
      },
      {
        name: 'VIII Festival Internacional de Tunas do Atlantico',
        location: 'Madeira',
        organizingTuna: 'TUM-Madeira',
        awards: [
          { slug: 'melhor-pandeireta' },
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
          { slug: 'melhor-instrumental' },
        ],
      },
    ],
  },
  {
    year: 2007,
    festivals: [
      {
        name: 'IV Fardas',
        location: 'Porto',
        organizingTuna: 'TAEP',
        awards: [{ slug: 'premio-participacao' }],
      },
      {
        name: 'II Festival de Tunas Academicas de Santa Comba Dao',
        location: 'Santa Comba Dao',
        organizingTuna: null,
        awards: [{ slug: 'melhor-porta-estandarte' }],
      },
      {
        name: 'I Encontro de Tunas da ESEnfC',
        location: 'Coimbra',
        organizingTuna: null,
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'I Por Terras do Sado',
        location: 'Setubal',
        organizingTuna: 'TASCA',
        awards: [
          { slug: 'melhor-instrumental' },
          { slug: 'melhor-serenata' },
          { slug: 'melhor-pandeireta' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'II FETUA - ESEnf',
        location: 'Oliveira de Azemeis',
        organizingTuna: null,
        awards: [{ slug: 'melhor-tuna' }],
      },
    ],
  },
  {
    year: 2006,
    festivals: [
      {
        name: 'VI FITAL Pax Julia',
        location: 'Beja',
        organizingTuna: 'Semper Tesus',
        awards: [{ slug: 'premio-participacao' }],
      },
      {
        name: 'IV Festubi',
        location: 'Covilha',
        organizingTuna: 'Desertuna',
        awards: [{ slug: 'premio-participacao' }],
      },
      {
        name: 'III Ciclone',
        location: 'Acores',
        organizingTuna: 'TUSA',
        awards: [{ slug: 'tuna-mais-tuna', customNote: 'Premio Mestre Tuso' }],
      },
    ],
  },
  {
    year: 2005,
    festivals: [
      {
        name: 'Festival de Tunas do 15o Aniversario do ISVOUGA',
        location: 'Santa Maria da Feira',
        organizingTuna: null,
        awards: [{ slug: 'melhor-pandeireta' }],
      },
      {
        name: 'Maltunas - Festival de Tunas Academicas',
        location: 'Guarda',
        organizingTuna: "Copituna d'Oppidana",
        awards: [{ slug: 'melhor-solista' }],
      },
      {
        name: 'FITQFC 2005 - Festival Internacional de Tunas da Queima das Fitas de Coimbra',
        location: 'Coimbra',
        organizingTuna: 'EUC',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'VII FITAB 2005',
        location: 'Braganca',
        organizingTuna: 'RTUB',
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-serenata' },
        ],
      },
      {
        name: 'III Festubi',
        location: 'Covilha',
        organizingTuna: 'Desertuna',
        awards: [{ slug: 'melhor-instrumental' }],
      },
      {
        name: 'VI Vultos',
        location: 'Vila Nova de Gaia',
        organizingTuna: null,
        awards: [{ slug: 'tuna-mais-tuna' }],
      },
    ],
  },
  {
    year: 2004,
    festivals: [
      {
        name: 'Festival de Tunas do Vale do Arda',
        location: 'Castelo de Paiva',
        organizingTuna: null,
        awards: [
          { slug: 'melhor-instrumental' },
          { slug: 'melhor-solista' },
        ],
      },
      {
        name: 'I FITACA',
        location: 'Mirandela',
        organizingTuna: null,
        awards: [
          { slug: 'melhor-tuna' },
          { slug: 'melhor-instrumental' },
          { slug: 'tuna-mais-tuna' },
        ],
      },
      {
        name: 'I Collipo',
        location: 'Leiria',
        organizingTuna: 'Trovantina',
        awards: [{ slug: 'premio-participacao' }],
      },
    ],
  },
  {
    year: 2002,
    festivals: [
      {
        name: 'I Festival de Tunas Politecnicas da AEESTV',
        location: 'Viseu',
        organizingTuna: null,
        awards: [{ slug: 'premio-participacao' }],
      },
    ],
  },
  {
    year: 2001,
    festivals: [
      {
        name: 'I CENTUP',
        location: 'Santarem',
        organizingTuna: 'Scalabituna',
        awards: [{ slug: 'tuna-mais-tuna' }],
      },
    ],
  },
  {
    year: 1999,
    festivals: [
      {
        name: '1o Festival de Tunas Academicas de Fornos',
        location: 'Freixo de Espada a Cinta',
        organizingTuna: null,
        awards: [
          { slug: 'terceira-melhor-tuna' },
          { slug: 'melhor-pandeireta' },
        ],
      },
    ],
  },
];
