import type { Payload } from 'payload';

// Tuna websites - keyed by canonical fullName
const tunaWebsites: Record<string, string> = {
  'Tuna de Medicina da Universidade de Coimbra': 'https://www.instagram.com/tunamedicinacoimbra/',
  'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa': 'https://antunia.fct.unl.pt/',
  'Tunídeos - Tuna Masculina da Universidade dos Açores': 'https://www.tunideos.com/',
  'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa': 'https://www.luztuna.pt/',
  'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo': 'https://hinoportuna.ipvc.pt/',
  "Copituna d'Oppidana - Tuna Académica da Guarda": 'https://tagcopituna.wixsite.com/copituna-d-oppidana',
  'FAN-Farra Académica de Coimbra': 'http://www.portugaltunas.com/directorio/fanfarracoimbra/',
  'Versus Tuna - Tuna Académica da Universidade do Algarve': 'https://www.portugaltunas.com/directorio/versustuna/',
  'Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu': 'https://viriatuna.wixsite.com/viriatuna/',
  'Infantuna Cidade de Viseu': 'https://www.portugaltunas.com/directorio/infantuna/',
  'Tuna Universitária do Minho': 'https://tum.pt/',
  'Estudantina Universitária de Lisboa': 'https://www.portugaltunas.com/directorio/estudantinalisboa/',
  'Tuna Universitária do Porto': 'https://orfeao.up.pt/portfolio-item/tup/',
  'Estudantina Académica de Castelo Branco': 'https://estudantinacb.pt/',
  'TDUP - Tuna do Distrito Universitário do Porto': 'https://www.instagram.com/tduporto/',
  'TAFDUP - Tuna Académica da Faculdade de Direito da Universidade do Porto': 'https://x.com/tafdup',
  'Tuna Académica da Universidade de Évora': 'https://www.taue.uevora.pt/',
  'Desertuna - Tuna Académica da Universidade da Beira Interior': 'https://www.portugaltunas.com/directorio/desertuna/',
  'TEUP - Tuna de Engenharia da Universidade do Porto': 'https://fe.up.pt/teup/',
  'Afonsina - Tuna de Engenharia da Universidade do Minho': 'https://www.sas.uminho.pt/desporto/grupos-culturais/afonsina-tuna-de-engenharia',
  'Azeituna - Universidade do Minho': 'https://azeituna.pt/',
};

// Data from citadao-editions.json backup
const citadaoData = [
  {
    edition: 1,
    year: 2004,
    date: '4-5 Novembro',
    venues: ['Aula Magna do IPV'],
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
    venues: ['Aula Magna do IPV'],
    tunas: [
      'Tuna de Medicina da Universidade de Coimbra',
      'Tuna del Colegio Mayor Loyola - Granada',
      'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      'Tintuna - Tuna Académica da Casa Moniz',
      'Tuna Académica de Biomédicas do Porto',
    ],
    guests: ['Infantuna Cidade de Viseu', 'Real Tunel Académico', 'Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu'],
    awards: null,
  },
  {
    edition: 3,
    year: 2007,
    date: '23-24 Março',
    venues: ['Aula Magna do IPV', 'Forum Viseu'],
    tunas: [
      'Tuna del Colegio Mayor Loyola - Granada',
      'Tuna da Universidade Fernando Pessoa',
      'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      'Tuna Bruna - Tuna Académica da Universidade Internacional da Figueira da Foz',
      'Tusófona - Real Tuna Lusófona',
    ],
    guests: [
      'Orfeão Académico de Viseu',
      'Infantuna Cidade de Viseu',
      'Real Tunel Académico',
      'Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu',
    ],
    awards: {
      melhorTuna: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      segundaMelhorTuna: 'Tuna del Colegio Mayor Loyola - Granada',
      melhorPandeireta: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      melhorInstrumental: 'Tuna del Colegio Mayor Loyola - Granada',
      melhorEstandarte: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      melhorSolista: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      melhorOriginal: 'Tuna da Universidade Fernando Pessoa',
      melhorSerenata: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      melhorPassacalles: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
      tunaMaisTuna: 'Tusófona - Real Tuna Lusófona',
      tunaDoPublico: 'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
    },
  },
  {
    edition: 4,
    year: 2008,
    date: '2-3 Maio',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    notes: '10º Aniversário da Tunadão 1998',
    tunas: [
      'Estudantina Académica de Castelo Branco',
      "Copituna d'Oppidana - Tuna Académica da Guarda - Tuna Académica da Guarda",
      'Semper Tesus - Tuna Académica da Escola Superior Agrária de Beja',
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
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
      'Tuna Templária de Tomar',
      'Imperial Neptuna Académica da Figueira da Foz',
      'Estudantina Académica do ISEL',
      'Afonsina - Tuna de Engenharia da Universidade do Minho',
    ],
    guests: [],
    awards: {
      melhorTuna: 'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
      melhorSerenata: 'Tuna Templária de Tomar',
      melhorSolista: 'Imperial Neptuna Académica da Figueira da Foz',
      melhorInstrumental: 'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
      melhorOriginal: 'Tuna Templária de Tomar',
      melhorPandeireta: 'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
      melhorEstandarte: 'Estudantina Académica do ISEL',
      melhorPassacalles: 'Tuna Templária de Tomar',
      tunaMaisTuna: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
    },
  },
  {
    edition: 6,
    year: 2010,
    date: '30 Abril - 1 Maio',
    venues: ['Aula Magna do IPV'],
    tunas: ['anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa', 'Tunídeos - Tuna Masculina da Universidade dos Açores', 'TUB - Tuna Universitária de Beja'],
    guests: ['Cordas ao Cubo'],
    awards: {
      melhorTuna: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      segundaMelhorTuna: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      tunaMaisTuna: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorInstrumental: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorSolista: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorOriginal: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorPandeireta: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorPassacalles: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorEstandarte: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorSerenata: 'TUB - Tuna Universitária de Beja',
    },
  },
  {
    edition: 7,
    year: 2011,
    date: '29-30 Abril',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'Tuna de Medicina do Porto',
      'Estudantina Universitária de Coimbra',
      'Tuna Universitária da Madeira',
      'Castra Leuca - Tuna Académica Masculina do Instituto Politécnico de Castelo Branco',
    ],
    guests: ['Orfeão Académico do I.P.V.', 'Fado Livre - Grupo de Fados'],
    awards: {
      melhorTuna: 'Tuna de Medicina do Porto',
      segundaMelhorTuna: 'Estudantina Universitária de Coimbra',
      melhorSerenata: 'Estudantina Universitária de Coimbra',
      melhorOriginal: 'Tuna de Medicina do Porto',
      melhorInstrumental: 'Estudantina Universitária de Coimbra',
      melhorSolista: 'Tuna de Medicina do Porto',
      melhorPandeireta: 'Tuna de Medicina do Porto',
      melhorEstandarte: 'Tuna Universitária da Madeira',
      melhorPassacalles: 'Castra Leuca - Tuna Académica Masculina do Instituto Politécnico de Castelo Branco',
      tunaMaisTuna: 'Tuna Universitária da Madeira',
      mencaoHonrosa: 'Castra Leuca - Tuna Académica Masculina do Instituto Politécnico de Castelo Branco',
    },
  },
  {
    edition: 8,
    year: 2012,
    date: '4-5 Maio',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'Desertuna - Tuna Académica da Universidade da Beira Interior',
      'Imperial Neptuna Académica da Figueira da Foz',
      'Scalabituna - Tuna do Instituto Politécnico de Santarém',
      'TUCP - Tuna da Universidade Católica Portuguesa - Porto',
    ],
    guests: ['Orfeão Académico do I.P.V.', 'Fado Livre - Grupo de Fados'],
    awards: {
      melhorTuna: 'TUCP - Tuna da Universidade Católica Portuguesa - Porto',
      tunaMaisTuna: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorPassacalles: 'Imperial Neptuna Académica da Figueira da Foz',
      melhorPandeireta: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorOriginal: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorInstrumental: 'TUCP - Tuna da Universidade Católica Portuguesa - Porto',
      melhorSolista: 'TUCP - Tuna da Universidade Católica Portuguesa - Porto',
      melhorEstandarte: 'Scalabituna - Tuna do Instituto Politécnico de Santarém',
      melhorSerenata: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
    },
  },
  {
    edition: 9,
    year: 2013,
    date: '3-4 Maio',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    notes: '15 Anos - 1998-2013',
    tunas: [
      'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      'TEUP - Tuna de Engenharia da Universidade do Porto',
      'Tuna Universitária do Minho',
      'Magna Tuna Cartola - Da Universidade de Aveiro',
    ],
    guests: ['Infantuna Cidade de Viseu', 'Real Tunel Académico'],
    awards: {
      melhorTuna: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      tunaMaisTuna: 'Tuna Universitária do Minho',
      melhorPassacalles: 'Tuna Universitária do Minho',
      melhorPandeireta: 'TEUP - Tuna de Engenharia da Universidade do Porto',
      melhorOriginal: 'Magna Tuna Cartola - Da Universidade de Aveiro',
      melhorInstrumental: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      melhorSolista: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      melhorEstandarte: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      melhorSerenata: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
    },
  },
  {
    edition: 10,
    year: 2014,
    date: '2-3 Maio',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'TDUP - Tuna do Distrito Universitário do Porto',
      'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
      "Copituna d'Oppidana - Tuna Académica da Guarda - Tuna Académica da Guarda",
      'Tuna Templária de Tomar',
    ],
    guests: ['Infantuna Cidade de Viseu', 'Real Tunel Académico'],
    awards: {
      melhorTuna: 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      segundaMelhorTuna: 'TDUP - Tuna do Distrito Universitário do Porto',
      melhorOriginal: 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      melhorInstrumental: 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      melhorSolista: 'TDUP - Tuna do Distrito Universitário do Porto',
      melhorPandeireta: "Copituna d'Oppidana - Tuna Académica da Guarda - Tuna Académica da Guarda",
      melhorEstandarte: 'TDUP - Tuna do Distrito Universitário do Porto',
      melhorSerenata: "Copituna d'Oppidana - Tuna Académica da Guarda",
      tunaMaisTuna: 'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
      melhorPassacalles: 'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
    },
  },
  {
    edition: 11,
    year: 2015,
    date: '1-2 Maio',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'Afonsina - Tuna de Engenharia da Universidade do Minho',
      'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      'Estudantina Universitária de Lisboa',
      'Versus Tuna - Tuna Académica da Universidade do Algarve',
    ],
    guests: ['Infantuna Cidade de Viseu'],
    awards: {
      melhorTuna: 'Estudantina Universitária de Lisboa',
      tunaMaisTuna: 'Versus Tuna - Tuna Académica da Universidade do Algarve',
      melhorSolista: 'Estudantina Universitária de Lisboa',
      melhorPandeireta: 'Versus Tuna - Tuna Académica da Universidade do Algarve',
      melhorPassacalles: 'Versus Tuna - Tuna Académica da Universidade do Algarve',
      melhorEstandarte: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorOriginal: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorSerenata: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorInstrumental: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
    },
  },
  {
    edition: 12,
    year: 2016,
    date: '29-30 Abril',
    venues: ['Aula Magna do IPV', 'Rua Formosa'],
    tunas: [
      'Tuna de Medicina da Universidade de Coimbra',
      'Tuna Universitária do Minho',
      'Estudantina Universitária de Lisboa',
      'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
    ],
    guests: ['Arfectus'],
    awards: {
      melhorTuna: 'Tuna de Medicina da Universidade de Coimbra',
      tunaMaisTuna: 'Tuna de Medicina da Universidade de Coimbra',
      melhorPassacalles: 'Tuna Universitária do Minho',
      melhorSerenata: 'Tuna Universitária do Minho',
      melhorOriginal: 'Tuna de Medicina da Universidade de Coimbra',
      melhorInstrumental: 'Tuna de Medicina da Universidade de Coimbra',
      melhorSolista: 'Estudantina Universitária de Lisboa',
      melhorPandeireta: 'Tuna Universitária do Minho',
      melhorEstandarte: 'Hinoportuna - Tuna Académica do Instituto Politécnico de Viana do Castelo',
    },
  },
  {
    edition: 13,
    year: 2017,
    date: '5-6 Maio',
    venues: ['Aula Magna do IPV'],
    tunas: [
      'Azeituna - Universidade do Minho',
      'Estudantina Académica de Castelo Branco',
      'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      'Tunídeos - Tuna Masculina da Universidade dos Açores',
    ],
    guests: ['Estudantina Académica de Lamego', 'Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu'],
    awards: {
      melhorTuna: 'Azeituna - Universidade do Minho',
      tunaMaisTuna: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorPandeireta: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorEstandarte: 'Luz&Tuna - Tuna da Universidade Lusíada de Lisboa',
      melhorPassacalles: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
      melhorInstrumental: 'Estudantina Académica de Castelo Branco',
      melhorSolista: 'Estudantina Académica de Castelo Branco',
      melhorOriginal: 'Azeituna - Universidade do Minho',
      melhorSerenata: 'Tunídeos - Tuna Masculina da Universidade dos Açores',
    },
  },
  {
    edition: 14,
    year: 2018,
    date: '4-5 Maio',
    venues: ['Clube de Viseu', 'Aula Magna do IPV'],
    notes: '20 Anos - Tunadão Canta',
    tunas: [
      'Desertuna - Tuna Académica da Universidade da Beira Interior',
      'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      'TUA - Tuna Universitária de Aveiro',
      'TUIST - Tuna Universitária do Instituto Superior Técnico',
    ],
    guests: ['Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu', 'Estudantina Académica de Lamego'],
    awards: {
      melhorTuna: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      tunaMaisTuna: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorSerenata: 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
      melhorEstandarte: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorPandeireta: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorSolista: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorInstrumental: 'TUIST - Tuna Universitária do Instituto Superior Técnico',
      melhorOriginal: 'TAIPCA - Tuna Académica do Instituto Politécnico do Cávado e do Ave',
    },
  },
  {
    edition: 15,
    year: 2019,
    date: '3-4 Maio',
    venues: ['Clube de Viseu', 'Aula Magna do IPV'],
    tunas: [
      'Tuna de Medicina de Granada',
      'Tuna-MUs - Tuna Médica da Universidade da Beira Interior',
      'Tuna da Universidade Católica Portuguesa',
      'Tuna Universitária do Minho',
    ],
    guests: ['Estudantina Académica de Lamego', 'Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu'],
    awards: {
      melhorTuna: 'Tuna Universitária do Minho',
      tunaMaisTuna: 'Tuna-MUs - Tuna Médica da Universidade da Beira Interior',
      melhorSerenata: 'Tuna Universitária do Minho',
      melhorEstandarte: 'Tuna Universitária do Minho',
      melhorPandeireta: 'Tuna-MUs - Tuna Médica da Universidade da Beira Interior',
      melhorSolista: 'TUCP - Tuna da Universidade Católica Portuguesa - Porto',
      melhorInstrumental: 'Tuna Universitária do Minho',
      melhorOriginal: 'Tuna Universitária do Minho',
    },
  },
  {
    edition: 16,
    year: 2022,
    date: '29-30 Abril',
    venues: [],
    tunas: ['Afonsina - Tuna de Engenharia da Universidade do Minho', 'Tuna de Medicina da Universidade de Coimbra', 'TAFDUP - Tuna Académica da Faculdade de Direito da Universidade do Porto', 'Tuna Universitária do Minho', 'FAN-Farra Académica de Coimbra', 'Estudantina Universitária de Lisboa'],
    guests: [],
    awards: {
      melhorTuna: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      tunaMaisTuna: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      tunaDoPublico: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorSerenata: 'Tuna de Medicina da Universidade de Coimbra',
      melhorEstandarte: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorPandeireta: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorSolista: 'TAFDUP - Tuna Académica da Faculdade de Direito da Universidade do Porto',
      melhorInstrumental: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorOriginal: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
    },
  },
  {
    edition: 17,
    year: 2023,
    date: '5-6 Maio',
    venues: ['Solar Vinhos do Dão', 'Aula Magna do IPV'],
    tunas: [
      'Estudantina Universitária de Lisboa',
      'Tuna Universitária do Minho',
      'FAN-Farra Académica de Coimbra',
      'Tuna Universitária do Porto',
    ],
    guests: ['Viriatuna - Tuna Académica da Escola Superior de Saúde de Viseu', 'Estudantina Académica de Lamego'],
    awards: {
      melhorTuna: 'Tuna Universitária do Porto',
      tunaMaisTuna: 'Estudantina Universitária de Lisboa',
      tunaDoPublico: 'Tuna Universitária do Porto',
      melhorSerenata: 'Tuna Universitária do Porto',
      melhorEstandarte: 'Estudantina Universitária de Lisboa',
      melhorPandeireta: 'FAN-Farra Académica de Coimbra',
      melhorSolista: 'FAN-Farra Académica de Coimbra',
      melhorInstrumental: 'Tuna Universitária do Minho',
      melhorOriginal: 'Estudantina Universitária de Lisboa',
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
      'Afonsina - Tuna de Engenharia da Universidade do Minho',
    ],
    guests: ['AlcaTuna'],
    awards: {
      melhorTuna: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      tunaMaisTuna: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      tunaDoPublico: 'Desertuna - Tuna Académica da Universidade da Beira Interior',
      melhorEstandarte: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorPandeireta: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorSolista: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
      melhorInstrumental: 'Estudantina Académica de Castelo Branco',
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
      melhorTuna: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      tunaMaisTuna: 'Versus Tuna - Tuna Académica da Universidade do Algarve',
      tunaDoPublico: 'Versus Tuna - Tuna Académica da Universidade do Algarve',
      melhorSerenata: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorEstandarte: 'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
      melhorPandeireta: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorSolista: 'Versus Tuna - Tuna Académica da Universidade do Algarve',
      melhorInstrumental: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
      melhorOriginal: 'anTUNiA - Tuna de Ciências e Tecnologia da Universidade Nova de Lisboa',
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
      const website = tunaWebsites[name];
      const newTuna = await payload.create({
        collection: 'tunas',
        data: {
          shortName: `${slug}-${Date.now()}`, // Ensure unique
          fullName: name,
          ...(website && { website }),
        },
      });
      tunaCache.set(normalizedKey, { id: newTuna.id, canonicalName: name });
      console.log(`    ✅ Created tuna: ${shortName} (${name})${website ? ` [${website}]` : ''}`);
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
