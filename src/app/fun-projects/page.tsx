import { funProjects } from "@/config/fun-project";
import { MasonryGallery } from "./masonry-gallery";

export default function FunProjectsPage() {
  return (
    <div className="min-h-screen container max-w-7xl mx-auto text-muted-foreground">
      <div className="container mx-auto">
        <h1 className="items-center justify-center text-3xl font-bold mb-8">Fun Projects</h1>
        <p className="text-lg mb-8 py-2">
          Vous aimez explorer de nouvelles idées, tester des concepts innovants et vous amuser avec la technologie ? Cette page est
          faite pour vous ! Cliquez sur n&apos;importe quel projet pour en savoir plus et plongez dans l&apos;univers de la création.
          Que vous soyez passionné par le design, le développement ou l&apos;innovation, vous trouverez ici des projets inspirants
          qui démontrent mes compétences et ma créativité. Chaque projet a été conçu pour repousser les limites de mon imagination
          et étendre mes compétences. Laissez-vous inspirer par ces réalisations et découvrez ce que l&apos;on peut accomplir quand la
          passion rencontre la technologie !
        </p>
        {funProjects && funProjects.length > 0 ? (
          <MasonryGallery projects={funProjects} />
        ) : (
          <p className="text-center text-gray-400">No projects available at the moment.</p>
        )}
      </div>
    </div>
  );
}
