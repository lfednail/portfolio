import ProfileHeader from "./profile-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import React from "react";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <div className="container max-w-7xl mx-auto text-muted-foreground">
        <div className="space-y-16">
          <ProfileHeader/>
          <section>
            <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="text-2xl font-semibold">Polyclinique Vauban - ELSAN </h2>
                  <span className="text-muted-foreground">
                    JAV 2026 - FEV. 2026
                  </span>
                </div>
                <p className="text-emerald-500 mb-4">Stagiaire Développeur Fullstack</p>
                <ul className="list-none text-muted-foreground">
                  <li>
                    Conception d&#39;une application web de gestion de plannings multi-sites.
                  </li>
                  <li>
                    Développement API REST (Node.js/Express) + Frontend (Next.js, React, TailwindCSS).
                  </li>
                  <li>Modélisation BDD MySQL et sécurisation JWT/BCrypt.</li>
                  <li>Déploiement production (PM2, serveur interne).</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="text-2xl font-semibold">Mairie de Denain</h2>
                  <span className="text-muted-foreground">
                    FEV 2025 - AVR. 2025
                  </span>
                </div>
                <p className="text-emerald-500 mb-4">Stagiaire Développeur</p>
                <ul className="list-none text-muted-foreground">
                  <li>
                    Administration de l&apos;intranet municipal sous WordPress.
                  </li>
                  <li>
                    Implémentation de stratégies de sécurité (Active Directory,
                    GPO, mode kiosque).
                  </li>
                  <li>Support IT (matériel, logiciel, réseau, téléphonie).</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="text-2xl font-semibold">
                    CDN - Conseil Départemental Du Nord
                  </h2>
                  <span className="text-muted-foreground">
                    NOV 2024 - DÉC 2024
                  </span>
                </div>
                <p className="text-emerald-500 mb-4">
                  Développeur WordPress (Stage)
                </p>
                <ul className="list-none text-muted-foreground">
                  <li>Intégration de l&#39;authentification SAML sur WordPress.</li>
                  <li>Sécurisation des accès utilisateurs.</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="text-2xl font-semibold">
                    CNAM - Caisse Nationale De L&#39;assurance Maladie
                  </h2>
                  <span className="text-muted-foreground">
                    MAI 2024 - JUIN 2024
                  </span>
                </div>
                <p className="text-emerald-500 mb-4">Développeur VBA (Stage)</p>
                <ul className="list-none text-muted-foreground">
                  <li>Développement de macros Excel en VBA.</li>
                  <li>Automatisation des tâches administratives répétitives.</li>
                </ul>
              </div>
            </div>
            <Button asChild variant="link" className="mt-6 text-emerald-500">
              <Link href="/about/work-experiences">
                View all work experiences{" "}
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
          </section>
          <section>
            <h2 className="text-4xl font-bold mb-8">Studies</h2>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-semibold">
                  BTS SIO - Lycée Gaston Berger, Lille
                </h3>
              </div>
              <p className="text-gray-300">
                1ère année de BTS Services Informatiques aux Organisations
              </p>
              <p className="text-gray-300">
                2ème année de BTS Services Informatiques aux Organisations
              </p>
              <div className="mt-4 flex justify-end">
                <a
                  href="/education"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition flex items-center gap-2"
                >
                  👉 Voir plus sur l&apos;éducation
                </a>
              </div>
            </div>
            <Button asChild variant="link" className="mt-6 text-emerald-500">
              <Link href="/about/studies">
                View all studies <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
          </section>
          <section>
            <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Development</h3>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>
                    🌐 Développer la présence en ligne d&#39;une organisation
                  </li>
                  <li>📋 Travailler en mode projet</li>
                  <li>
                    💻 Développer, adapter et maintenir des solutions
                    applicatives
                  </li>
                  <li>🎯 Polyvalent</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>
                    <Image
                      src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ed-1f1f9.svg"
                      alt="Haïti"
                      className="inline h-6 w-6 mr-2"
                      width={24}
                      height={24}
                    />
                    Créole Haïtien (Langue maternelle)
                  </li>
                  <li>
                    <Image
                      src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1eb-1f1f7.svg"
                      alt="France"
                      className="inline h-6 w-6 mr-2"
                      width={24}
                      height={24}
                    />
                    Français
                  </li>
                  <li>
                    <Image
                      src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1fa-1f1f8.svg"
                      alt="États-Unis"
                      className="inline h-6 w-6 mr-2"
                      width={24}
                      height={24}
                    />
                    Anglais
                  </li>
                  <li>
                    <Image
                      src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e9-1f1ea.svg"
                      alt="Allemagne"
                      className="inline h-6 w-6 mr-2"
                      width={24}
                      height={24}
                    />
                    Allemand
                  </li>
                </ul>
              </div>
            </div>
            <Button asChild variant="link" className="mt-6 text-emerald-500">
              <Link href="/about/skills">
                View all skills <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
          </section>
          <div className="flex items-center justify-center gap-2  ">
            <Button
              asChild
              className="mt-6 text-center items-center justify-center bg-gray-900 text-gray-300 gap-2"
            >
              <Link href="/work"> 👉 View My Work</Link>
            </Button>
          </div>
          <section>
            <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/lfednail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="w-4 h-4 mr-2"/> GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/fednail-leclercq-734333250/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInLogoIcon className="w-4 h-4 mr-2"/> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:lfednail@gmail.com">
                  <Mail className="w-4 h-4 mr-2"/> Mail
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
