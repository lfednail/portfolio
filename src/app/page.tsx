import HyperText from "@/components/ui/hyper-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-black via-purple-800 to-purple-900">
        <div className="mb-8">
          <Image
            src="/images/Logo_fednail.png"
            alt="Logo"
            width={350}
            height={350}
            className="mx-auto"
          />
        </div>
        <HyperText
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          text="Front-end Developer. "
        />
        <div className="mt-4 max-w-2xl text-gray-300 text-lg mb-8">
          I&#39;m Fednail <span className="font-bold">Leclercq</span>,
          <p className="mt-2 text-gray-300">
            Développeur frontend passionné par la performance et
            l&apos;expérience utilisateur. Je crée des apps web fluides avec
            Next.js le jour, et j&apos;explore des idées ambitieuses la nuit.
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="mt-6 text-muted-foreground"
          size="lg"
        >
          <Link href="/about" className="flex items-center gap-2">
            <Image
              src="/images/moi.png"
              alt="Fednail Leclercq"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            About me
          </Link>
        </Button>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto">
          <HyperText
            className="text-3xl font-bold mb-12 text-center "
            text="Featured Projects"
          />
          <div className="grid md:grid-cols-2 mt-6 gap-8">
            {[
              {
                title: "Personal Portfolio Website",
                description:
                  "Conception et développement d'un portfolio personnel entièrement responsive avec Next.js, mettant en avant mes projets, compétences et expériences professionnelles.",
                image: "/images/Personal-Portfolio-Website.png",
                link: "https://fednail-leclercq.vercel.app/",
              },
              {
                title: "Tableau de Synthese E4",
                description:
                  "Accédez ici à mon tableau de synthèse E4, récapitulant l'ensemble de mes compétences, projets et missions réalisés dans le cadre du BTS SIO.",
                image: "/images/tableau-de-synthese.png",
                link: "/pdf/Annexe6-1-Tableau_de_synthèse-ÉpreuveE4-BTSSIO2022.pdf",
              },
            ].map((project, index) => (
              <Card key={index} className="bg-purple-800 ">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary">
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4  ">
            <Button
              asChild
              className="mt-20 text-center items-center justify-center bg-purple-800 text-gray-300 gap-2"
            >
              <Link href="/fun-projects">Fun projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-purple via-black-800 to-purple-900 py-20">
        <div className="w-full max-w-4xl p-4">
          <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
            <HyperText
              className="text-2xl font-semibold text-white-300"
              text="Take a look at my GitHub Reposistorie"
            />
            <p className="mt-4 text-gray-300">
              here you can find my GitHub and see my different projects.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={"https://github.com/lfednail?tab=repositories"}
                className="flex items-center gap-2"
              >
                <button className="rounded-lg bg-purple-800 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-purple-400 ">
                  Let&#39;s go
                </button>
                <code className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-mono text-gray-300">
                  https://github.com/lfednail?tab=repositories
                </code>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
