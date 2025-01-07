export default function WorkExperience() {
  return (
    <div className="container max-w-7xl mx-auto text-muted-foreground">
      <h1 className="text-4xl font-bold mb-12">Work Experience</h1>
      <div className="space-y-12 p-7">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">TOPIVO</h2>
            <span className="text-muted-foreground">JUILLET 2024 - AOÛT 2024</span>
          </div>
          <p className="text-emerald-500 mb-4">Équipier polyvalent de restauration rapide</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Équipier Buvette lors des Jeux Olympique Paris 2024</li>
            <li>Stade Pierre Mauroy à Villeneuve-d&apos;Ascq</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">NORMAL</h2>
            <span className="text-muted-foreground">JUIN 2024</span>
          </div>
          <p className="text-emerald-500 mb-4">Animateur commercial</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Hôte d&apos;accueil pour ouverture d&#39;un magasin Normal à Lille et Douai</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">CDN- Conseil Départemental Du Nord</h2>
            <span className="text-muted-foreground">NOVEMBRE 2023 - DÉCEMBRE 2023</span>
          </div>
          <p className="text-emerald-500 mb-4">Stagiaire</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Mise en place de l&#39;authentification SAML sur le CMS WordPress</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">CNAM - Caisse Nationale De L&#39;assurance Maladie</h2>
            <span className="text-muted-foreground">MAI 2023 - JUIN 2023</span>
          </div>
          <p className="text-emerald-500 mb-4">Stagiaire</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Utilisation et apprentissage de VBA et création d&#39;une macro Word</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

