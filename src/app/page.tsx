"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Gestion du DPI pour un rendu net sur écrans haute densité
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    const pixelColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-pixel")
        .trim() || "#10b981"; // fallback emerald-600

    ctx.fillStyle = pixelColor;
    ctx.font = 'bold 60px "PixelFont", monospace';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("ENGINEER", width / 2, height / 2);

    // Bulles décoratives aux extrémités
    ctx.beginPath();
    ctx.arc(width / 2 - 180, height / 2, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width / 2 + 180, height / 2, 12, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    drawPixelArt();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(drawPixelArt, 150); // Debounce pour la perf
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Conception et développement d'un portfolio personnel entièrement responsive avec Next.js, mettant en avant mes projets, compétences et expériences professionnelles.",
      image: "/images/Personal-Portfolio-Website.png",
      link: "https://fednail-leclercq.vercel.app/",
    },
    {
      title: "Tableau de Synthèse E4",
      description:
        "Accédez ici à mon tableau de synthèse E4, récapitulant l'ensemble de mes compétences, projets et missions réalisés dans le cadre du BTS SIO.",
      image: "/images/tableau-de-synthese.png",
      link: "/pdf/Annexe 6-1 - Tableau de synthèse - Épreuve E4 - BTS SIO 2022.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-16 md:p-24 bg-background text-foreground">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center grow w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative w-full text-center">
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-black leading-none mb-6">
            — Software —
          </h1>

          {/* Canvas pour le mot "ENGINEER" */}
          <div className="relative mt-6 w-full max-w-200 mx-auto">
            <canvas
              ref={canvasRef}
              className="w-full h-25 sm:h-37.5 mx-auto"
              style={{ imageRendering: "pixelated" }}
              aria-label="Animation pixel art du mot ENGINEER"
              role="img"
            />
            {/* Point accent (vert émeraude) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-600 animate-pulse" />
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs uppercase tracking-wider opacity-70">
              [Currently in France]
            </p>
          </div>
        </div>

        <div className="my-20 sm:my-40" />

        {/* Featured Projects */}
        <section className="py-16 w-full px-6" aria-labelledby="projects-title">
          <div className="container mx-auto">
            <HyperText
              className="text-4xl font-bold mb-16 sm:mb-20 text-center text-emerald-600"
              text="Featured Projects"
            />

            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 grow">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="rounded-lg object-cover w-full h-48 sm:h-64"
                      loading="lazy"
                    />
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Button
                asChild
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
              >
                <Link href="/fun-projects">Fun projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* GitHub Section */}
        <section className="w-full py-24" aria-labelledby="github-title">
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
                  className="flex items-center gap-4 group"
                  aria-label="Visiter mon profil GitHub"
                >
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                    Let&#39;s go
                  </Button>
                  <code className="rounded-lg bg-muted px-6 py-3 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
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
