import type { Payload } from 'payload';

// Data from citadao-editions.json
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
    guests: ['Orfeão Académico de Viseu', 'Infantuna Cidade Viseu', 'Real Tunel Académico', 'Viriatuna'],
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
  // ... continuing with all editions
  {
    edition: 4,
    year: 2008,
    date: '2-3 Maio',
    venue: 'Aula Magna ISPV / Rua Formosa',
    notes: '10º Aniversário da Tunadão 1998',
    tunas: [
      'Estudantina Académica de Castelo Branco',
      'Copituna D\'Oppidana - Tuna Académica do Inst. Pol. da Guarda',
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
    tunas: ['TDUP - Tuna do Distrito Universitário do Porto', 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave', 'TUSA', 'Copituna D\'Oppidana', 'Tuna Templária'],
    guests: ['Infantuna Cidade de Viseu', 'Real Tunel Académico'],
    awards: {
      melhorTuna: 'TAIPCA (Tuna Académica do Instituto Politécnico do Cávado e do Ave)',
      segundaMelhorTuna: 'TDUP (Tuna do Distrito Universitário do Porto)',
      melhorOriginal: 'TAIPCA',
      melhorInstrumental: 'TAIPCA',
      melhorSolista: 'TDUP',
      melhorPandeireta: 'Copituna d\'Oppidana (Tuna Académica da Guarda)',
      melhorEstandarte: 'TDUP',
      melhorSerenata: 'Copituna d\'Oppidana',
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

export const seedCitadaoEditions = async (payload: Payload) => {
  // Get all award types for reference
  const awardTypesResult = await payload.find({
    collection: 'award-types',
    limit: 100,
  });

  const awardTypesBySlug = new Map(
    awardTypesResult.docs.map((doc) => [doc.slug, doc.id])
  );

  for (const edition of citadaoData) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'citadao-editions',
        where: {
          and: [
            { edition: { equals: edition.edition } },
            { year: { equals: edition.year } },
          ],
        },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Citadão ${edition.edition}º (${edition.year}) already exists, skipping...`);
        continue;
      }

      // Prepare awards array
      const awards = edition.awards
        ? Object.entries(edition.awards)
            .map(([key, winner]) => {
              const slug = awardKeyToSlug[key];
              const awardTypeId = slug ? awardTypesBySlug.get(slug) : null;
              if (!awardTypeId) {
                console.log(`    ⚠️  Award type not found for key: ${key}`);
                return null;
              }
              return {
                awardType: awardTypeId,
                winner: winner as string,
              };
            })
            .filter(Boolean)
        : [];

      await payload.create({
        collection: 'citadao-editions',
        data: {
          edition: edition.edition,
          year: edition.year,
          date: edition.date || '',
          venue: edition.venue || '',
          tunas: edition.tunas.map((name) => ({ name })),
          guests: edition.guests.map((name) => ({ name })),
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
