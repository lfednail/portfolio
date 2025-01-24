import HyperText from "@/components/ui/hyper-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Testcertif from "@/app/testcertif";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-black via-purple-800 to-purple-900">
        <div className="mb-8">
          <Image
            src="/images/icon-fed-removebg.png"
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
          I&#39;m Fednail <span className="font-semibold">Leclercq</span>,
          <p className="mt-2 text-gray-300">
            A frontend developer, I design high-performance, intuitive web applications using Next.js.
            After hours, I build my own projects .
          </p>

        </div>
        <Button asChild variant="outline" className="mt-6 text-muted-foreground" size="lg">
          <Link href="/about" className="flex items-center gap-2">
            <Image
              src="/images/moi.png"
              alt="Fednail Leclercq"
              width={50}
              height={50}
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
            className="text-3xl font-bold mb-12 text-center"
            text="Featured Projects"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Project Nebula",
                description: "A cutting-edge web application showcasing advanced React patterns and state management techniques.",
                image: "/images/project-Nebula.jpeg",
                link: "#"
              },
              {
                title: "CSS Constellation",
                description: "An innovative CSS framework that pushes the boundaries of modern web design and layout capabilities.",
                image: "/images/css-constellation-scorpio.jpeg",
                link: "#"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-purple-800 ">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="rounded-lg object-cover w-full h-48"
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
            <Button asChild className="mt-6 text-center items-center justify-center bg-gray-900 text-gray-300 gap-2">
              <Link href="/fun-projects">Fun projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section
        className="relative flex flex-col items-center justify-center bg-gradient-to-b from-purple via-black-800 to-purple-900 py-20">
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
              <Link href={"https://github.com/lfednail?tab=repositories"} className="flex items-center gap-2">
                <button
                  className="rounded-lg bg-purple-800 px-4 py-2 text-sm font-medium text-black transition hover:bg-purple-400 ">
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
  )
}

