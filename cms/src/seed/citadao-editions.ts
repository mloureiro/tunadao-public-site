import type { Payload } from 'payload';

// Data from citadao-editions.json backup
const citadaoData = [
  {
    edition: 1,
    year: 2004,
    date: '4-5 Novembro',
    venue: 'Aula Magna do ISPV',
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
    venue: 'Aula Magna do ISPV',
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
    venue: 'Aula Magna do ISPV / Forum Viseu',
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
    venue: 'Aula Magna ISPV / Rua Formosa',
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
    venue: 'Aula Magna IPV / Rua Formosa',
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
    venue: 'Aula Magna do I.P.V.',
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
    venue: 'Aula Magna do I.P.V. / Rua Formosa',
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
    venue: 'Aula Magna do IPV / Rua Formosa',
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
    venue: 'Aula Magna I.P.V. / Rua Formosa',
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
    venue: 'Aula Magna do I.P.V. / Rua Formosa',
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
    venue: 'Aula Magna I.P.V. / Rua Formosa',
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
    venue: 'Aula Magna do I.P.V. / Rua Formosa',
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
    venue: 'Aula Magna IPV',
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
    venue: 'Clube de Viseu / Aula Magna',
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
    venue: 'Clube de Viseu / Aula Magna',
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
    venue: null,
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
    venue: 'Solar Vinhos do Dão / Aula Magna IPV',
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
    venue: null,
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
    venue: null,
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

// Normalize tuna names for slug generation
function normalizeForSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Extract the short name/acronym from a full tuna name
// "Tunídeos - Tuna Masculina da Universidade dos Açores" → "Tunídeos"
// "TEUP - Tuna de Engenharia da Universidade do Porto" → "TEUP"
// "Afonsina" → "Afonsina"
function extractShortName(name: string): string {
  const parts = name.split(' - ').map((p) => p.trim()).filter(Boolean);
  if (parts.length === 0) return name;
  // Return the shortest non-empty part
  return parts.reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest
  );
}

// Aggressive normalization for comparing names (to detect duplicates)
// Uses short name extraction + removes diacritics and non-alphanumeric
// "Tunídeos - Tuna Masculina..." and "Tunideos" → "tunideos"
// "Luz & Tuna - Tuna da Universidade Lusíada" and "Luz&Tuna" → "luztuna"
function normalizeForComparison(name: string): string {
  const shortName = extractShortName(name);
  return shortName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9]/g, ''); // remove ALL non-alphanumeric
}

// Extract all unique tuna/group names from the data
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

// Create or find a tuna by name
// Uses aggressive normalization to match variations like "Luz & Tuna" = "Luz&Tuna"
async function getOrCreateTuna(
  payload: Payload,
  name: string,
  tunaCache: Map<string, { id: string; canonicalName: string }>
): Promise<string | null> {
  // Check cache first using aggressive normalization
  const normalizedKey = normalizeForComparison(name);
  if (tunaCache.has(normalizedKey)) {
    const cached = tunaCache.get(normalizedKey)!;
    if (cached.canonicalName !== name) {
      console.log(`    🔗 Matched "${name}" → "${cached.canonicalName}"`);
    }
    return cached.id;
  }

  // Try to find existing tuna by searching all and comparing normalized names
  const allTunas = await payload.find({
    collection: 'tunas',
    limit: 1000,
  });

  for (const tuna of allTunas.docs) {
    if (normalizeForComparison(tuna.name) === normalizedKey) {
      tunaCache.set(normalizedKey, { id: tuna.id, canonicalName: tuna.name });
      if (tuna.name !== name) {
        console.log(`    🔗 Matched "${name}" → "${tuna.name}" (existing)`);
      }
      return tuna.id;
    }
  }

  // Create new tuna (use the first encountered name as canonical)
  const slug = normalizeForSlug(name);
  try {
    const newTuna = await payload.create({
      collection: 'tunas',
      data: {
        name,
        slug: `${slug}-${Date.now()}`, // Ensure unique slug
        status: 'published',
      },
    });
    console.log(`    ✅ Created tuna: ${name}`);
    tunaCache.set(normalizedKey, { id: newTuna.id, canonicalName: name });
    return newTuna.id;
  } catch (error) {
    console.error(`    ❌ Failed to create tuna "${name}":`, error);
    return null;
  }
}

export const seedCitadaoEditions = async (payload: Payload) => {
  // Cache for normalized tuna name -> {id, canonicalName} mapping
  const tunaCache = new Map<string, { id: string; canonicalName: string }>();

  // Pre-load existing tunas into cache using aggressive normalization
  const existingTunas = await payload.find({
    collection: 'tunas',
    limit: 1000,
  });
  for (const tuna of existingTunas.docs) {
    const normalizedKey = normalizeForComparison(tuna.name);
    // Only add if not already in cache (first one wins)
    if (!tunaCache.has(normalizedKey)) {
      tunaCache.set(normalizedKey, { id: tuna.id, canonicalName: tuna.name });
    }
  }
  console.log(`  📋 Loaded ${existingTunas.docs.length} existing tunas into cache`);

  // Get all award types for reference
  const awardTypesResult = await payload.find({
    collection: 'award-types',
    limit: 100,
  });
  const awardTypesBySlug = new Map(awardTypesResult.docs.map((doc) => [doc.slug, doc.id]));

  // First pass: create all tunas
  console.log('\n  📝 Creating tunas from Citadão data...');
  const allTunaNames = extractAllTunaNames();
  for (const name of allTunaNames) {
    await getOrCreateTuna(payload, name, tunaCache);
  }

  // Second pass: create editions
  console.log('\n  📝 Creating Citadão editions...');
  for (const edition of citadaoData) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'citadao-editions',
        where: {
          and: [{ edition: { equals: edition.edition } }, { year: { equals: edition.year } }],
        },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(
          `  ⏭️  Citadão ${edition.edition}º (${edition.year}) already exists, skipping...`
        );
        continue;
      }

      // Get tuna IDs for participants
      const tunaIds: string[] = [];
      for (const name of edition.tunas) {
        const id = await getOrCreateTuna(payload, name, tunaCache);
        if (id) tunaIds.push(id);
      }

      // Get tuna IDs for guests
      const guestIds: string[] = [];
      for (const name of edition.guests) {
        const id = await getOrCreateTuna(payload, name, tunaCache);
        if (id) guestIds.push(id);
      }

      // Prepare awards array with proper relations
      const awards: Array<{ awardType: string; winner: string }> = [];
      if (edition.awards) {
        for (const [key, winnerName] of Object.entries(edition.awards)) {
          if (!winnerName) continue;

          const slug = awardKeyToSlug[key];
          const awardTypeId = slug ? awardTypesBySlug.get(slug) : null;
          if (!awardTypeId) {
            console.log(`    ⚠️  Award type not found for key: ${key}`);
            continue;
          }

          const winnerId = await getOrCreateTuna(payload, winnerName, tunaCache);
          if (!winnerId) {
            console.log(`    ⚠️  Could not find/create tuna for winner: ${winnerName}`);
            continue;
          }

          awards.push({
            awardType: awardTypeId,
            winner: winnerId,
          });
        }
      }

      await payload.create({
        collection: 'citadao-editions',
        data: {
          edition: edition.edition,
          year: edition.year,
          date: edition.date || '',
          venue: edition.venue || '',
          tunas: tunaIds,
          guests: guestIds,
          awards,
          notes: (edition as { notes?: string }).notes || '',
          status: 'published',
        },
      });
      console.log(`  ✅ Created Citadão edition: ${edition.edition}º (${edition.year})`);
    } catch (error) {
      console.error(`  ❌ Failed to create Citadão ${edition.edition}º:`, error);
    }
  }
};
