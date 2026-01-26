import type { Payload } from 'payload';

// Festival organizing tunas mapping
// Key: festival pattern (lowercase), Value: { shortName, fullName, city }
const festivalOrganizers: Record<string, { shortName: string; fullName: string; city?: string; website?: string }> = {
  // Aveiro
  fitua: { shortName: 'TUA', fullName: 'TUA - Tuna Universitária de Aveiro', city: 'Aveiro', website: 'https://www.facebook.com/tunauniversitariadeaveiro/' },
  festilha: { shortName: 'TUA', fullName: 'TUA - Tuna Universitária de Aveiro', city: 'Aveiro' },
  // Braga
  'fitu bracara': { shortName: 'TUM', fullName: 'Tuna Universitária do Minho', city: 'Braga', website: 'https://tum.pt/' },
  celta: { shortName: 'Azeituna', fullName: 'Azeituna - Tuna da Universidade do Minho', city: 'Braga', website: 'https://azeituna.pt/' },
  // Guimarães
  'cidade berço': { shortName: 'Afonsina', fullName: 'Afonsina - Tuna de Engenharia da Universidade do Minho', city: 'Guimarães', website: 'https://afonsina.com/' },
  'cidade de berço': { shortName: 'Afonsina', fullName: 'Afonsina - Tuna de Engenharia da Universidade do Minho', city: 'Guimarães' },
  // Castelo Branco
  fitucb: { shortName: 'Estudantina CB', fullName: 'Estudantina Académica de Castelo Branco', city: 'Castelo Branco', website: 'https://estudantinacb.pt/' },
  fitas: { shortName: 'Estudantina CB', fullName: 'Estudantina Académica de Castelo Branco', city: 'Castelo Branco' },
  // Coimbra
  festuna: { shortName: 'EUC', fullName: 'Estudantina Universitária de Coimbra', city: 'Coimbra' },
  'cantar de estudante': { shortName: 'TMUC', fullName: 'Tuna de Medicina da Universidade de Coimbra', city: 'Coimbra', website: 'https://www.instagram.com/tunamedicinacoimbra/' },
  fitqfc: { shortName: 'EUC', fullName: 'Estudantina Universitária de Coimbra', city: 'Coimbra' },
  // Guarda
  oppidana: { shortName: "Copituna d'Oppidana", fullName: "Copituna d'Oppidana - Tuna Académica da Guarda", city: 'Guarda', website: 'https://tagcopituna.wixsite.com/copituna-d-oppidana' },
  maltunas: { shortName: "Copituna d'Oppidana", fullName: "Copituna d'Oppidana - Tuna Académica da Guarda", city: 'Guarda' },
  // Barcelos
  'barca celi': { shortName: 'TAIPCA', fullName: 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave', city: 'Barcelos' },
  // Viana do Castelo
  lethes: { shortName: 'Hinoportuna', fullName: 'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo', city: 'Viana do Castelo', website: 'https://hinoportuna.ipvc.pt/' },
  // Leiria
  collipo: { shortName: 'Trovantina', fullName: 'Trovantina - Tuna Masculina do Instituto Politécnico de Leiria', city: 'Leiria' },
  // Covilhã
  herminius: { shortName: 'Tuna-MUs', fullName: 'Tuna-MUs - Tuna Médica da Universidade da Beira Interior', city: 'Covilhã' },
  festubi: { shortName: 'Desertuna', fullName: 'Desertuna - Tuna Académica da Universidade da Beira Interior', city: 'Covilhã', website: 'https://www.portugaltunas.com/directorio/desertuna/' },
  // Porto
  fitisep: { shortName: 'TAISEP', fullName: 'TAISEP - Tuna Académica do Instituto Superior de Engenharia do Porto', city: 'Porto', website: 'https://en.taisep.com/' },
  fetuf: { shortName: 'TFISCAP', fullName: 'Tuna Feminina do ISCAP', city: 'Porto' },
  portuscalle: { shortName: 'TEUP', fullName: 'TEUP - Tuna de Engenharia da Universidade do Porto', city: 'Porto', website: 'https://fe.up.pt/teup/' },
  fitup: { shortName: 'TAUP', fullName: 'Tuna Académica da Universidade Portucalense', city: 'Porto' },
  'fitu cidade do porto': { shortName: 'OUP', fullName: 'Orfeão Universitário do Porto', city: 'Porto', website: 'https://orfeao.up.pt/' },
  padrecos: { shortName: 'TUCP', fullName: 'TUCP - Tuna da Universidade Católica Portuguesa do Porto', city: 'Porto' },
  'noites de ronda': { shortName: 'TMP', fullName: 'Tuna de Medicina do Porto', city: 'Porto' },
  alcatraz: { shortName: 'Gatunos', fullName: 'Gatunos - Tuna Académica do Politécnico do Porto', city: 'Vila do Conde', website: 'https://alcatraz.gatunos.pt/' },
  alcatr: { shortName: 'Gatunos', fullName: 'Gatunos - Tuna Académica do Politécnico do Porto', city: 'Vila do Conde' },
  fardas: { shortName: 'TAEP', fullName: 'TAEP - Tuna Académica de Enfermagem do Porto', city: 'Porto' },
  // Açores
  ciclone: { shortName: 'TUSA', fullName: 'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum', city: 'Angra do Heroísmo', website: 'https://www.tunas.es/tunas/portugal/tusa-acores.asp' },
  'el açor': { shortName: 'Tunídeos', fullName: 'Tunídeos - Tuna Masculina da Universidade dos Açores', city: 'Ponta Delgada', website: 'https://www.tunideos.com/' },
  // Faro
  fartuna: { shortName: 'Versus Tuna', fullName: 'Versus Tuna - Tuna Académica da Universidade do Algarve', city: 'Faro', website: 'https://www.versustuna.pt/' },
  // Figueira da Foz
  fituff: { shortName: 'Bruna', fullName: 'Bruna - Tuna Universitária da Figueira da Foz', city: 'Figueira da Foz' },
  fitaff: { shortName: 'Bruna', fullName: 'Bruna - Tuna Universitária da Figueira da Foz', city: 'Figueira da Foz' },
  fituiff: { shortName: 'Bruna', fullName: 'Bruna - Tuna Universitária da Figueira da Foz', city: 'Figueira da Foz' },
  // Bragança
  fitab: { shortName: 'RTUB', fullName: 'RTUB - Real Tuna Universitária de Bragança', city: 'Bragança' },
  // Beja
  'terras de cante': { shortName: 'TUB', fullName: 'Tuna Universitária de Beja', city: 'Beja' },
  'terra de cante': { shortName: 'TUB', fullName: 'Tuna Universitária de Beja', city: 'Beja' },
  'fital pax julia': { shortName: 'Semper Tesus', fullName: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja', city: 'Beja' },
  // Lisboa
  estudantino: { shortName: 'Estudantina ISEL', fullName: 'Estudantina Académica do ISEL', city: 'Lisboa' },
  // Tomar
  templario: { shortName: 'Tuna Templária', fullName: 'Tuna Templária do Instituto Politécnico de Tomar', city: 'Tomar' },
  templário: { shortName: 'Tuna Templária', fullName: 'Tuna Templária do Instituto Politécnico de Tomar', city: 'Tomar' },
  // Setúbal
  'por terras do sado': { shortName: 'TASCA', fullName: 'TASCA - Tuna Académica de Setúbal Cidade Amada', city: 'Setúbal' },
  // Madeira
  'festival internacional de tunas do atlântico': { shortName: 'TUM-Madeira', fullName: 'Tuna Universitária da Madeira', city: 'Funchal' },
  // Santarém
  centup: { shortName: 'Scalabituna', fullName: 'Scalabituna - Tuna do Instituto Politécnico de Santarém', city: 'Santarém' },
};

// Helper function to find organizing tuna by festival name
function findOrganizingTuna(festivalName: string): { shortName: string; fullName: string; city?: string; website?: string } | null {
  const normalized = festivalName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  for (const [pattern, organizer] of Object.entries(festivalOrganizers)) {
    const normalizedPattern = pattern.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (normalized.includes(normalizedPattern)) {
      return organizer;
    }
  }
  return null;
}

// Data from palmares.json
const palmaresData = [
  {
    year: 2019,
    festivals: [
      {
        name: 'XXIX FITUA',
        location: 'Aveiro',
        awards: ['Melhor Instrumental', 'Melhor Tuna', 'Tuna + Bebedoura'],
      },
      {
        name: 'XXIX FITU Bracara Augusta',
        location: 'Braga',
        awards: ['Tuna do Público', 'Melhor Pandeireta', 'Melhor Tuna'],
      },
      {
        name: 'XIII FITUCB',
        location: 'Castelo Branco',
        awards: ['Melhor Estandarte', '2ª Melhor Tuna'],
      },
    ],
  },
  {
    year: 2018,
    festivals: [
      {
        name: 'XXVIII Festuna',
        location: 'Coimbra',
        awards: ['2ª Melhor Tuna', 'Melhor Pandeireta'],
      },
      {
        name: 'XII Cidade de Berço',
        location: 'Guimarães',
        awards: [
          'Melhor Solista',
          'Melhor Instrumental',
          'Tuna + Tuna',
          'Melhor Interpretação Musical',
          'Melhor Tuna',
          'Melhor Serenata',
        ],
      },
    ],
  },
  {
    year: 2017,
    festivals: [
      { name: 'XVI Oppidana', location: 'Guarda', awards: ['Tuna + Tuna'] },
      {
        name: 'XII Barca Celi',
        location: 'Barcelos',
        awards: ['Melhor Tema Original', 'Melhor Tuna'],
      },
      {
        name: 'XXVII FITU Bracara Augusta',
        location: 'Braga',
        awards: ['Melhor Pandeireta', '3ª Melhor Tuna'],
      },
      { name: 'XVII Lethes', location: 'Viana do Castelo', awards: [] },
      {
        name: 'IX Cantar de Estudante',
        location: 'Coimbra',
        awards: ['Tuna + Tuna', 'Tuna do Público'],
      },
    ],
  },
  {
    year: 2016,
    festivals: [
      {
        name: 'VII Collipo',
        location: 'Leiria',
        awards: ['Melhor Passacalles', 'Tuna + Tuna', 'Tuna do Público', 'Melhor Solista'],
      },
      {
        name: 'XXVI FITU Bracara Augusta',
        location: 'Braga',
        awards: [
          'Prémio Ibero-Americano',
          'Tuna + Tuna',
          'Melhor Pandeireta',
          'Melhor Estandarte',
          'Melhor Tuna',
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
        awards: ['Melhor Tuna', 'Melhor Serenata', 'Tuna do Público'],
      },
      {
        name: 'III Herminius',
        location: 'Covilhã',
        awards: ['Melhor Tuna', 'Melhor Serenata', 'Tuna do Público'],
      },
      {
        name: 'FITUCB',
        location: 'Castelo Branco',
        awards: ['Melhor Instrumental', 'Tuna + Tuna', '2ª Melhor Tuna'],
      },
      {
        name: 'VII Cantar de Estudante',
        location: 'Coimbra',
        awards: ['Tuna + Tuna', 'Tuna do Público'],
      },
    ],
  },
  {
    year: 2014,
    festivals: [
      { name: 'XI FITUFF', location: 'Figueira da Foz', awards: ['Prémio Participação'] },
      { name: 'XIX Alcatráz', location: 'Vila do Conde', awards: ['Melhor Tuna'] },
      {
        name: 'IX Barca Celi',
        location: 'Barcelos',
        awards: [
          '2ª Melhor Tuna',
          'Serenata',
          'Melhor Instrumental',
          'Melhor Porta-Estandarte',
          'Melhor Instrumental',
          'Melhor Solista',
          'Tuna + Tuna',
        ],
      },
      { name: 'XXI Celta', location: 'Braga', awards: ['Melhor Instrumental'] },
    ],
  },
  {
    year: 2013,
    festivals: [
      { name: 'Portuscalle 13', location: 'Porto', awards: ['Tuna + Tuna'] },
      {
        name: 'XXIII FITU Bracara Augusta',
        location: 'Braga',
        awards: ['3ª Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta'],
      },
      {
        name: 'IX Ciclone',
        location: 'Angra do Heroísmo',
        awards: ['Melhor Tuna', 'Melhor Original', 'Melhor Pandeireta'],
      },
    ],
  },
  {
    year: 2012,
    festivals: [
      { name: 'XIX FITISEP', location: 'Porto', awards: ['2ª Melhor Tuna', 'Melhor Bandeira'] },
      {
        name: 'Padrecos 2012',
        location: 'Porto',
        awards: ['Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta', 'Melhor Porta-Estandarte'],
      },
      {
        name: 'X Festubi',
        location: 'Covilhã',
        awards: ['Tuno mais tuninho - Luis Filipe (BOOBOO)'],
      },
      {
        name: 'XII Lethes',
        location: 'Viana do Castelo',
        awards: ['Melhor Pandeireta', 'Tuna + Tuna'],
      },
      {
        name: 'I Noites de Ronda',
        location: 'Porto',
        awards: ['Melhor Serenata', 'Melhor Porta-Estandarte', 'Tuna + Tuna', '2ª Melhor Tuna'],
      },
    ],
  },
  {
    year: 2011,
    festivals: [
      {
        name: 'IX Terra de Cante',
        location: 'Beja',
        awards: ['Melhor Pandeireta', 'Tuna + Tuna', '2ª Melhor Tuna'],
      },
      {
        name: 'XIV FITAFF',
        location: 'Figueira da Foz',
        awards: ['Melhor Tuna', 'Melhor Serenata', 'Melhor Pandeireta'],
      },
      {
        name: 'XIII Fartuna',
        location: 'Faro',
        awards: [
          'Melhor Serenata',
          'Melhor Pandeireta',
          'Melhor Passacalles',
          'Tuna + Marafada',
          'Tuna + Tuna',
        ],
      },
      {
        name: 'IX Estudantino',
        location: 'Lisboa',
        awards: [
          '3ª Melhor Tuna',
          'Tuna + Tuna',
          'Tuna do Público',
          'Melhor Serenata',
          'Melhor Passacalles',
          'Tuna Mais Real',
          'Tuna Mais Bebedora',
        ],
      },
    ],
  },
  {
    year: 2010,
    festivals: [
      {
        name: 'XI El Açor',
        location: null,
        awards: ['3ª Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta', 'Melhor Estandarte'],
      },
      {
        name: 'IX Templário',
        location: null,
        awards: [
          '2ª Melhor Tuna',
          'Tuna + Tuna',
          'Melhor Pandeireta',
          'Tuna do Público',
          'Melhor Passacalles',
        ],
      },
      {
        name: 'FITAFF 2010',
        location: null,
        awards: ['Melhor Tuna', 'Tuna + Tuna (Prémio Luís Daniel Nabais)'],
      },
    ],
  },
  {
    year: 2009,
    festivals: [
      { name: 'Oppidana 09', location: 'Guarda', awards: ['Tuna + Tuna', 'Melhor Tuna'] },
      {
        name: 'XIII FETUF',
        location: 'Porto',
        awards: ['Melhor Passacalles', 'Grande Prémio XII FETUF', 'Melhor Estandarte'],
      },
      { name: 'XVI FITISEP', location: 'Porto', awards: ['Melhor Tuna', 'Melhor Pandeireta'] },
      {
        name: 'XV FITUP-IDH',
        location: 'Porto',
        awards: ['Melhor Tuna', 'Melhor Pandeireta', 'Tuna + Tuna'],
      },
      { name: 'FITAs 2009', location: 'Castelo Branco', awards: ['Melhor Tuna'] },
      {
        name: 'XI Festilha',
        location: 'Ílhavo',
        awards: [
          'Melhor Tuna',
          'Tuna + Tuna',
          'Melhor Instrumental',
          'Melhor Pandeireta',
          'Melhor Passacalles',
        ],
      },
      {
        name: 'VI Cidade Berço',
        location: 'Guimarães',
        awards: ['2ª Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta'],
      },
      { name: 'XVI Celta', location: 'Braga', awards: ['Tuna + Tuna', 'Prémio Tema Cabaret'] },
    ],
  },
  {
    year: 2008,
    festivals: [
      {
        name: 'X FITAB 2008',
        location: 'Bragança',
        awards: ['Melhor Tuna', 'Tuna + Tuna', 'Melhor Pandeireta', 'Melhor Porta-Estandarte'],
      },
      {
        name: 'V FITUIFF',
        location: 'Figueira da Foz',
        awards: ['Melhor Tuna', 'Instrumental', 'Serenata'],
      },
      {
        name: 'XII FETUF',
        location: 'Porto',
        awards: [
          'Porta-Estandarte',
          'Pandeireta',
          'Passacalles',
          'Instrumental',
          'Tuna + Tuna',
          'Grande Prémio XII FETUF',
        ],
      },
      {
        name: "III Ulveira d'Espital",
        location: 'Oliveira do Hospital',
        awards: [
          'Melhor Tuna',
          'Melhor Pandeireta',
          'Melhor Passacalles',
          'Melhor Porta-Estandarte',
        ],
      },
      {
        name: 'II Festival Tunas da Raia',
        location: 'Sabugal',
        awards: ['Melhor Passacalles', 'Melhor Pandeireta'],
      },
      {
        name: "FITUCB'08",
        location: 'Castelo Branco',
        awards: ['Tuna + Tuna', 'Melhor Tuna', 'Melhor Instrumental'],
      },
      {
        name: 'VIII Festival Internacional de Tunas do Atlântico',
        location: 'Madeira',
        awards: ['Melhor Pandeireta', 'Melhor Tuna', 'Tuna + Tuna', 'Melhor Instrumental'],
      },
    ],
  },
  {
    year: 2007,
    festivals: [
      { name: 'IV Fardas', location: 'Porto', awards: ['Prémio de Participação'] },
      {
        name: 'II Festival de Tunas Académicas de Santa Comba Dão',
        location: 'Santa Comba Dão',
        awards: ['Melhor Porta-Estandarte'],
      },
      {
        name: 'I Encontro de Tunas da ESEnfC',
        location: 'Coimbra',
        awards: ['Melhor Tuna', 'Tuna + Tuna'],
      },
      {
        name: 'I Por Terras do Sado',
        location: 'Setúbal',
        awards: ['Melhor Instrumental', 'Melhor Serenata', 'Melhor Pandeireta', 'Tuna + Tuna'],
      },
      { name: 'II FETUA - ESEnf', location: 'Oliveira de Azeméis', awards: ['Melhor Tuna'] },
    ],
  },
  {
    year: 2006,
    festivals: [
      { name: 'VI FITAL Pax Julia', location: 'Beja', awards: ['Prémio de Participação'] },
      { name: 'IV Festubi', location: 'Covilhã', awards: ['Prémio de Participação'] },
      { name: 'III Ciclone', location: 'Açores', awards: ['Tuna + Tuna (Prémio Mestre Tuso)'] },
    ],
  },
  {
    year: 2005,
    festivals: [
      {
        name: 'Festival de Tunas do 15º Aniversário do ISVOUGA',
        location: 'Santa Maria da Feira',
        awards: ['Melhor Pandeireta'],
      },
      {
        name: 'Maltunas - Festival de Tunas Académicas',
        location: 'Guarda',
        awards: ['Melhor Solista'],
      },
      {
        name: 'FITQFC 2005 - Festival Internacional de Tunas da Queima das Fitas de Coimbra',
        location: 'Coimbra',
        awards: ['Melhor Tuna', 'Tuna + Tuna'],
      },
      { name: 'VII FITAB 2005', location: 'Bragança', awards: ['Melhor Tuna', 'Melhor Serenata'] },
      { name: 'III Festubi', location: 'Covilhã', awards: ['Instrumental'] },
      { name: 'VI Vultos', location: 'Vila Nova de Gaia', awards: ['Tuna + Tuna'] },
    ],
  },
  {
    year: 2004,
    festivals: [
      {
        name: 'Festival de Tunas do Vale do Arda',
        location: 'Castelo de Paiva',
        awards: ['Melhor Instrumental', 'Melhor Solista'],
      },
      {
        name: 'I FITACA',
        location: 'Mirandela',
        awards: ['Melhor Tuna', 'Melhor Instrumental', 'Tuna + Tuna'],
      },
      { name: 'I Collipo', location: 'Leiria', awards: ['Prémio de Participação'] },
    ],
  },
  {
    year: 2002,
    festivals: [
      {
        name: 'I Festival de Tunas Politécnicas da AEESTV',
        location: 'Viseu',
        awards: ['Prémio de Participação'],
      },
    ],
  },
  {
    year: 2001,
    festivals: [{ name: 'I CENTUP', location: 'Santarém', awards: ['Tuna + Tuna'] }],
  },
  {
    year: 1999,
    festivals: [
      {
        name: '1º Festival de Tunas Académicas de Fornos',
        location: 'Freixo de Espada à Cinta',
        awards: ['3ª Melhor Tuna', 'Melhor Pandeireta'],
      },
    ],
  },
];

// Helper to normalize for comparison
function normalizeForComparison(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export const seedPalmaresYears = async (payload: Payload) => {
  // Cache for organizing tunas: normalized fullName -> id
  const tunaCache = new Map<string, string>();

  // Pre-load existing tunas
  const existingTunas = await payload.find({
    collection: 'tunas',
    limit: 1000,
  });
  for (const tuna of existingTunas.docs) {
    const normalizedKey = normalizeForComparison(tuna.fullName || tuna.shortName);
    if (!tunaCache.has(normalizedKey)) {
      tunaCache.set(normalizedKey, tuna.id);
    }
    // Also cache by shortName
    const shortKey = normalizeForComparison(tuna.shortName);
    if (!tunaCache.has(shortKey)) {
      tunaCache.set(shortKey, tuna.id);
    }
  }
  console.log(`  📋 Loaded ${existingTunas.docs.length} existing tunas into cache`);

  // Helper to get or create organizing tuna
  const getOrCreateOrganizingTuna = async (festivalName: string): Promise<string | null> => {
    const organizer = findOrganizingTuna(festivalName);
    if (!organizer) return null;

    // Check cache first
    const normalizedKey = normalizeForComparison(organizer.fullName);
    if (tunaCache.has(normalizedKey)) {
      return tunaCache.get(normalizedKey)!;
    }

    // Check by shortName too
    const shortKey = normalizeForComparison(organizer.shortName);
    if (tunaCache.has(shortKey)) {
      return tunaCache.get(shortKey)!;
    }

    // Create new tuna
    try {
      const newTuna = await payload.create({
        collection: 'tunas',
        data: {
          shortName: organizer.shortName,
          fullName: organizer.fullName,
          city: organizer.city || '',
          website: organizer.website || '',
        },
      });
      tunaCache.set(normalizedKey, newTuna.id);
      tunaCache.set(shortKey, newTuna.id);
      console.log(`    ✅ Created organizing tuna: ${organizer.shortName}`);
      return newTuna.id;
    } catch (error) {
      // Might already exist with different casing
      console.log(`    ⚠️  Could not create tuna ${organizer.shortName}:`, error);
      return null;
    }
  };

  for (const yearData of palmaresData) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'palmares-years',
        where: { year: { equals: yearData.year } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Palmarés ${yearData.year} already exists, skipping...`);
        continue;
      }

      // Prepare festivals array with organizing tuna
      const festivals = await Promise.all(
        yearData.festivals.map(async (festival) => {
          const organizingTunaId = await getOrCreateOrganizingTuna(festival.name);
          return {
            name: festival.name,
            location: festival.location || '',
            organizingTuna: organizingTunaId,
            awards: festival.awards.map((award) => ({
              customName: award,
            })),
          };
        })
      );

      await payload.create({
        collection: 'palmares-years',
        data: {
          year: yearData.year,
          festivals,
          status: 'published',
        },
      });
      console.log(`  ✅ Created Palmarés: ${yearData.year}`);
    } catch (error) {
      console.error(`  ❌ Failed to create Palmarés ${yearData.year}:`, error);
    }
  }
};
