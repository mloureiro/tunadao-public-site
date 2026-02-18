/**
 * Master list of all tunas with shortName as unique identifier.
 * This is the single source of truth for tuna data in the seed system.
 */

export interface MasterTuna {
  shortName: string;
  fullName: string;
  city?: string;
  website?: string;
  /** Cloudinary public ID for logo (without extension) */
  logoPublicId?: string;
  type?: 'tuna' | 'tuna-feminina' | 'tuna-veterana' | 'tuna-senior' | 'international' | 'group' | 'soloist';
}

/**
 * All known tunas from Citadao editions and Palmares history.
 * shortName is the unique identifier used for lookups.
 */
export const MASTER_TUNAS: MasterTuna[] = [
  // === A ===
  {
    shortName: 'Afonsina',
    fullName: 'Tuna de Engenharia da Universidade do Minho',
    city: 'Guimaraes',
    website: 'https://afonsina.com/',
    logoPublicId: 'tunadao/tunas/afonsina',
  },
  {
    shortName: 'AlcaTuna',
    fullName: 'AlcaTuna de Alcafache',
    city: 'Alcafache',
    logoPublicId: 'tunadao/tunas/alcatuna-alcafache',
  },
  {
    shortName: 'anTUNiA',
    fullName: 'Tuna de Ciencias e Tecnologia da Universidade Nova de Lisboa',
    city: 'Lisboa',
    website: 'https://antunia.fct.unl.pt/',
    logoPublicId: 'tunadao/tunas/antunia',
  },
  {
    shortName: 'Adfectus',
    fullName: 'Adfectus (Ricardo Rocha - One Man Band)',
    city: 'Viseu',
    logoPublicId: 'tunadao/tunas/adfectus',
    type: 'soloist',
  },
  {
    shortName: 'Azeituna',
    fullName: 'Tuna da Universidade do Minho',
    city: 'Braga',
    website: 'https://azeituna.pt/',
    logoPublicId: 'tunadao/tunas/azeituna',
  },

  // === B ===
  {
    shortName: 'Bruna',
    fullName: 'Tuna Universitaria da Figueira da Foz',
    city: 'Figueira da Foz',
  },

  // === C ===
  {
    shortName: 'Castra Leuca',
    fullName: 'Tuna Academica Masculina do Instituto Politecnico de Castelo Branco',
    city: 'Castelo Branco',
    logoPublicId: 'tunadao/tunas/castra-leuca',
  },
  {
    shortName: 'Charrascos da Citania',
    fullName: 'Charrascos da Citania',
    city: 'Viseu',
    type: 'group',
  },
  {
    shortName: "Copituna d'Oppidana",
    fullName: 'Tuna Academica da Guarda',
    city: 'Guarda',
    website: 'https://tagcopituna.wixsite.com/copituna-d-oppidana',
    logoPublicId: 'tunadao/tunas/copituna',
  },
  {
    shortName: 'Cordas ao Cubo',
    fullName: 'Cordas ao Cubo',
    type: 'group',
  },

  // === D ===
  {
    shortName: 'Desertuna',
    fullName: 'Tuna Academica da Universidade da Beira Interior',
    city: 'Covilha',
    website: 'https://www.portugaltunas.com/directorio/desertuna/',
    logoPublicId: 'tunadao/tunas/desertuna',
  },

  // === E ===
  {
    shortName: 'EACB',
    fullName: 'Estudantina Academica de Castelo Branco',
    city: 'Castelo Branco',
    website: 'https://estudantinacb.pt/',
    logoPublicId: 'tunadao/tunas/estudantina-academica-castelo-branco',
  },
  {
    shortName: 'Estudantina ISEL',
    fullName: 'Estudantina Academica do ISEL',
    city: 'Lisboa',
    logoPublicId: 'tunadao/tunas/estudantina-academica-isel',
  },
  {
    shortName: 'Estudantina Lamego',
    fullName: 'Estudantina Academica de Lamego',
    city: 'Lamego',
    logoPublicId: 'tunadao/tunas/estudantina-academica-lamego',
  },
  {
    shortName: 'EUC',
    fullName: 'Estudantina Universitaria de Coimbra',
    city: 'Coimbra',
    logoPublicId: 'tunadao/tunas/estudantina-universitaria-coimbra',
  },
  {
    shortName: 'EUL',
    fullName: 'Estudantina Universitaria de Lisboa',
    city: 'Lisboa',
    website: 'https://www.portugaltunas.com/directorio/estudantinalisboa/',
    logoPublicId: 'tunadao/tunas/estudantina-universitaria-lisboa',
  },

  // === F ===
  {
    shortName: 'Fado Livre',
    fullName: 'Grupo de Fados',
    city: 'Viseu',
    type: 'group',
  },
  {
    shortName: 'FAN-Farra',
    fullName: 'Farra Academica de Coimbra',
    city: 'Coimbra',
    website: 'http://www.portugaltunas.com/directorio/fanfarracoimbra/',
    logoPublicId: 'tunadao/tunas/fan-farra-academica-coimbra',
  },
  // === G ===
  {
    shortName: 'Gatunos',
    fullName: 'Tuna Academica do Politecnico do Porto',
    city: 'Vila do Conde',
    website: 'https://alcatraz.gatunos.pt/',
  },

  // === H ===
  {
    shortName: 'Hinoportuna',
    fullName: 'Tuna Academica do Instituto Politecnico de Viana do Castelo',
    city: 'Viana do Castelo',
    website: 'https://hinoportuna.ipvc.pt/',
    logoPublicId: 'tunadao/tunas/hinoportuna',
  },

  // === I ===
  {
    shortName: 'Imperial Neptuna',
    fullName: 'Tuna Academica da Figueira da Foz',
    city: 'Figueira da Foz',
    logoPublicId: 'tunadao/tunas/imperial-neptuna',
  },
  {
    shortName: 'Infantuna',
    fullName: 'Infantuna Cidade de Viseu',
    city: 'Viseu',
    website: 'https://www.portugaltunas.com/directorio/infantuna/',
    logoPublicId: 'tunadao/tunas/infantuna-cidade-viseu',
    type: 'group',
  },

  // === L ===
  {
    shortName: 'Luz&Tuna',
    fullName: 'Tuna da Universidade Lusiada de Lisboa',
    city: 'Lisboa',
    website: 'https://www.luztuna.pt/',
    logoPublicId: 'tunadao/tunas/luztuna',
  },

  // === M ===
  {
    shortName: 'Magna Tuna Cartola',
    fullName: 'Tuna da Universidade de Aveiro',
    city: 'Aveiro',
    logoPublicId: 'tunadao/tunas/magna-tuna-cartola',
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

  // === Q ===
  {
    shortName: 'QFC',
    fullName: 'Queima das Fitas de Coimbra',
    city: 'Coimbra',
    logoPublicId: 'tunadao/tunas/queima-fitas-coimbra',
  },

  // === R ===
  {
    shortName: 'Real Tunel',
    fullName: 'Real Tunel Academico',
    city: 'Viseu',
    logoPublicId: 'tunadao/tunas/real-tunel-academico',
  },
  {
    shortName: 'RTUB',
    fullName: 'Real Tuna Universitaria de Braganca',
    city: 'Braganca',
    logoPublicId: 'tunadao/tunas/real-tuna-braganca',
  },

  // === S ===
  {
    shortName: 'Scalabituna',
    fullName: 'Tuna do Instituto Politecnico de Santarem',
    city: 'Santarem',
    logoPublicId: 'tunadao/tunas/scalabituna',
  },
  {
    shortName: 'Semper Tesus',
    fullName: 'Tuna Academica da Escola Superior Agraria de Beja',
    city: 'Beja',
    logoPublicId: 'tunadao/tunas/semper-tesus',
  },

  // === T ===
  {
    shortName: 'TAB',
    fullName: 'Tuna Academica de Biomedicas do Porto',
    city: 'Porto',
  },
  {
    shortName: 'TAEP',
    fullName: 'Tuna Academica de Enfermagem do Porto',
    city: 'Porto',
  },
  {
    shortName: 'TAFDUP',
    fullName: 'Tuna Academica da Faculdade de Direito da Universidade do Porto',
    city: 'Porto',
    website: 'https://x.com/tafdup',
  },
  {
    shortName: 'TAIPCA',
    fullName: 'Tuna Academica do Instituto Politecnico do Cavado e do Ave',
    city: 'Barcelos',
  },
  {
    shortName: 'TAISEP',
    fullName: 'Tuna Academica do Instituto Superior de Engenharia do Porto',
    city: 'Porto',
    website: 'https://en.taisep.com/',
  },
  {
    shortName: 'TASCA',
    fullName: 'Tuna Academica de Setubal Cidade Amada',
    city: 'Setubal',
  },
  {
    shortName: 'TAUE',
    fullName: 'Tuna Academica da Universidade de Evora',
    city: 'Evora',
    website: 'https://www.taue.uevora.pt/',
    logoPublicId: 'tunadao/tunas/tuna-academica-evora',
  },
  {
    shortName: 'TAUP',
    fullName: 'Tuna Academica da Universidade Portucalense',
    city: 'Porto',
    logoPublicId: 'tunadao/tunas/tuna-portucalense',
  },
  {
    shortName: 'TDUP',
    fullName: 'Tuna do Distrito Universitario do Porto',
    city: 'Porto',
    website: 'https://www.instagram.com/tduporto/',
    logoPublicId: 'tunadao/tunas/tdup',
  },
  {
    shortName: 'TEUP',
    fullName: 'Tuna de Engenharia da Universidade do Porto',
    city: 'Porto',
    website: 'https://fe.up.pt/teup/',
    logoPublicId: 'tunadao/tunas/teup',
  },
  {
    shortName: 'TFISCAP',
    fullName: 'Tuna Feminina do ISCAP',
    city: 'Porto',
    type: 'tuna-feminina',
  },
  {
    shortName: 'Tintuna',
    fullName: 'Tuna Academica da Egas Moniz',
    city: 'Madeira',
  },
  {
    shortName: 'TMUC',
    fullName: 'Tuna de Medicina da Universidade de Coimbra',
    city: 'Coimbra',
    website: 'https://www.instagram.com/tunamedicinacoimbra/',
    logoPublicId: 'tunadao/tunas/tuna-medicina-coimbra',
  },
  {
    shortName: 'TMP',
    fullName: 'Tuna de Medicina do Porto',
    city: 'Porto',
    logoPublicId: 'tunadao/tunas/tuna-medicina-porto',
  },
  {
    shortName: 'Trovantina',
    fullName: 'Tuna Masculina do Instituto Politecnico de Leiria',
    city: 'Leiria',
  },
  {
    shortName: 'TUA',
    fullName: 'Tuna Universitaria de Aveiro',
    city: 'Aveiro',
    website: 'https://www.facebook.com/tunauniversitariadeaveiro/',
    logoPublicId: 'tunadao/tunas/tua-aveiro',
  },
  {
    shortName: 'TUB',
    fullName: 'Tuna Universitaria de Beja',
    city: 'Beja',
    logoPublicId: 'tunadao/tunas/tub-beja',
  },
  {
    shortName: 'TUCP',
    fullName: 'Tuna da Universidade Catolica Portuguesa do Porto',
    city: 'Porto',
  },
  {
    shortName: 'TUIST',
    fullName: 'Tuna Universitaria do Instituto Superior Tecnico',
    city: 'Lisboa',
    logoPublicId: 'tunadao/tunas/tuist',
  },
  {
    shortName: 'TUM',
    fullName: 'Tuna Universitaria do Minho',
    city: 'Braga',
    website: 'https://tum.pt/',
    logoPublicId: 'tunadao/tunas/tuna-universitaria-minho',
  },
  {
    shortName: 'TUM-Madeira',
    fullName: 'Tuna Universitaria da Madeira',
    city: 'Funchal',
    logoPublicId: 'tunadao/tunas/tuma-madeira',
  },
  {
    shortName: 'Tuna-MUs',
    fullName: 'Tuna Medica da Universidade da Beira Interior',
    city: 'Covilha',
  },
  {
    shortName: 'TCML',
    fullName: 'Tuna del Colegio Mayor Loyola - Granada',
    city: 'Granada',
    type: 'international',
  },
  {
    shortName: 'TMG',
    fullName: 'Tuna de Medicina de Granada',
    city: 'Granada',
    type: 'international',
  },
  {
    shortName: 'TUPLA',
    fullName: 'Tuna de la Universidade Peruana Los Andes',
    city: 'Peru',
    type: 'international',
  },
  {
    shortName: 'Tuna Salamanca',
    fullName: 'Tuna Universitaria de Salamanca',
    city: 'Salamanca',
    type: 'international',
  },
  {
    shortName: 'Tuna Templaria',
    fullName: 'Tuna Templaria do Instituto Politecnico de Tomar',
    city: 'Tomar',
    logoPublicId: 'tunadao/tunas/tuna-templaria-tomar',
  },
  {
    shortName: 'TAUFP',
    fullName: 'Tuna da Universidade Fernando Pessoa',
    city: 'Porto',
    logoPublicId: 'tunadao/tunas/tuna-fernando-pessoa',
  },
  {
    shortName: 'TUP',
    fullName: 'Tuna Universitaria do Porto',
    city: 'Porto',
    website: 'https://orfeao.up.pt/portfolio-item/tup/',
    logoPublicId: 'tunadao/tunas/tuna-universitaria-porto',
  },
  {
    shortName: 'TUSA',
    fullName: 'T.U.S.A. - Tuna Universitas Scientiarum Agrariarum',
    city: 'Angra do Heroismo',
    website: 'https://www.tunas.es/tunas/portugal/tusa-acores.asp',
    logoPublicId: 'tunadao/tunas/tusa',
  },
  {
    shortName: 'Tusofona',
    fullName: 'Real Tuna Lusofona',
    city: 'Lisboa',
  },
  {
    shortName: 'Tunideos',
    fullName: 'Tuna Masculina da Universidade dos Acores',
    city: 'Ponta Delgada',
    website: 'https://www.tunideos.com/',
    logoPublicId: 'tunadao/tunas/tunideos',
  },

  // === V ===
  {
    shortName: 'Versus Tuna',
    fullName: 'Tuna Academica da Universidade do Algarve',
    city: 'Faro',
    website: 'https://www.versustuna.pt/',
    logoPublicId: 'tunadao/tunas/versus-tuna',
  },
  {
    shortName: 'Viriatuna',
    fullName: 'Tuna Academica da Escola Superior de Saude de Viseu',
    city: 'Viseu',
    website: 'https://viriatuna.wixsite.com/viriatuna/',
    logoPublicId: 'tunadao/tunas/viriatuna-essv',
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
