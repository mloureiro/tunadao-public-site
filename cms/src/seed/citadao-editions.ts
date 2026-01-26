import type { Payload } from 'payload';

// Data from citadao-editions.json backup
const citadaoData = [
  {
    edition: 1,
    year: 2004,
    date: '4-5 Novembro',
    venues: ['Aula Magna do ISPV'],
    tunas: [
      'Tuna de la Universidade Peruana Los Andes',
      'Tuna Universitária de Salamanca',
      'Tuna Académica da Universidade de Évora',
      'Real Tuna Universitária de Bragança',
      'Tuna de Medicina da Universidade de Coimbra',
    ],
    guests: ['Real Tunel Académico', 'Tuna Universitária de Viseu', 'Infantuna Cidade de Viseu'],
    awards: null,
  },
  {
    edition: 2,
    year: 2005,
    date: '3-4 Novembro',
    venues: ['Aula Magna do ISPV'],
    tunas: [
      'Tuna de Medicina de Coimbra',
      'Tuna del Colégio Mayor de Loyala - Granada',
      'Luz & Tuna - Tuna da Universidade Lusíada',
      'Tintuna - Tuna Académica da Casa Moniz',
      'Tuna Académica de Biomédicas do Porto',
    ],
    guests: ['Infantuna Cidade Viseu', 'Real Tunel Académico', 'Viriatuna'],
    awards: null,
  },
  {
    edition: 3,
    year: 2007,
    date: '23-24 Março',
    venues: ['Aula Magna do ISPV', 'Forum Viseu'],
    tunas: [
      'Tuna Del Colégio Mayor de Loyola - Granada',
      'Tuna Académica da Universidade Fernando Pessoa',
      'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      'Tuna Bruna - Tuna Académica da Universidade Internacional da Figueira da Foz',
      'Tusófona - Real Tuna Lusófona',
    ],
    guests: [
      'Orfeão Académico de Viseu',
      'Infantuna Cidade Viseu',
      'Real Tunel Académico',
      'Viriatuna',
    ],
    awards: {
      melhorTuna: 'Semper Tesus',
      segundaMelhorTuna: 'Tuna de Loyola',
      melhorPandeireta: 'Semper Tesus',
      melhorInstrumental: 'Tuna de Loyola',
      melhorEstandarte: 'Semper Tesus',
      melhorSolista: 'Semper Tesus',
      melhorOriginal: 'Tuna da Univ. Fernando Pessoa',
      melhorSerenata: 'Semper Tesus',
      melhorPassacalles: 'Semper Tesus',
      tunaMaisTuna: 'Tusófona',
      tunaDoPublico: 'Semper Tesus',
    },
  },
  {
    edition: 4,
    year: 2008,
    date: '2-3 Maio',
    venues: ['Aula Magna ISPV', 'Rua Formosa'],
    notes: '10º Aniversário da Tunadão 1998',
    tunas: [
      'Estudantina Académica de Castelo Branco',
      "Copituna D'Oppidana - Tuna Académica do Inst. Pol. da Guarda",
      'SemperTesus - Tuna da Escola Superior Agrária de Beja',
      'Tuna Académica da Universidade Portucalense',
      'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
    ],
    guests: ['Charrascos da Citânia'],
    awards: null,
  },
  {
    edition: 5,
    year: 2009,
    date: '1-2 Maio',
    venues: ['Aula Magna IPV', 'Rua Formosa'],
    tunas: [
      'Hinoportuna - Tuna Académica do IPVC',
      'Tuna Templária de Tomar',
      'Imperial Neptuna Académica da Figueira da Foz',
      'Estudantina Académica do ISEL',
      'Afonsina',
    ],
    guests: [],
    awards: {
      melhorTuna: 'Hinoportuna (Tuna Académica do IPVC)',
      melhorSerenata: 'Tuna Templária de Tomar',
      melhorSolista: 'Imperial Neptuna Académica da Figueira da Foz',
      melhorInstrumental: 'Hinoportuna – Tuna Académica do IPVC',
      melhorOriginal: 'Tuna Templária de Tomar',
      melhorPandeireta: 'Hinoportuna – Tuna Académica do IPVC',
      melhorEstandarte: 'Estudantica Académica do ISEL',
      melhorPassacalles: 'Tuna Templária de Tomar',
      tunaMaisTuna: 'Afonsina',
    },
  },
  {
    edition: 6,
    year: 2010,
    date: '30 Abril - 1 Maio',
    venues: ['Aula Magna do I.P.V.'],
    tunas: ['anTUNiA', 'Tunídeos - Tuna Masculina da Universidade dos Açores', 'TUB'],
    guests: ['Cordas ao Cubo'],
    awards: {
      melhorTuna: 'anTUNiA',
      segundaMelhorTuna: 'Tunídeos',
      tunaMaisTuna: 'Tunídeos',
      melhorInstrumental: 'Tunídeos',
      melhorSolista: 'anTUNiA',
      melhorOriginal: 'Tunídeos',
      melhorPandeireta: 'anTUNiA',
      melhorPassacalles: 'Tunídeos',
      melhorEstandarte: 'anTUNiA',
      melhorSerenata: 'TUB',
    },
  },
  {
    edition: 7,
    year: 2011,
    date: '29-30 Abril',
    venues: ['Aula Magna do I.P.V.', 'Rua Formosa'],
    tunas: [
      'Tuna de Medicina do Porto',
      'Estudantina Universitária de Coimbra',
      'Tuna Universitária da Madeira',
      'Castra Leuca',
    ],
    guests: ['Orfeão Académico do I.P.V.', 'Grupo de Fados - Fado Livre'],
    awards: {
      melhorTuna: 'Tuna de Medicina do Porto',
      segundaMelhorTuna: 'Estudantina Universitária de Coimbra',
      melhorSerenata: 'Estudantina Universitária de Coimbra',
      melhorOriginal: 'Tuna de Medicina do Porto',
      melhorInstrumental: 'Estudantina Universitária de Coimbra',
      melhorSolista: 'Tuna de Medicina do Porto',
      melhorPandeireta: 'Tuna de Medicina do Porto',
      melhorEstandarte: 'Tuna Universitária da Madeira',
      melhorPassacalles: 'Castra Leuca',
      tunaMaisTuna: 'Tuna Universitária da Madeira',
      mencaoHonrosa: 'Castra Leuca',
    },
  },
  {
    edition: 8,
    year: 2012,
    date: '4-5 Maio',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'Desertuna - Tuna Académica da Universidade da Beira Interior',
      'Imperial Neptuna Académica',
      'Scalabituna - Tuna do Instituto Politécnico de Santarém',
      'TUCP - Tuna da Universidade Católica Portuguesa - Porto',
    ],
    guests: ['Orfeão Académico do I.P.V.', 'Grupo de Fados - Fado Livre'],
    awards: {
      melhorTuna: 'Tuna Universidade Católica Portuguesa do Porto',
      tunaMaisTuna: 'Desertuna',
      melhorPassacalles: 'Imperial Neptuna Académica',
      melhorPandeireta: 'Desertuna',
      melhorOriginal: 'Desertuna',
      melhorInstrumental: 'Tuna Universidade Católica Portuguesa do Porto',
      melhorSolista: 'Tuna Universidade Católica Portuguesa do Porto',
      melhorEstandarte: 'Scalabituna',
      melhorSerenata: 'Desertuna',
    },
  },
  {
    edition: 9,
    year: 2013,
    date: '3-4 Maio',
    venues: ['Aula Magna I.P.V.', 'Rua Formosa'],
    notes: '15 Anos - 1998-2013',
    tunas: [
      'Luz & Tuna - Tuna da Universidade Lusíada de Lisboa',
      'TEUP - Tuna de Engenharia da Universidade do Porto',
      'TUM - Tuna Universitária do Minho',
      'Magna Tuna Cartola - Da Universidade de Aveiro',
    ],
    guests: ['Infantuna Cidade de Viseu', 'Real Tunel Académico'],
    awards: {
      melhorTuna: 'Luz&Tuna',
      tunaMaisTuna: 'Tuna Universitária do Minho',
      melhorPassacalles: 'Tuna Universitária do Minho',
      melhorPandeireta: 'Tuna de Engenharia da Universidade do Porto',
      melhorOriginal: 'Magna Tuna Cartola',
      melhorInstrumental: 'Luz&Tuna',
      melhorSolista: 'Luz&Tuna',
      melhorEstandarte: 'Luz&Tuna',
      melhorSerenata: 'Luz&Tuna',
    },
  },
  {
    edition: 10,
    year: 2014,
    date: '2-3 Maio',
    venues: ['Aula Magna do I.P.V.', 'Rua Formosa'],
    tunas: [
      'TDUP - Tuna do Distrito Universitário do Porto',
      'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      'TUSA',
      "Copituna D'Oppidana",
      'Tuna Templária',
    ],
    guests: ['Infantuna Cidade de Viseu', 'Real Tunel Académico'],
    awards: {
      melhorTuna: 'TAIPCA (Tuna Académica do Instituto Politécnico do Cávado e do Ave)',
      segundaMelhorTuna: 'TDUP (Tuna do Distrito Universitário do Porto)',
      melhorOriginal: 'TAIPCA',
      melhorInstrumental: 'TAIPCA',
      melhorSolista: 'TDUP',
      melhorPandeireta: "Copituna d'Oppidana (Tuna Académica da Guarda)",
      melhorEstandarte: 'TDUP',
      melhorSerenata: "Copituna d'Oppidana",
      tunaMaisTuna: 'T.U.S.A. (Tuna Universitas Scientarium Agrariarum)',
      melhorPassacalles: 'T.U.S.A',
    },
  },
  {
    edition: 11,
    year: 2015,
    date: '1-2 Maio',
    venues: ['Aula Magna I.P.V.', 'Rua Formosa'],
    tunas: [
      'Afonsina - Tuna de Engenharia da Universidade do Minho',
      'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      'EUL - Estudantina Universitária de Lisboa',
      'Versus Tuna - Tuna Académica da Universidade do Algarve',
    ],
    guests: ['Infantuna'],
    awards: {
      melhorTuna: 'EUL',
      tunaMaisTuna: 'Versus Tuna',
      melhorSolista: 'EUL',
      melhorPandeireta: 'Versus Tuna',
      melhorPassacalles: 'Versus Tuna',
      melhorEstandarte: 'Antúnia',
      melhorOriginal: 'Antúnia',
      melhorSerenata: 'Antúnia',
      melhorInstrumental: 'Antúnia',
    },
  },
  {
    edition: 12,
    year: 2016,
    date: '29-30 Abril',
    venues: ['Aula Magna do I.P.V.', 'Rua Formosa'],
    tunas: [
      'Tuna de Medicina da U. de Coimbra',
      'Tuna Universitária do Minho',
      'Estudantina Universitária de Lisboa',
      'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
    ],
    guests: ['Arfectus'],
    awards: {
      melhorTuna: 'Tuna de Medicina da U. de Coimbra',
      tunaMaisTuna: 'Tuna de Medicina da U. de Coimbra',
      melhorPassacalles: 'Tuna Universitária do Minho',
      melhorSerenata: 'Tuna Universitária do Minho',
      melhorOriginal: 'Tuna de Medicina da U. de Coimbra',
      melhorInstrumental: 'Tuna de Medicina da U. Coimbra',
      melhorSolista: 'Estudantina Universitária de Lisboa',
      melhorPandeireta: 'Tuna Universitária do Minho',
      melhorEstandarte: 'Hinoportuna (Tuna Académica do Instituto Politécnico de Viana do Castelo)',
    },
  },
  {
    edition: 13,
    year: 2017,
    date: '5-6 Maio',
    venues: ['Aula Magna IPV'],
    tunas: [
      'Azeituna - Universidade do Minho',
      'EACB - Estudantina Académica de Castelo Branco',
      'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      'Tunídeos - Tuna Masculina da Universidade dos Açores',
    ],
    guests: ['EAL - Estudantina Académica de Lamego', 'Viriatuna - Tuna Académica da ESSV'],
    awards: {
      melhorTuna: 'Azeituna',
      tunaMaisTuna: 'Tunideos',
      melhorPandeireta: 'Tunideos',
      melhorEstandarte: 'Luz&Tuna',
      melhorPassacalles: 'Tunideos',
      melhorInstrumental: 'Estudantina Académica de Castelo Branco',
      melhorSolista: 'Estudantina Académica de Castelo Branco',
      melhorOriginal: 'Azeituna',
      melhorSerenata: 'Tunideos',
    },
  },
  {
    edition: 14,
    year: 2018,
    date: '4-5 Maio',
    venues: ['Clube de Viseu', 'Aula Magna'],
    notes: '20 Anos - Tunadão Canta',
    tunas: [
      'Desertuna - Tuna Académica da Universidade da Beira Interior',
      'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      'TUA - Tuna Universitária de Aveiro',
      'TUIST - Tuna Universitária do Instituto Superior Técnico',
    ],
    guests: ['Viriatuna - Tuna Académica ESSU', 'E.A.L. - Estudantina Académica de Lamego'],
    awards: {
      melhorTuna: 'Desertuna',
      tunaMaisTuna: 'Desertuna',
      melhorSerenata: 'TAIPCA',
      melhorEstandarte: 'Desertuna',
      melhorPandeireta: 'Desertuna',
      melhorSolista: 'Desertuna',
      melhorInstrumental: 'TUIST',
      melhorOriginal: 'TAIPCA',
    },
  },
  {
    edition: 15,
    year: 2019,
    date: '3-4 Maio',
    venues: ['Clube de Viseu', 'Aula Magna'],
    tunas: [
      'Tuna de Medicina de Granada',
      'Tuna-MUs',
      'Tuna da Universidade Católica Portuguesa',
      'Tuna Universitária do Minho',
    ],
    guests: ['Estudantina Académica de Lamego', 'Viriatuna'],
    awards: {
      melhorTuna: 'Tuna Universitária do Minho',
      tunaMaisTuna: 'Tuna-MUs',
      melhorSerenata: 'Tuna Universitária do Minho',
      melhorEstandarte: 'Tuna Universitária do Minho',
      melhorPandeireta: 'Tuna-MUs',
      melhorSolista: 'TUCP',
      melhorInstrumental: 'Tuna Universitária do Minho',
      melhorOriginal: 'Tuna Universitária do Minho',
    },
  },
  {
    edition: 16,
    year: 2022,
    date: '29-30 Abril',
    venues: [],
    tunas: ['Afonsina', 'TMUC', 'TAFDUP', 'TUM', 'FAN-Farra', 'EUL'],
    guests: [],
    awards: {
      melhorTuna: 'Afonsina',
      tunaMaisTuna: 'Afonsina',
      tunaDoPublico: 'Afonsina',
      melhorSerenata: 'TMUC',
      melhorEstandarte: 'Afonsina',
      melhorPandeireta: 'Afonsina',
      melhorSolista: 'TAFDUP',
      melhorInstrumental: 'Afonsina',
      melhorOriginal: 'Afonsina',
    },
  },
  {
    edition: 17,
    year: 2023,
    date: '5-6 Maio',
    venues: ['Solar Vinhos do Dão', 'Aula Magna IPV'],
    tunas: [
      'Estudantina Universitária de Lisboa',
      'Tuna Universitária do Minho',
      'FAN-Farra Académica',
      'Tuna Universitária do Porto',
    ],
    guests: ['Viriatuna', 'E.A. Lamego'],
    awards: {
      melhorTuna: 'TUP',
      tunaMaisTuna: 'EUL',
      tunaDoPublico: 'TUP',
      melhorSerenata: 'TUP',
      melhorEstandarte: 'EUL',
      melhorPandeireta: 'FAN-Farra',
      melhorSolista: 'FAN-farra',
      melhorInstrumental: 'TUM',
      melhorOriginal: 'EUL',
    },
  },
  {
    edition: 18,
    year: 2024,
    date: '4 Maio',
    venues: [],
    tunas: [
      'Estudantina Académica de Castelo Branco',
      'Desertuna - Tuna Académica da Universidade da Beira Interior',
      'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      'Afonsina',
    ],
    guests: ['AlcaTuna'],
    awards: {
      melhorTuna: 'Afonsina',
      tunaMaisTuna: 'Desertuna',
      tunaDoPublico: 'Desertuna',
      melhorEstandarte: 'Afonsina',
      melhorPandeireta: 'Afonsina',
      melhorSolista: 'Afonsina',
      melhorInstrumental: 'Estudantina Castelo Branco',
    },
  },
  {
    edition: 19,
    year: 2025,
    date: null,
    venues: [],
    tunas: [],
    guests: [],
    awards: {
      melhorTuna: 'Antunia',
      tunaMaisTuna: 'VerusTuna',
      tunaDoPublico: 'VersusTuna',
      melhorSerenata: 'Antunia',
      melhorEstandarte: 'TUSA',
      melhorPandeireta: 'Antunia',
      melhorSolista: 'VerusTuna',
      melhorInstrumental: 'Antunia',
      melhorOriginal: 'Antunia',
    },
  },
];

// Map award keys to slugs
const awardKeyToSlug: Record<string, string> = {
  melhorTuna: 'melhor-tuna',
  segundaMelhorTuna: 'segunda-melhor-tuna',
  terceiraMelhorTuna: 'terceira-melhor-tuna',
  tunaMaisTuna: 'tuna-mais-tuna',
  tunaDoPublico: 'tuna-do-publico',
  melhorSerenata: 'melhor-serenata',
  melhorPassacalles: 'melhor-passacalles',
  melhorPandeireta: 'melhor-pandeireta',
  melhorInstrumental: 'melhor-instrumental',
  melhorSolista: 'melhor-solista',
  melhorOriginal: 'melhor-original',
  melhorEstandarte: 'melhor-estandarte',
  melhorPortaEstandarte: 'melhor-porta-estandarte',
  mencaoHonrosa: 'mencao-honrosa',
};

// Normalize for slug generation
function normalizeForSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Aggressive normalization for comparing names
function normalizeForComparison(name: string): string {
  return extractShortName(name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

// Extract short name from full name
function extractShortName(name: string): string {
  const parts = name
    .split(' - ')
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length === 0) return name;
  return parts.reduce((shortest, current) => (current.length < shortest.length ? current : shortest));
}

// Parse date string to ISO date (assumes Portuguese format)
function parseDateRange(
  dateStr: string | null,
  year: number
): { startDate: string; endDate: string } {
  if (!dateStr) {
    // Default to May 1st for unknown dates
    return {
      startDate: `${year}-05-01`,
      endDate: `${year}-05-01`,
    };
  }

  const months: Record<string, string> = {
    janeiro: '01',
    fevereiro: '02',
    março: '03',
    marco: '03',
    abril: '04',
    maio: '05',
    junho: '06',
    julho: '07',
    agosto: '08',
    setembro: '09',
    outubro: '10',
    novembro: '11',
    dezembro: '12',
  };

  const normalized = dateStr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Find month
  let month = '05'; // default to May
  for (const [name, num] of Object.entries(months)) {
    const normalizedMonth = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (normalized.includes(normalizedMonth)) {
      month = num;
      break;
    }
  }

  // Extract days (handles "4-5", "29-30", "4 Maio", etc.)
  const dayMatch = normalized.match(/(\d+)(?:\s*-\s*(\d+))?/);
  let startDay = '01';
  let endDay = '01';

  if (dayMatch) {
    startDay = dayMatch[1].padStart(2, '0');
    endDay = (dayMatch[2] || dayMatch[1]).padStart(2, '0');
  }

  return {
    startDate: `${year}-${month}-${startDay}`,
    endDate: `${year}-${month}-${endDay}`,
  };
}

// Extract all unique venue names
function extractAllVenueNames(): Set<string> {
  const names = new Set<string>();
  for (const edition of citadaoData) {
    edition.venues.forEach((v) => names.add(v));
  }
  return names;
}

// Extract all unique tuna names
function extractAllTunaNames(): Set<string> {
  const names = new Set<string>();
  for (const edition of citadaoData) {
    edition.tunas.forEach((name) => names.add(name));
    edition.guests.forEach((name) => names.add(name));
    if (edition.awards) {
      Object.values(edition.awards).forEach((winner) => {
        if (winner) names.add(winner);
      });
    }
  }
  return names;
}

export const seedCitadaoEditions = async (payload: Payload) => {
  // Cache for venues: normalized name -> id
  const venueCache = new Map<string, string>();

  // Cache for tunas: normalized name -> {id, canonicalName}
  const tunaCache = new Map<string, { id: string; canonicalName: string }>();

  // 1. Create venues
  console.log('\n  📍 Creating venues...');
  const allVenueNames = extractAllVenueNames();
  for (const venueName of allVenueNames) {
    const normalizedKey = normalizeForSlug(venueName);

    // Check if exists
    const existing = await payload.find({
      collection: 'venues',
      where: { name: { equals: venueName } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      venueCache.set(normalizedKey, existing.docs[0].id);
      console.log(`    ⏭️  Venue "${venueName}" already exists`);
    } else {
      const venue = await payload.create({
        collection: 'venues',
        data: { name: venueName },
      });
      venueCache.set(normalizedKey, venue.id);
      console.log(`    ✅ Created venue: ${venueName}`);
    }
  }

  // 2. Pre-load existing tunas
  const existingTunas = await payload.find({
    collection: 'tunas',
    limit: 1000,
  });
  for (const tuna of existingTunas.docs) {
    const normalizedKey = normalizeForComparison(tuna.fullName || tuna.shortName);
    if (!tunaCache.has(normalizedKey)) {
      tunaCache.set(normalizedKey, { id: tuna.id, canonicalName: tuna.fullName || tuna.shortName });
    }
  }
  console.log(`\n  📋 Loaded ${existingTunas.docs.length} existing tunas into cache`);

  // 3. Create all tunas
  console.log('\n  🎵 Creating tunas...');
  const allTunaNames = extractAllTunaNames();
  for (const name of allTunaNames) {
    const normalizedKey = normalizeForComparison(name);

    if (tunaCache.has(normalizedKey)) {
      continue; // Already exists
    }

    const shortName = extractShortName(name);
    const slug = normalizeForSlug(shortName);

    try {
      const newTuna = await payload.create({
        collection: 'tunas',
        data: {
          shortName: `${slug}-${Date.now()}`, // Ensure unique
          fullName: name,
        },
      });
      tunaCache.set(normalizedKey, { id: newTuna.id, canonicalName: name });
      console.log(`    ✅ Created tuna: ${shortName} (${name})`);
    } catch (error) {
      console.error(`    ❌ Failed to create tuna "${name}":`, error);
    }
  }

  // Helper to get tuna ID
  const getTunaId = (name: string): string | null => {
    const normalizedKey = normalizeForComparison(name);
    const cached = tunaCache.get(normalizedKey);
    if (cached) {
      if (cached.canonicalName !== name) {
        console.log(`    🔗 Matched "${name}" → "${cached.canonicalName}"`);
      }
      return cached.id;
    }
    console.log(`    ⚠️  Tuna not found: ${name}`);
    return null;
  };

  // 4. Get award types
  const awardTypesResult = await payload.find({
    collection: 'award-types',
    limit: 100,
  });
  const awardTypesBySlug = new Map(awardTypesResult.docs.map((doc) => [doc.slug, doc.id]));

  // 5. Create editions, participants and awards
  console.log('\n  📅 Creating Citadão editions...');
  for (const edition of citadaoData) {
    try {
      // Check if edition exists
      const existing = await payload.find({
        collection: 'citadao-editions',
        where: { editionNumber: { equals: edition.edition } },
        limit: 1,
      });

      let editionId: string;

      if (existing.docs.length > 0) {
        editionId = existing.docs[0].id;
        console.log(`  ⏭️  Citadão ${edition.edition}º (${edition.year}) already exists`);
      } else {
        const { startDate, endDate } = parseDateRange(edition.date, edition.year);

        // Build schedule array
        const schedule: Array<{ date: string; venue: string }> = [];
        for (const venueName of edition.venues) {
          const venueId = venueCache.get(normalizeForSlug(venueName));
          if (venueId) {
            schedule.push({ date: startDate, venue: venueId });
          }
        }

        const newEdition = await payload.create({
          collection: 'citadao-editions',
          data: {
            editionNumber: edition.edition,
            startDate,
            endDate,
            schedule,
            notes: (edition as { notes?: string }).notes || '',
            status: 'published',
          },
        });
        editionId = newEdition.id;
        console.log(`  ✅ Created Citadão ${edition.edition}º (${edition.year})`);
      }

      // 6. Create participants (contestants)
      for (const tunaName of edition.tunas) {
        const tunaId = getTunaId(tunaName);
        if (!tunaId) continue;

        // Check if participant exists
        const existingParticipant = await payload.find({
          collection: 'citadao-participants',
          where: {
            and: [{ edition: { equals: editionId } }, { tuna: { equals: tunaId } }],
          },
          limit: 1,
        });

        if (existingParticipant.docs.length === 0) {
          await payload.create({
            collection: 'citadao-participants',
            data: {
              edition: editionId,
              tuna: tunaId,
              type: 'contestant',
            },
          });
        }
      }

      // 7. Create participants (guests)
      for (const tunaName of edition.guests) {
        const tunaId = getTunaId(tunaName);
        if (!tunaId) continue;

        const existingParticipant = await payload.find({
          collection: 'citadao-participants',
          where: {
            and: [{ edition: { equals: editionId } }, { tuna: { equals: tunaId } }],
          },
          limit: 1,
        });

        if (existingParticipant.docs.length === 0) {
          await payload.create({
            collection: 'citadao-participants',
            data: {
              edition: editionId,
              tuna: tunaId,
              type: 'guest',
            },
          });
        }
      }

      // 8. Create awards
      if (edition.awards) {
        for (const [key, winnerName] of Object.entries(edition.awards)) {
          if (!winnerName) continue;

          const slug = awardKeyToSlug[key];
          const awardTypeId = slug ? awardTypesBySlug.get(slug) : null;
          if (!awardTypeId) {
            console.log(`    ⚠️  Award type not found for key: ${key}`);
            continue;
          }

          const tunaId = getTunaId(winnerName);
          if (!tunaId) continue;

          // Check if award exists
          const existingAward = await payload.find({
            collection: 'citadao-awards',
            where: {
              and: [{ edition: { equals: editionId } }, { award: { equals: awardTypeId } }],
            },
            limit: 1,
          });

          if (existingAward.docs.length === 0) {
            await payload.create({
              collection: 'citadao-awards',
              data: {
                edition: editionId,
                award: awardTypeId,
                tuna: tunaId,
              },
            });
          }
        }
      }
    } catch (error) {
      console.error(`  ❌ Failed to create Citadão ${edition.edition}º:`, error);
    }
  }
};
