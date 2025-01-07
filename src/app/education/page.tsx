"use client";

import {Card, CardContent} from "@/components/ui/card";
import {Award, BookOpen, Building2, Clock} from "lucide-react";
import { Briefcase, GraduationCap } from "lucide-react";

const details = [
  {
    icon: Clock,
    title: "Durée",
    description: "Formation sur 2 ans avec alternance possible",
  },
  {
    icon: BookOpen,
    title: "Programme",
    description: "Cours théoriques et travaux pratiques",
  },
  {
    icon: Building2,
    title: "Stage",
    description: "10 semaines en entreprise",
  },
  {
    icon: Award,
    title: "Diplôme",
    description: "Niveau 5 (Bac+2)",
  },
];


export default function EducationPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">

        {/* Hero Banner */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2">Présentation du BTS SIO</h1>
            <p className="text-lg mb-6">
              Découvrez les spécialités, le programme, les débouchés et les
              compétences du BTS SIO
            </p>
          </div>
          <img
            alt="Image illustrative d'un environnement éducatif avec des étudiants travaillant sur des ordinateurs"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            height={600}
            src="https://storage.googleapis.com/a1aa/image/SB4SidKbF4LXAlHcdQj9AeDoWRvgNzTSis3a6qc4IXfqd1fnA.jpg"
            width={1920}
          />
        </section>
        {/* Présentation des Spécialités */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Les Spécialités du BTS SIO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-black dark:bg-gray-800 dark:text-gray-200">
                <img
                  alt="Image illustrative de la spécialité SLAM avec des étudiants codant sur des ordinateurs"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  height={300}
                  src="https://storage.googleapis.com/a1aa/image/ashyUvV9yRLcL1eMKzWxAal0nnCgyTCq658JrQQ51RL0u6fTA.jpg"
                  width={400}
                />
                <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-400">
                  SLAM (Solutions Logicielles et Applications Métiers)
                </h3>
                <p>
                  La spécialité SLAM forme des développeurs capables de concevoir,
                  réaliser et maintenir des solutions logicielles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-black dark:bg-gray-800 dark:text-gray-200">
                <img
                  alt="Image illustrative de la spécialité SISR avec des étudiants travaillant sur des réseaux informatiques"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  height={300}
                  src="https://storage.googleapis.com/a1aa/image/LwgEvr7RrWaxA9a3T9Enx6hUF44fLyxZkza7rfXZO6Fmd1fnA.jpg"
                  width={400}
                />
                <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-400">
                  SISR (Solutions d&apos;Infrastructure, Systèmes et Réseaux)
                </h3>
                <p>
                  La spécialité SISR forme des techniciens capables de gérer et
                  maintenir des infrastructures réseaux et systèmes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Détails du Programme */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Détails du programme
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {details.map((detail, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <detail.icon className="w-10 h-10 text-primary mx-auto mb-4"/>
                  <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Débouchés après le BTS */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Et après le BTS ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Briefcase className="w-12 h-12 text-primary mb-6"/>
                <h3 className="text-2xl font-semibold mb-4">Débouchés professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Développeur d&apos;applications</li>
                  <li>• Administrateur systèmes et réseaux</li>
                  <li>• Technicien support</li>
                  <li>• Analyste programmeur</li>
                  <li>• Technicien d&lsquo;infrastructure</li>
                </ul>
              </Card>
              <Card className="p-8">
                <GraduationCap className="w-12 h-12 text-primary mb-6"/>
                <h3 className="text-2xl font-semibold mb-4">Poursuite d&apos;études</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Licence professionnelle</li>
                  <li>• Bachelor informatique</li>
                  <li>• École d&apos;ingénieur</li>
                  <li>• Master en informatique</li>
                  <li>• Certification professionnelle</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Épreuves Section */}
        <section className="mb-12 p-7 ">
          <h2 className="text-2xl font-semibold text-center mb-8">Les épreuves du BTS SIO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Épreuve E4 */}
            <Card className="bg-muted border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-emerald-500 mb-4">
                  <Clock className="w-4 h-4"/>
                  <span className="text-sm">40min</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Épreuve E4</h3>
                <p className="text-gray-500 text-sm">
                  L&apos;épreuve se divise en deux temps : une présentation de 10 minutes du parcours
                  de professionnalisation, suivie de 30 minutes d&apos;échange avec le jury pour apprécier
                  les réalisations du dossier. Cet entretien évalue les compétences du candidat et sa
                  contribution en équipe.
                </p>
              </CardContent>
            </Card>

            {/* Épreuve E5 */}
            <Card className="bg-muted border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-emerald-500 mb-4">
                  <Clock className="w-4 h-4"/>
                  <span className="text-sm">2h10min</span>
                </div>
                <h3 className=" text-xl font-bold mb-4">Épreuve E5</h3>
                <p className="text-gray-500 text-sm">
                  L&apos;évaluation dure 40 minutes (+1h30 de préparation) et comporte deux phases :
                  d&apos;abord, 30 minutes de préparation suivies d&apos;un exposé de 20 minutes sur une expression
                  de besoins, puis une heure de préparation pour réaliser une solution,
                  validée par un entretien explicatif.
                </p>
              </CardContent>
            </Card>

            {/* Certification SIO */}
            <Card className="bg-muted border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-emerald-500 mb-4">
                  <Clock className="w-4 h-4"/>
                  <span className="text-sm">20min</span>
                </div>
                <h3 className=" text-xl font-bold mb-4">Certification SIO</h3>
                <p className="text-gray-500 text-sm">
                  L&apos;épreuve de Certification SIO consiste en un oral de 20 minutes, sans préparation,
                  où le candidat expose la démarche suivie pour acquérir une certification ou approfondies,
                  dans le but de renforcer son parcours professionnel et favoriser son insertion
                  ou évolution de carrière.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tableau de Synthèse */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-semibold text-center mb-8">Le Tableau de Synthèse</h2>
            <div className="overflow-x-auto">
              <table
                className="min-w-full bg-white rounded-lg shadow-lg text-black dark:bg-gray-800 dark:text-gray-200">
                <thead className="bg-purple-700 text-white dark:bg-purple-900">
                <tr>
                  <th className="py-2 px-4 border-b">Compétence</th>
                  <th className="py-3 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">SLAM</th>
                  <th className="py-2 px-4 border-b">SISR</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Développement d&#39;applications :
                  </td>
                  <td className="py-2 px-4 border-b">
                    Conception, réalisation et maintenance d&apos;applications
                    logicielles.
                  </td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Gestion de bases de données :
                  </td>
                  <td className="py-2 px-4 border-b">
                    Conception, gestion et optimisation des bases de données.
                  </td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Conception et maintenance de logiciels :
                  </td>
                  <td className="py-2 px-4 border-b">
                    Développement et maintenance de logiciels adaptés aux besoins
                    des utilisateurs.
                  </td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Analyse des besoins des utilisateurs :
                  </td>
                  <td className="py-2 px-4 border-b">
                    Identification et analyse des besoins des utilisateurs pour
                    proposer des solutions adaptées.
                  </td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Administration des réseaux :</td>
                  <td className="py-2 px-4 border-b">
                    Gestion et maintenance des réseaux informatiques.
                  </td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Gestion des systèmes d&apos;exploitation :
                  </td>
                  <td className="py-2 px-4 border-b">
                    Installation, configuration et maintenance des systèmes
                    d&apos;exploitation.
                  </td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Sécurité informatique :</td>
                  <td className="py-2 px-4 border-b">
                    Mise en place et gestion des mesures de sécurité pour protéger
                    les systèmes informatiques.
                  </td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Support et maintenance des infrastructures :
                  </td>
                  <td className="py-2 px-4 border-b">
                    Assistance technique et maintenance des infrastructures
                    informatiques.
                  </td>
                  <td className="py-2 px-4 border-b text-center">❌</td>
                  <td className="py-2 px-4 border-b text-center">✔️</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}
