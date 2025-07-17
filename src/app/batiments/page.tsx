import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Droplet, Home, Sun } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Assistant } from "./components/assistant";
import { Renov } from "./components/renov";
import { Advantages } from "./components/advantages";

export default function BatimentsPage() {
  const solutions = [
    {
      title: "Rénovation énergétique",
      description:
        "Amélioration de la performance énergétique des bâtiments existants",
      icon: <Home className="w-6 h-6 text-green-600" />,
      benefits: [
        "Réduction jusqu'à 40% des consommations",
        "Amélioration du confort des occupants",
        "Valorisation du patrimoine",
        "Verdissements des véhicules thermiques"
      ],
    },
    {
      title: "Gestion de l'eau",
      description:
        "Systèmes de récupération et optimisation de la consommation d'eau",
      icon: <Droplet className="w-6 h-6 text-green-600" />,
      benefits: [
        "Réduction de la consommation d'eau potable",
        "Gestion des eaux pluviales",
        "Préservation des ressources",
        "gestion de la biodiversité",
      ],
    },
    {
      title: "Énergies renouvelables",
      description:
        "Installation de solutions de production d'énergie décarbonée",
      icon: <Sun className="w-6 h-6 text-green-600" />,
      benefits: [
        "Autonomie énergétique partielle",
        "Réduction des émissions GES",
        "Stabilité des coûts énergétiques",
        "Traitement durable des terres et des déchets"
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Résidence sociale à Ville SA",
      challenge: "Bâtiment énergivore avec des problèmes de qualité d'air",
      solution:
        "Rénovation complète avec isolation, ventilation double flux et panneaux solaires",
      results:
        "50% d'économies d'énergie et amélioration de la santé des résidents",
    },
    {
      title: "Groupe scolaire à Agglomération B",
      challenge: "Surconsommation énergétique et inconfort thermique",
      solution:
        "Audit énergétique puis travaux ciblés avec contrat de performance",
      results:
        "35% de réduction de la facture énergétique et meilleur confort pédagogique",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection
        title="Verdir ma ville"
        imageUrl="/images/cover.jpg"
        subtitle="Là où la Nature reprend ses droits, la Ville respire"
      />

      {/* Introduction */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          La ville respire. Agissons vite !
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Imaginez : des villes où la nature s'épanouit, où l'air est pur, où la
          qualité de vie est améliorée. C'est la vision de Greenocity. Mais
          cette vision ne deviendra réalité que si nous agissons ensemble.
          Chaque arbre planté, chaque espace vert créé, chaque initiative
          écologique est un pas vers un avenir plus vert, plus sain, plus
          durable.
        </p>
        <p className="text-xl text-gray-600 mb-8">
          Rejoignez le mouvement Greenocity. Soyez le changement que vous voulez
          voir dans le monde. Ensemble, rendons nos villes plus vivantes, plus
          respirable, plus vertes.{" "}
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
      </section>

      <Assistant />
      {/* Renovation Section */}
      <Renov />

      {/* Solutions Section */}
      <section className="py-16 bg-fixed bg-[url('/images/fond.png')] bg-no-repeat bg-center bg-contain">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-green-800">Solutions</Badge>
            <h2 className="text-2xl md:text-3xl font-bold trext-gray-800 my-4">
              Nos solutions bâtiments
            </h2>

            <p className="text-xl text-gray-600 ">
              Nos solutions techniques pour réduire l’empreinte écologiques :
              Développer localement des offres de compensation carbones via des
              projets verts permettant d’éviter, de réduire ou de de stocker les
              émissions carbone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className=" hover:shadow-md transition-shadow">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl text-green-600 font-bold">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>

                  <h4 className="font-bold  mb-2">Bénéfices :</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Advantages />

      {/* Financing Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">Financement innovant</h2>
              <p className="text-gray-600 mb-4">
                GreenOCity propose des solutions de financement adaptées aux
                projets de rénovation et construction durable :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    1
                  </span>
                  <span>Green Bonds pour collectivités</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    2
                  </span>
                  <span>Contrats de performance énergétique</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    3
                  </span>
                  <span>Mobilisation de fonds carbone locaux</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700">
                En savoir plus sur le financement
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/financing-building.jpg"
                alt="Financement bâtiment"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Études de cas</h2>

        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {caseStudy.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Défi initial</h4>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Solution GreenOCity</h4>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Résultats</h4>
                  <p className="text-gray-600">{caseStudy.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Un projet pour votre patrimoine bâti ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts vous accompagnent de l'audit à la réalisation des
            travaux avec des solutions de financement innovantes.
          </p>
          <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg">
            Demander un audit
          </Button>
        </div>
      </section> */}
    </div>
  );
}
