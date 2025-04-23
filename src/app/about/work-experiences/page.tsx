export default function WorkExperience() {
  return (
    <div className="container max-w-7xl mx-auto text-muted-foreground">
      <h1 className="text-4xl font-bold mb-12">Autres Experience</h1>
      <div className="space-y-12 p-7">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">TOPIVO</h2>
            <span className="text-muted-foreground">
              Juil. 2024 - AOÛT 2024
            </span>
          </div>
          <p className="text-emerald-500 mb-4">Équipier Polyvalent (CDD)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              Accueil clients pour l&#39;ouverture des magasins à Lille et Douai
            </li>
            <li>
              Préparation de commandes, service client, hygiène, encaissement
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">NORMAL</h2>
            <span className="text-muted-foreground">JUIN 2024</span>
          </div>
          <p className="text-emerald-500 mb-4">
            Animateur Commercial (Mission)
          </p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Mise en place des stands et promotions</li>
          </ul>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-12">Work Experience</h1>
      <div>
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">Mairie de Denain</h2>
            <span className="text-muted-foreground">Fév 2024 - Avr. 2024</span>
          </div>
          <p className="text-emerald-500 mb-4">Stagiaire Développeur</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Administration de l&apos;intranet municipal sous WordPress</li>
            <li>
              Implémentation de stratégies de sécurité (Active Directory, GPO,
              mode kiosque)
            </li>
            <li>Support IT (matériel, logiciel, réseau, téléphonie)</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">
              CDN- Conseil Départemental Du Nord
            </h2>
            <span className="text-muted-foreground">NOV 2024 - DÉC 2024</span>
          </div>
          <p className="text-emerald-500 mb-4">Développeur WordPress (Stage)</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Intégration de l&#39;authentification SAML sur WordPress</li>
            <li>Sécurisation des accès utilisateurs</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">
              CNAM - Caisse Nationale De L&#39;assurance Maladie
            </h2>
            <span className="text-muted-foreground">MAI 2024 - JUIN 2024</span>
          </div>
          <p className="text-emerald-500 mb-4">Développeur VBA (Stage)</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Développement de macros Excel en VBA </li>
            <li>Automatisation des tâches administratives répétitives</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
