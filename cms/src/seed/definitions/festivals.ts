/**
 * Festivals data for seeding.
 * Transformed from the old palmares-years structure.
 */

export interface FestivalAwardData {
  /** Award type slug from award-types.ts */
  slug: string;
  /** Custom note/variation */
  customNote?: string;
}

export interface FestivalData {
  name: string;
  /** Date in YYYY-MM-DD format (day can be approximate, usually we know the year) */
  date: string;
  location: string | null;
  /** Organizing tuna shortName (null if unknown) */
  organizingTuna: string | null;
  awards: FestivalAwardData[];
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
  fitucb: 'EACB',
  fitas: 'EACB',
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
 * All festivals from Tunadao's history.
 * Date format: YYYY-MM-DD (using June 15 as default when only year is known)
 */
export const FESTIVALS: FestivalData[] = [
  // 2019
  {
    name: 'XXIX FITUA',
    date: '2019-06-15',
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
    date: '2019-06-15',
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
    date: '2019-06-15',
    location: 'Castelo Branco',
    organizingTuna: 'EACB',
    awards: [
      { slug: 'melhor-estandarte' },
      { slug: 'segunda-melhor-tuna' },
    ],
  },
  // 2018
  {
    name: 'XXVIII Festuna',
    date: '2018-06-15',
    location: 'Coimbra',
    organizingTuna: 'EUC',
    awards: [
      { slug: 'segunda-melhor-tuna' },
      { slug: 'melhor-pandeireta' },
    ],
  },
  {
    name: 'XII Cidade de Berco',
    date: '2018-06-15',
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
  // 2017
  {
    name: 'XVI Oppidana',
    date: '2017-06-15',
    location: 'Guarda',
    organizingTuna: "Copituna d'Oppidana",
    awards: [{ slug: 'tuna-mais-tuna' }],
  },
  {
    name: 'XII Barca Celi',
    date: '2017-06-15',
    location: 'Barcelos',
    organizingTuna: 'TAIPCA',
    awards: [
      { slug: 'melhor-original' },
      { slug: 'melhor-tuna' },
    ],
  },
  {
    name: 'XXVII FITU Bracara Augusta',
    date: '2017-06-15',
    location: 'Braga',
    organizingTuna: 'TUM',
    awards: [
      { slug: 'melhor-pandeireta' },
      { slug: 'terceira-melhor-tuna' },
    ],
  },
  {
    name: 'XVII Lethes',
    date: '2017-06-15',
    location: 'Viana do Castelo',
    organizingTuna: 'Hinoportuna',
    awards: [],
  },
  {
    name: 'IX Cantar de Estudante',
    date: '2017-06-15',
    location: 'Coimbra',
    organizingTuna: 'TMUC',
    awards: [
      { slug: 'tuna-mais-tuna' },
      { slug: 'tuna-do-publico' },
    ],
  },
  // 2016
  {
    name: 'VII Collipo',
    date: '2016-06-15',
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
    date: '2016-06-15',
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
  // 2015
  {
    name: 'VI Collipo',
    date: '2015-06-15',
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
    date: '2015-06-15',
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
    date: '2015-06-15',
    location: 'Castelo Branco',
    organizingTuna: 'EACB',
    awards: [
      { slug: 'melhor-instrumental' },
      { slug: 'tuna-mais-tuna' },
      { slug: 'segunda-melhor-tuna' },
    ],
  },
  {
    name: 'VII Cantar de Estudante',
    date: '2015-06-15',
    location: 'Coimbra',
    organizingTuna: 'TMUC',
    awards: [
      { slug: 'tuna-mais-tuna' },
      { slug: 'tuna-do-publico' },
    ],
  },
  // 2014
  {
    name: 'XI FITUFF',
    date: '2014-06-15',
    location: 'Figueira da Foz',
    organizingTuna: 'Bruna',
    awards: [{ slug: 'premio-participacao' }],
  },
  {
    name: 'XIX Alcatraz',
    date: '2014-06-15',
    location: 'Vila do Conde',
    organizingTuna: 'Gatunos',
    awards: [{ slug: 'melhor-tuna' }],
  },
  {
    name: 'IX Barca Celi',
    date: '2014-06-15',
    location: 'Barcelos',
    organizingTuna: 'TAIPCA',
    awards: [
      { slug: 'segunda-melhor-tuna' },
      { slug: 'melhor-serenata' },
      { slug: 'melhor-instrumental' },
      { slug: 'melhor-estandarte' },
      { slug: 'melhor-solista' },
      { slug: 'tuna-mais-tuna' },
    ],
  },
  {
    name: 'XXI Celta',
    date: '2014-06-15',
    location: 'Braga',
    organizingTuna: 'Azeituna',
    awards: [{ slug: 'melhor-instrumental' }],
  },
  // 2013
  {
    name: 'Portuscalle 13',
    date: '2013-06-15',
    location: 'Porto',
    organizingTuna: 'TEUP',
    awards: [{ slug: 'tuna-mais-tuna' }],
  },
  {
    name: 'XXIII FITU Bracara Augusta',
    date: '2013-06-15',
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
    date: '2013-06-15',
    location: 'Angra do Heroismo',
    organizingTuna: 'TUSA',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'melhor-original' },
      { slug: 'melhor-pandeireta' },
    ],
  },
  // 2012
  {
    name: 'XIX FITISEP',
    date: '2012-06-15',
    location: 'Porto',
    organizingTuna: 'TAISEP',
    awards: [
      { slug: 'segunda-melhor-tuna' },
      { slug: 'melhor-estandarte' },
    ],
  },
  {
    name: 'Padrecos 2012',
    date: '2012-06-15',
    location: 'Porto',
    organizingTuna: 'TUCP',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'tuna-mais-tuna' },
      { slug: 'melhor-pandeireta' },
      { slug: 'melhor-estandarte' },
    ],
  },
  {
    name: 'X Festubi',
    date: '2012-06-15',
    location: 'Covilha',
    organizingTuna: 'Desertuna',
    awards: [
      { slug: 'tuno-mais-tuninho', customNote: 'Luis Filipe (BOOBOO)' },
    ],
  },
  {
    name: 'XII Lethes',
    date: '2012-06-15',
    location: 'Viana do Castelo',
    organizingTuna: 'Hinoportuna',
    awards: [
      { slug: 'melhor-pandeireta' },
      { slug: 'tuna-mais-tuna' },
    ],
  },
  {
    name: 'I Noites de Ronda',
    date: '2012-06-15',
    location: 'Porto',
    organizingTuna: 'TMP',
    awards: [
      { slug: 'melhor-serenata' },
      { slug: 'melhor-estandarte' },
      { slug: 'tuna-mais-tuna' },
      { slug: 'segunda-melhor-tuna' },
    ],
  },
  // 2011
  {
    name: 'IX Terra de Cante',
    date: '2011-06-15',
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
    date: '2011-06-15',
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
    date: '2011-06-15',
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
    date: '2011-06-15',
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
  // 2010
  {
    name: 'XI El Acor',
    date: '2010-06-15',
    location: 'Acores',
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
    date: '2010-06-15',
    location: 'Tomar',
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
    date: '2010-06-15',
    location: 'Figueira da Foz',
    organizingTuna: 'Bruna',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'tuna-mais-tuna', customNote: 'Premio Luis Daniel Nabais' },
    ],
  },
  // 2009
  {
    name: 'Oppidana 09',
    date: '2009-06-15',
    location: 'Guarda',
    organizingTuna: "Copituna d'Oppidana",
    awards: [
      { slug: 'tuna-mais-tuna' },
      { slug: 'melhor-tuna' },
    ],
  },
  {
    name: 'XIII FETUF',
    date: '2009-06-15',
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
    date: '2009-06-15',
    location: 'Porto',
    organizingTuna: 'TAISEP',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'melhor-pandeireta' },
    ],
  },
  {
    name: 'XV FITUP-IDH',
    date: '2009-06-15',
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
    date: '2009-06-15',
    location: 'Castelo Branco',
    organizingTuna: 'EACB',
    awards: [{ slug: 'melhor-tuna' }],
  },
  {
    name: 'XI Festilha',
    date: '2009-06-15',
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
    date: '2009-06-15',
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
    date: '2009-06-15',
    location: 'Braga',
    organizingTuna: 'Azeituna',
    awards: [
      { slug: 'tuna-mais-tuna' },
      { slug: 'premio-tema-especial', customNote: 'Premio Tema Cabaret' },
    ],
  },
  // 2008
  {
    name: 'X FITAB 2008',
    date: '2008-06-15',
    location: 'Braganca',
    organizingTuna: 'RTUB',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'tuna-mais-tuna' },
      { slug: 'melhor-pandeireta' },
      { slug: 'melhor-estandarte' },
    ],
  },
  {
    name: 'V FITUIFF',
    date: '2008-06-15',
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
    date: '2008-06-15',
    location: 'Porto',
    organizingTuna: 'TFISCAP',
    awards: [
      { slug: 'melhor-estandarte' },
      { slug: 'melhor-pandeireta' },
      { slug: 'melhor-passacalles' },
      { slug: 'melhor-instrumental' },
      { slug: 'tuna-mais-tuna' },
      { slug: 'melhor-tuna', customNote: 'Grande Premio XII FETUF' },
    ],
  },
  {
    name: "III Ulveira d'Espital",
    date: '2008-06-15',
    location: 'Oliveira do Hospital',
    organizingTuna: null,
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'melhor-pandeireta' },
      { slug: 'melhor-passacalles' },
      { slug: 'melhor-estandarte' },
    ],
  },
  {
    name: 'II Festival Tunas da Raia',
    date: '2008-06-15',
    location: 'Sabugal',
    organizingTuna: null,
    awards: [
      { slug: 'melhor-passacalles' },
      { slug: 'melhor-pandeireta' },
    ],
  },
  {
    name: "FITUCB'08",
    date: '2008-06-15',
    location: 'Castelo Branco',
    organizingTuna: 'EACB',
    awards: [
      { slug: 'tuna-mais-tuna' },
      { slug: 'melhor-tuna' },
      { slug: 'melhor-instrumental' },
    ],
  },
  {
    name: 'VIII Festival Internacional de Tunas do Atlantico',
    date: '2008-06-15',
    location: 'Madeira',
    organizingTuna: 'TUM-Madeira',
    awards: [
      { slug: 'melhor-pandeireta' },
      { slug: 'melhor-tuna' },
      { slug: 'tuna-mais-tuna' },
      { slug: 'melhor-instrumental' },
    ],
  },
  // 2007
  {
    name: 'IV Fardas',
    date: '2007-06-15',
    location: 'Porto',
    organizingTuna: 'TAEP',
    awards: [{ slug: 'premio-participacao' }],
  },
  {
    name: 'II Festival de Tunas Academicas de Santa Comba Dao',
    date: '2007-06-15',
    location: 'Santa Comba Dao',
    organizingTuna: null,
    awards: [{ slug: 'melhor-estandarte' }],
  },
  {
    name: 'I Encontro de Tunas da ESEnfC',
    date: '2007-06-15',
    location: 'Coimbra',
    organizingTuna: null,
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'tuna-mais-tuna' },
    ],
  },
  {
    name: 'I Por Terras do Sado',
    date: '2007-06-15',
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
    date: '2007-06-15',
    location: 'Oliveira de Azemeis',
    organizingTuna: null,
    awards: [{ slug: 'melhor-tuna' }],
  },
  // 2006
  {
    name: 'VI FITAL Pax Julia',
    date: '2006-06-15',
    location: 'Beja',
    organizingTuna: 'Semper Tesus',
    awards: [{ slug: 'premio-participacao' }],
  },
  {
    name: 'IV Festubi',
    date: '2006-06-15',
    location: 'Covilha',
    organizingTuna: 'Desertuna',
    awards: [{ slug: 'premio-participacao' }],
  },
  {
    name: 'III Ciclone',
    date: '2006-06-15',
    location: 'Acores',
    organizingTuna: 'TUSA',
    awards: [{ slug: 'tuna-mais-tuna', customNote: 'Premio Mestre Tuso' }],
  },
  // 2005
  {
    name: 'Festival de Tunas do 15o Aniversario do ISVOUGA',
    date: '2005-06-15',
    location: 'Santa Maria da Feira',
    organizingTuna: null,
    awards: [{ slug: 'melhor-pandeireta' }],
  },
  {
    name: 'Maltunas - Festival de Tunas Academicas',
    date: '2005-06-15',
    location: 'Guarda',
    organizingTuna: "Copituna d'Oppidana",
    awards: [{ slug: 'melhor-solista' }],
  },
  {
    name: 'FITQFC 2005 - Festival Internacional de Tunas da Queima das Fitas de Coimbra',
    date: '2005-06-15',
    location: 'Coimbra',
    organizingTuna: 'EUC',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'tuna-mais-tuna' },
    ],
  },
  {
    name: 'VII FITAB 2005',
    date: '2005-06-15',
    location: 'Braganca',
    organizingTuna: 'RTUB',
    awards: [
      { slug: 'melhor-tuna' },
      { slug: 'melhor-serenata' },
    ],
  },
  {
    name: 'III Festubi',
    date: '2005-06-15',
    location: 'Covilha',
    organizingTuna: 'Desertuna',
    awards: [{ slug: 'melhor-instrumental' }],
  },
  {
    name: 'VI Vultos',
    date: '2005-06-15',
    location: 'Vila Nova de Gaia',
    organizingTuna: null,
    awards: [{ slug: 'tuna-mais-tuna' }],
  },
  // 2004
  {
    name: 'Festival de Tunas do Vale do Arda',
    date: '2004-06-15',
    location: 'Castelo de Paiva',
    organizingTuna: null,
    awards: [
      { slug: 'melhor-instrumental' },
      { slug: 'melhor-solista' },
    ],
  },
  {
    name: 'I FITACA',
    date: '2004-06-15',
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
    date: '2004-06-15',
    location: 'Leiria',
    organizingTuna: 'Trovantina',
    awards: [{ slug: 'premio-participacao' }],
  },
  // 2002
  {
    name: 'I Festival de Tunas Politecnicas da AEESTV',
    date: '2002-06-15',
    location: 'Viseu',
    organizingTuna: null,
    awards: [{ slug: 'premio-participacao' }],
  },
  // 2001
  {
    name: 'I CENTUP',
    date: '2001-06-15',
    location: 'Santarem',
    organizingTuna: 'Scalabituna',
    awards: [{ slug: 'tuna-mais-tuna' }],
  },
  // 1999
  {
    name: '1o Festival de Tunas Academicas de Fornos',
    date: '1999-06-15',
    location: 'Freixo de Espada a Cinta',
    organizingTuna: null,
    awards: [
      { slug: 'terceira-melhor-tuna' },
      { slug: 'melhor-pandeireta' },
    ],
  },
];
