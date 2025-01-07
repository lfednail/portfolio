export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type:'school_project' | 'certification' | 'veille-technologique' | 'internship' | 'personnal-project';
  demoLink?: string;
  videoLink?: string;
  viewLink?: string;
  width?: number;
  height?: number;
  githubLink?: string;
  qrCodeLink?: string;
}

export const workItems: WorkItem[] = [

  {
    id: '1',
    title: 'Nautilus Horizon (Page en construction)',
    description: 'Developped a web application for the Nautilus Horizon project, management tool using Next.js and Tailwind CSS.',
    image: '/page-en-construction.png',
    type: 'school_project',
    demoLink: 'https://example.com/demo/school-project',
    githubLink: 'https://github.com/lfednail/marieteam-web-app.git',
  },
  {
    id: '2',
    title: 'Veille Technologique Ordinateur Quantique',
    description: 'Veille technologique sur L\'ordinateur quantique et l\'internet quantique',
    image: '/images/Veille-techno.png',
    type: 'veille-technologique',
    viewLink: '/images/Veille-techno.pdf',

  },
  {
      id: '3',
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a personal portfolio website using Next.js',
      image: '/images/Personal-Portfolio-Website.png',
      type: 'personnal-project',
      demoLink: 'https://fednail-leclerc.vercel.app/',
      githubLink: 'https://github.com/lfednail/site_fednail.git'
  },
  {
    id: '4',
    title: 'Certification Mooc de l"ANSSI"',
    description: 'Certification de l"ANSSI en mooc',
    image: '/images/certificat-MOOC.png',
    type: 'certification',
    viewLink: '/certificat-MOOC.pdf',
    githubLink: ''
  },
  {
    id:'5',
    title: 'Conseil Départemental du Nord',
    description: 'Mise en place de l’authentification SAML sur le CMS WordPress',
    image: '/images/stages/logonord.png',
    type: 'internship',
    videoLink:'/La-ressourcerie.mp4',
    viewLink: './pdf/CD59_RapportStage_ERD_MiseEnPlaceSAML.pdf'
  },
  {
    id:'6',
    title: 'installation de GLPI',
    description: 'Installation de GLPI sur un serveur debian 12',
    image: '/glpi.png',
    type: 'school_project',
    viewLink:'/pdf/Installer-GLPI-10-sous_Debian-12.pdf',
    demoLink:'',
  },
  {
    id:'7',
    title: '(C.N.A.M.) Caisse Nationale d’Assurance Maladie',
    description: 'Utilisation et apprentissage de VBA et creation d’une Macro VBA Word, Creation d\'une macro-Word qui permet de partager un document sur SharePoint.',
    image: '/images/stages/CNAM-removebg.png',
    type:"internship",
    viewLink:'/Presentation_de_stage.pdf',
  },
// Add more items as needed
];