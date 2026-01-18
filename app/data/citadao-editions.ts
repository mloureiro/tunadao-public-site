export interface CitadaoEdition {
  edition: number;
  year: number;
  date: string;
  venue: string;
  tunas: string[];
  guests: string[];
  awards: Record<string, string> | null;
  notes?: string;
}

export const editionsData: Record<number, CitadaoEdition> = {
  2025: {
    edition: 19,
    year: 2025,
    date: 'Maio 2025',
    venue: 'A anunciar',
    tunas: ['Antunia', 'VersusTuna', 'TUSA', 'TBA'],
    guests: [],
    awards: {
      melhorTuna: 'Antunia',
      tunaMaisTuna: 'VersusTuna',
      tunaDoPublico: 'VersusTuna',
      melhorSerenata: 'Antunia',
      melhorEstandarte: 'TUSA',
      melhorPandeireta: 'Antunia',
      melhorSolista: 'VersusTuna',
      melhorInstrumental: 'Antunia',
      melhorOriginal: 'Antunia',
    },
  },
  2024: {
    edition: 18,
    year: 2024,
    date: '4 Maio',
    venue: 'Viseu',
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
  2023: {
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
  2022: {
    edition: 16,
    year: 2022,
    date: '29-30 Abril',
    venue: 'Viseu',
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
  2019: {
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
  2018: {
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
};

export const awardLabels: Record<string, string> = {
  melhorTuna: 'Melhor Tuna',
  segundaMelhorTuna: '2ª Melhor Tuna',
  terceiraMelhorTuna: '3ª Melhor Tuna',
  tunaMaisTuna: 'Tuna Mais Tuna',
  tunaDoPublico: 'Tuna do Público',
  melhorSerenata: 'Melhor Serenata',
  melhorPassacalles: 'Melhor Passacalles',
  melhorPandeireta: 'Melhor Pandeireta',
  melhorInstrumental: 'Melhor Instrumental',
  melhorSolista: 'Melhor Solista',
  melhorOriginal: 'Melhor Tema Original',
  melhorEstandarte: 'Melhor Estandarte',
  melhorPortaEstandarte: 'Melhor Porta-Estandarte',
  mencaoHonrosa: 'Menção Honrosa',
};
