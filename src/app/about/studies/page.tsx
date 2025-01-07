
export default function Studies() {
  return (
    <div className="container max-w-7xl mx-auto text-muted-foreground">
      <h1 className="text-4xl font-bold mb-12">Studies</h1>

      <div className="space-y-12 p-7">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">BTS SIO - Lycée Gaston Berger, Lille</h2>
            <span className="text-emerald-500 text-sm">EN COURS</span>
          </div>
          <p className="text-muted-foreground">1ère année de BTS Services Informatiques aux Organisations</p>
          <p className="text-muted-foreground">2ème année de BTS Services Informatiques aux Organisations</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h2 className="text-2xl font-semibold">Baccalauréat Technologique STI2D - Lycée César Baggio, Lille</h2>
            <span className="text-emerald-500">OBTENU EN 2022</span>
          </div>
          <p className="text-muted-foreground">Option Anglais / Allemand</p>
        </div>
      </div>
    </div>
  )
}

