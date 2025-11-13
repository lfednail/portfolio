'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
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

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawPixelArt = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Couleur noire en clair, blanche en sombre (via CSS variable)
    ctx.fillStyle = 'var(--color-pixel)';
    ctx.font = 'bold 60px PixelFont';
    ctx.textAlign = 'center';
    ctx.fillText('ENGINEER', width / 2, height / 2 + 10);

    // Bulles aux extrémités
    ctx.beginPath();
    ctx.arc(width / 2 - 200, height / 2 + 10, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width / 2 + 200, height / 2 + 10, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    drawPixelArt();
    window.addEventListener('resize', drawPixelArt);
    return () => window.removeEventListener('resize', drawPixelArt);
  }, []);

  return (
      <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-16 md:p-24 bg-background text-foreground">

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-grow w-full max-w-7xl mx-auto">
          <div className="relative w-full text-center">
            {/* Titre principal */}
            <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-black leading-none mb-6">
              Software —
            </h1>

            {/* Canvas pour le mot "ENGINEER" */}
            <div className="relative mt-6">
              <canvas
                  ref={canvasRef}
                  width={800}
                  height={150}
                  className="mx-auto"
                  style={{imageRendering: 'pixelated', color: 'emarald'}}
              />
              {/* Point accent (vert émeraude) */}
              <div className="absolute right-0 top-1/2 transform translate-x-4 w-4 h-4 rounded-full bg-emerald-600"/>
            </div>

            <div className="mt-10 text-center space-x-6">
              <p className="text-xs uppercase tracking-wider opacity-70">
                [CURRENTLY IN FRANCE]
              </p>
            </div>
          </div>

          <div className="my-40"></div>

          {/* Featured Projects */}
          <section className="py-16 w-full px-6">
            <div className="container mx-auto ">
              <HyperText
                  className="text-4xl font-bold mb-12 text-center text-emerald-600"
                  text="Featured Projects"
              />
              <div className="grid md:grid-cols-2 gap-12">
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
                    <Card
                        key={index}
                        className="bg-card border-border hover:shadow-xl transition-all duration-300 p-6"
                    >
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-card-foreground">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">
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
                      <CardFooter className="pt-6">
                        <Button asChild variant="outline"
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                          <Link href={project.link}>View Project</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>

              <div className="flex justify-center mt-16">
                <Button asChild variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                  <Link href="/fun-projects">Fun projects</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* GitHub Section */}
          <section className="w-full py-24">
            <div className="max-w-4xl mx-auto px-6">
              <div className="rounded-xl bg-card border border-border p-8 shadow-sm">
                <HyperText
                    className="text-3xl font-semibold text-card-foreground"
                    text="Take a look at my GitHub Repositories"
                />
                <p className="mt-4 text-muted-foreground">
                  Here you can find my GitHub and see my different projects.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                      href="https://github.com/lfednail?tab=repositories"
                      className="flex items-center gap-4"
                  >
                    <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                      Let&#39;s go
                    </Button>
                    <code className="rounded-lg bg-muted px-6 py-3 text-sm font-mono text-muted-foreground">
                      github.com/lfednail
                    </code>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}