export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type:
    | "school_project"
    | "certification"
    | "veille-technologique"
    | "internship"
    | "personnal-project";
  demoLink?: string;
  videoLink?: string;
  viewLink?: string;
  squareCode?: string;
  width?: number;
  height?: number;
  githubLink?: string;
  qrCodeLink?: string;
}

export const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Nautilus Horizon (Page en construction)",
    description:
      "J'ai développé une application web pour le projet Nautilus Horizon. L'application a été construite en utilisant Next.js et Tailwind CSS, offrant une interface moderne, réactive et performante.",
    image: "/page-en-construction.png",
    type: "personnal-project",
    demoLink: "https://example.com/demo/school-project",
    githubLink: "https://github.com/lfednail/marieteam-web-app.git",
  },
  {
    id: "2",
    title: "Veille Technologique Ordinateur Quantique",
    description:
      "J'ai mené une veille technologique sur l'ordinateur quantique et l'internet quantique, en suivant les avancées récentes dans ces domaines de pointe. Mon objectif était de me tenir informé des nouvelles découvertes, des innovations techniques, ainsi que des applications potentielles des technologies quantiques. Cette veille m'a permis d'approfondir mes connaissances sur l'évolution de ces technologies et leurs impacts sur l'avenir du secteur informatique.",
    image: "/images/veille-techno.png",
    type: "veille-technologique",
    viewLink: "/pdf/Veille-techno.pdf",
    squareCode: "/pdf/Ressources_Veille_Technologique.pdf",
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description:
      "Conception et développement d'un portfolio personnel entièrement responsive avec Next.js, mettant en avant mes projets, compétences et expériences professionnelles.",
    image: "/images/Personal-Portfolio-Website.png",
    type: "personnal-project",
    demoLink: "https://fednail-leclercq.vercel.app/",
    githubLink: "https://github.com/lfednail/site_fednail.git",
  },
  {
    id: "4",
    title: 'Certification Mooc de l"ANSSI"',
    description: 'Certification de l"ANSSI en mooc',
    image: "/images/certificat-MOOC.png",
    type: "certification",
    viewLink: "/certificat-MOOC.pdf",
    demoLink: "",
  },
  {
    id: "5",
    title: "Conseil Départemental du Nord",
    description:
      "Lors de mon stage au Conseil Départemental du Nord, jai intégré lauthentification SAML sur une plateforme WordPress pour sécuriser les accès utilisateurs. Mon rôle consistait à configurer et à déployer cette solution afin de renforcer la sécurité des connexions tout en assurant une expérience utilisateur fluide.",
    image: "/images/stages/logonord.png",
    type: "internship",
    videoLink:
      "https://drive.google.com/file/d/1bF-YGNoUwTtgAABqjYvzQMKU70BYPY05/view?usp=drive_link",
    viewLink: "./pdf/CD59_RapportStage_ERD_MiseEnPlaceSAML.pdf",
  },
  {
    id: "6",
    title: "Mise en place d'un support ou assistance aux utilisateurs (GLPI)",
    description: "Installation de GLPI sur un serveur debian 12",
    image: "/glpi.png",
    type: "school_project",
    viewLink: "/pdf/Installer-GLPI-10-sous_Debian-12.pdf",
    demoLink: "",
  },
  {
    id: "7",
    title: "(C.N.A.M.) Caisse Nationale d'Assurance Maladie",
    description:
      "Lors de mon stage à la Caisse Nationale d'Assurance Maladie, j'ai utilisé et appris à travailler avec VBA (Visual Basic for Applications). J'ai créé une macro Word permettant de partager automatiquement un document sur SharePoint, optimisant ainsi le processus de gestion et de partage de documents au sein de l'entreprise. ",
    image: "/images/stages/CNAM-removebg.png",
    type: "internship",
    viewLink: "/pdf/Presentation_de_stage.pdf",
  },

  {
    id: "8",
    title: "Certification de formation",
    description: " Un PDF ma Certification de formation",
    image: "/images/certification.png",
    type: "certification",
    viewLink: "/pdf/certification_pdf.pdf",
    demoLink: "/certification.pptx",
  },
  {
    id: "9",
    title: "Nightclub Echafée",
    description:
      "Bienvenue à L'Echafee, où la musique rencontre le luxe. Découvrez l'expérience ultime de la vie nocturne. Notre établissement est conçu pour offrir une expérience immersive et inoubliable aux amateurs de musique et de nightlife.",
    image: "/images/logo-echafee.png",
    type: "personnal-project",
    demoLink: "https://echafee.vercel.app/",
    githubLink: "https://github.com/lfednail/nightfall.git",
  },
  {
    id: "10",
    title: "Mairie de Denain",
    description:
      "Lors de mon stage à la Mairie de Denain, j'ai contribué à l'optimisation des services informatiques et à la gestion des infrastructures. J'ai administré l'intranet municipal (WordPress), assuré le support technique (matériel, logiciel, réseau, téléphonie), et géré les sauvegardes avec VEEAM.",
    image: "/images/MairieDenain.png",
    type: "internship",
    viewLink: "/pdf/Rapport_stage_Denain.pdf",
  },
  {
    id: "11",
    title: "Tableau de Synthese E4",
    description:
      "Accédez ici à mon tableau de synthèse E4, récapitulant l'ensemble de mes compétences, projets et missions réalisés dans le cadre du BTS SIO.",
    image: "/images/tableau-de-synthese.png",
    type: "school_project",
    viewLink: "/pdf/Annexe6-1-Tableau_de_synthèse-ÉpreuveE4-BTSSIO2022.pdf",
  },
  // Add more items as needed
];
