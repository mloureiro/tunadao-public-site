/**
 * Master list of all tunas with shortName as unique identifier.
 * This is the single source of truth for tuna data in the seed system.
 */

export interface MasterTuna {
  shortName: string;
  fullName: string;
  city?: string;
  website?: string;
}

/**
 * All known tunas from Citadao editions and Palmares history.
 * shortName is the unique identifier used for lookups.
 */
export const MASTER_TUNAS: MasterTuna[] = [
  // === A ===
  {
    shortName: 'Afonsina',
    fullName: 'Afonsina - Tuna de Engenharia da Universidade do Minho',
    city: 'Guimaraes',
    website: 'https://afonsina.com/',
  },
  {
    shortName: 'AlcaTuna',
    fullName: 'AlcaTuna',
    city: 'Alcains',
  },
  {
    shortName: 'anTUNiA',
    fullName: 'anTUNiA - Tuna de Ciencias e Tecnologia da Universidade Nova de Lisboa',
    city: 'Lisboa',
    website: 'https://antunia.fct.unl.pt/',
  },
  {
    shortName: 'Arfectus',
    fullName: 'Arfectus',
    city: 'Viseu',
  },
  {
    shortName: 'Azeituna',
    fullName: 'Azeituna - Tuna da Universidade do Minho',
    city: 'Braga',
    website: 'https://azeituna.pt/',
  },

  // === B ===
  {
    shortName: 'Bruna',
    fullName: 'Bruna - Tuna Universitaria da Figueira da Foz',
    city: 'Figueira da Foz',
  },

  // === C ===
  {
    shortName: 'Castra Leuca',
    fullName: 'Castra Leuca - Tuna Academica Masculina do Instituto Politecnico de Castelo Branco',
    city: 'Castelo Branco',
  },
  {
    shortName: 'Charrascos da Citania',
    fullName: 'Charrascos da Citania',
    city: 'Viseu',
  },
  {
    shortName: "Copituna d'Oppidana",
    fullName: "Copituna d'Oppidana - Tuna Academica da Guarda",
    city: 'Guarda',
    website: 'https://tagcopituna.wixsite.com/copituna-d-oppidana',
  },
  {
    shortName: 'Cordas ao Cubo',
    fullName: 'Cordas ao Cubo',
  },

  // === D ===
  {
    shortName: 'Desertuna',
    fullName: 'Desertuna - Tuna Academica da Universidade da Beira Interior',
    city: 'Covilha',
    website: 'https://www.portugaltunas.com/directorio/desertuna/',
  },

  // === E ===
  {
    shortName: 'Estudantina CB',
    fullName: 'Estudantina Academica de Castelo Branco',
    city: 'Castelo Branco',
    website: 'https://estudantinacb.pt/',
  },
  {
    shortName: 'Estudantina ISEL',
    fullName: 'Estudantina Academica do ISEL',
    city: 'Lisboa',
  },
  {
    shortName: 'Estudantina Lamego',
    fullName: 'Estudantina Academica de Lamego',
    city: 'Lamego',
  },
  {
    shortName: 'EUC',
    fullName: 'Estudantina Universitaria de Coimbra',
    city: 'Coimbra',
  },
  {
    shortName: 'EUL',
    fullName: 'Estudantina Universitaria de Lisboa',
    city: 'Lisboa',
    website: 'https://www.portugaltunas.com/directorio/estudantinalisboa/',
  },

  // === F ===
  {
    shortName: 'Fado Livre',
    fullName: 'Fado Livre - Grupo de Fados',
    city: 'Viseu',
  },
  {
    shortName: 'FAN',
    fullName: 'FAN - Farra Academica de Coimbra',
    city: 'Coimbra',
    website: 'http://www.portugaltunas.com/directorio/fanfarracoimbra/',
  },

  // === G ===
  {
    shortName: 'Gatunos',
    fullName: 'Gatunos - Tuna Academica do Politecnico do Porto',
    city: 'Vila do Conde',
    website: 'https://alcatraz.gatunos.pt/',
  },

  // === H ===
  {
    shortName: 'Hinoportuna',
    fullName: 'Hinoportuna - Tuna Academica do Instituto Politecnico de Viana do Castelo',
    city: 'Viana do Castelo',
    website: 'https://hinoportuna.ipvc.pt/',
  },

  // === I ===
  {
    shortName: 'Imperial Neptuna',
    fullName: 'Imperial Neptuna Academica da Figueira da Foz',
    city: 'Figueira da Foz',
  },
  {
    shortName: 'Infantuna',
    fullName: 'Infantuna Cidade de Viseu',
    city: 'Viseu',
    website: 'https://www.portugaltunas.com/directorio/infantuna/',
  },

  // === L ===
  {
    shortName: 'Luz&Tuna',
    fullName: 'Luz&Tuna - Tuna da Universidade Lusiada de Lisboa',
    city: 'Lisboa',
    website: 'https://www.luztuna.pt/',
  },

  // === M ===
  {
    shortName: 'Magna Tuna Cartola',
    fullName: 'Magna Tuna Cartola - Da Universidade de Aveiro',
    city: 'Aveiro',
  },

  // === O ===
  {
    shortName: 'Orfeao IPV',
    fullName: 'Orfeao Academico do I.P.V.',
    city: 'Viseu',
  },
  {
    shortName: 'Orfeao Viseu',
    fullName: 'Orfeao Academico de Viseu',
    city: 'Viseu',
  },
  {
    shortName: 'OUP',
    fullName: 'Orfeao Universitario do Porto',
    city: 'Porto',
    website: 'https://orfeao.up.pt/',
  },

  // === R ===
  {
    shortName: 'Real Tunel',
    fullName: 'Real Tunel Academico',
    city: 'Viseu',
  },
  {
    shortName: 'RTUB',
    fullName: 'RTUB - Real Tuna Universitaria de Braganca',
    city: 'Braganca',
  },

  // === S ===
  {
    shortName: 'Scalabituna',
    fullName: 'Scalabituna - Tuna do Instituto Politecnico de Santarem',
    city: 'Santarem',
  },
  {
    shortName: 'Semper Tesus',
    fullName: 'Semper Tesus - Tuna Academica da Escola Superior Agraria de Beja',
    city: 'Beja',
  },

  // === T ===
  {
    shortName: 'TABM',
    fullName: 'Tuna Academica de Biomedicas do Porto',
    city: 'Porto',
  },
  {
    shortName: 'TAEP',
    fullName: 'TAEP - Tuna Academica de Enfermagem do Porto',
    city: 'Porto',
  },
  {
    shortName: 'TAFDUP',
    fullName: 'TAFDUP - Tuna Academica da Faculdade de Direito da Universidade do Porto',
    city: 'Porto',
    website: 'https://x.com/tafdup',
  },
  {
    shortName: 'TAIPCA',
    fullName: 'TAIPCA - Tuna Academica do Instituto Politecnico do Cavado e do Ave',
    city: 'Barcelos',
  },
  {
    shortName: 'TAISEP',
    fullName: 'TAISEP - Tuna Academica do Instituto Superior de Engenharia do Porto',
    city: 'Porto',
    website: 'https://en.taisep.com/',
  },
  {
    shortName: 'TASCA',
    fullName: 'TASCA - Tuna Academica de Setubal Cidade Amada',
    city: 'Setubal',
  },
  {
    shortName: 'TAUE',
    fullName: 'Tuna Academica da Universidade de Evora',
    city: 'Evora',
    website: 'https://www.taue.uevora.pt/',
  },
  {
    shortName: 'TAUP',
    fullName: 'Tuna Academica da Universidade Portucalense',
    city: 'Porto',
  },
  {
    shortName: 'TDUP',
    fullName: 'TDUP - Tuna do Distrito Universitario do Porto',
    city: 'Porto',
    website: 'https://www.instagram.com/tduporto/',
  },
  {
    shortName: 'TEUP',
    fullName: 'TEUP - Tuna de Engenharia da Universidade do Porto',
    city: 'Porto',
    website: 'https://fe.up.pt/teup/',
  },
  {
    shortName: 'TFISCAP',
    fullName: 'Tuna Feminina do ISCAP',
    city: 'Porto',
  },
  {
    shortName: 'Tintuna',
    fullName: 'Tintuna - Tuna Academica da Casa Moniz',
    city: 'Madeira',
  },
  {
    shortName: 'TMUC',
    fullName: 'Tuna de Medicina da Universidade de Coimbra',
    city: 'Coimbra',
    website: 'https://www.instagram.com/tunamedicinacoimbra/',
  },
  {
    shortName: 'TMP',
    fullName: 'Tuna de Medicina do Porto',
    city: 'Porto',
  },
  {
    shortName: 'Trovantina',
    fullName: 'Trovantina - Tuna Masculina do Instituto Politecnico de Leiria',
    city: 'Leiria',
  },
  {
    shortName: 'TUA',
    fullName: 'TUA - Tuna Universitaria de Aveiro',
    city: 'Aveiro',
    website: 'https://www.facebook.com/tunauniversitariadeaveiro/',
  },
  {
    shortName: 'TUB',
    fullName: 'TUB - Tuna Universitaria de Beja',
    city: 'Beja',
  },
  {
    shortName: 'TUCP',
    fullName: 'TUCP - Tuna da Universidade Catolica Portuguesa do Porto',
    city: 'Porto',
  },
  {
    shortName: 'TUIST',
    fullName: 'TUIST - Tuna Universitaria do Instituto Superior Tecnico',
    city: 'Lisboa',
  },
  {
    shortName: 'TUM',
    fullName: 'Tuna Universitaria do Minho',
    city: 'Braga',
    website: 'https://tum.pt/',
  },
  {
    shortName: 'TUM-Madeira',
    fullName: 'Tuna Universitaria da Madeira',
    city: 'Funchal',
  },
  {
    shortName: 'Tuna-MUs',
    fullName: 'Tuna-MUs - Tuna Medica da Universidade da Beira Interior',
    city: 'Covilha',
  },
  {
    shortName: 'Tuna Granada (Loyola)',
    fullName: 'Tuna del Colegio Mayor Loyola - Granada',
    city: 'Granada',
  },
  {
    shortName: 'Tuna Granada (Medicina)',
    fullName: 'Tuna de Medicina de Granada',
    city: 'Granada',
  },
  {
    shortName: 'Tuna Peru (Los Andes)',
    fullName: 'Tuna de la Universidade Peruana Los Andes',
    city: 'Peru',
  },
  {
    shortName: 'Tuna Salamanca',
    fullName: 'Tuna Universitaria de Salamanca',
    city: 'Salamanca',
  },
  {
    shortName: 'Tuna Templaria',
    fullName: 'Tuna Templaria do Instituto Politecnico de Tomar',
    city: 'Tomar',
  },
  {
    shortName: 'Tuna UFP',
    fullName: 'Tuna da Universidade Fernando Pessoa',
    city: 'Porto',
  },
  {
    shortName: 'TUP',
    fullName: 'Tuna Universitaria do Porto',
    city: 'Porto',
    website: 'https://orfeao.up.pt/portfolio-item/tup/',
  },
  {
    shortName: 'TUSA',
    fullName: 'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
    city: 'Angra do Heroismo',
    website: 'https://www.tunas.es/tunas/portugal/tusa-acores.asp',
  },
  {
    shortName: 'Tusofona',
    fullName: 'Tusofona - Real Tuna Lusofona',
    city: 'Lisboa',
  },
  {
    shortName: 'Tunideos',
    fullName: 'Tunideos - Tuna Masculina da Universidade dos Acores',
    city: 'Ponta Delgada',
    website: 'https://www.tunideos.com/',
  },

  // === V ===
  {
    shortName: 'Versus Tuna',
    fullName: 'Versus Tuna - Tuna Academica da Universidade do Algarve',
    city: 'Faro',
    website: 'https://www.versustuna.pt/',
  },
  {
    shortName: 'Viriatuna',
    fullName: 'Viriatuna - Tuna Academica da Escola Superior de Saude de Viseu',
    city: 'Viseu',
    website: 'https://viriatuna.wixsite.com/viriatuna/',
  },
];

/**
 * Lookup map for fast access by shortName
 */
export const TUNA_BY_SHORT_NAME = new Map<string, MasterTuna>(
  MASTER_TUNAS.map((tuna) => [tuna.shortName, tuna])
);

/**
 * Get a tuna by shortName
 * @throws Error if tuna not found
 */
export function getMasterTuna(shortName: string): MasterTuna {
  const tuna = TUNA_BY_SHORT_NAME.get(shortName);
  if (!tuna) {
    throw new Error(`Unknown tuna shortName: "${shortName}". Add it to MASTER_TUNAS first.`);
  }
  return tuna;
}
