import { Leaf, Target, Globe, Users, BarChart2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VillesPage() {
  const cityProjects = [
    {
      title: "Performance énergétique",
      description:
        "Rénovation des bâtiments publics pour réduire la consommation d'énergie",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      image: "/images/solution1.jpg",
    },
    {
      title: "Protection des terres",
      description:
        "Préservation des espaces naturels et augmentation de la biodiversité",
      icon: <Globe className="w-6 h-6 text-green-600" />,
      image: "/images/solution2.jpg",
    },
    {
      title: "Énergie renouvelable",
      description:
        "Installation de panneaux solaires et autres sources d'énergie propre",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      image: "/images/solution3.jpg",
    },
    {
      title: "Désartificialisation",
      description:
        "Création d'îlots de fraîcheur et réduction des surfaces imperméables",
      icon: <Target className="w-6 h-6 text-green-600" />,
      image: "/images/solution4.jpg",
    },
  ];

  const successStories = [
    {
      city: "Ville SA",
      challenge:
        "Budget limité pour la transition écologique sans augmentation d'impôt",
      solution: "Financement par Green Bonds de 4 projets verts",
      impact: "Réduction de 30% des émissions carbone du patrimoine municipal",
    },
    {
      city: "Communauté d'Agglomération B",
      challenge: "Manque de compétences techniques pour les projets verts",
      solution: "Assistance à maîtrise d'ouvrage complète par GreenOCity",
      impact: "5 projets lancés en 18 mois avec création de 50 emplois locaux",
    },
  ];

  const Solutions = [
    {
      title: "Isolation thermique",
      desc1:
        "Isoler la toiture: Une bonne isolation du toit peut réduire significativement les pertes de chaleur.",
      desc2:
        "Isoler les murs: L'isolation des murs extérieurs ou intérieurs aide à maintenir une température confortable tout en réduisant les besoins en chauffage.",
      desc3:
        "Isoler le sol: L'isolation des sols peut également contribuer à diminuer les déperditions thermiques.",
    },
    {
      title: "Systèmes de chauffage efficaces",
      desc1:
        "Installer une chaudière hybride: Combine une chaudière à gaz avec une pompe à chaleur pour optimiser la consommation d'énergie.",
      desc2:
        "Utiliser une pompe à chaleur (PAC): Ces systèmes sont écologiques et très performants, car ils exploitent les ressources renouvelables pour le chauffage.",
      desc3:
        "Chauffage au bois: Une option durable qui peut réduire les coûts de chauffage tout en étant respectueuse de l'environnement.",
    },
    {
      title: "Amélioration des fenêtres",
      desc1:
        "Remplacer les fenêtres simples par des fenêtres à double vitrage: Cela réduit les pertes de chaleur et améliore l'efficacité énergétique.",
      desc2:
        "Installer des volets ou des stores: Ils peuvent aider à réguler la température intérieure en été comme en hiver.",
    },
    {
      title: "Équipements énergétiques",
      desc1:
        "Utiliser des appareils électroménagers économes en énergie: Choisir des appareils classés A++ ou A+++ pour réduire la consommation d'électricité.",
      desc2:
        "Installer des thermostats intelligents: Ils permettent de mieux gérer le chauffage et la climatisation en fonction des besoins réels.",
    },
    {
      title: "Énergies renouvelables",
      desc1:
        "Installer des panneaux solaires: Pour produire de l'électricité ou de l'eau chaude, réduisant ainsi la dépendance aux énergies fossiles.",
      desc2:
        "Utiliser des systèmes de récupération de chaleur: Ces systèmes récupèrent la chaleur des eaux usées ou de l'air pour préchauffer l'eau ou l'air entrant.",
    },
    {
      title: "Rénovation énergétique",
      desc1:
        "Effectuer un audit énergétique: Cela permet d'identifier les points faibles et de prioriser les travaux à réaliser.",
      desc2:
        "Profiter des aides financières: Des dispositifs comme MaPrimeRénov' ou des crédits d'impôt peuvent aider à financer les travaux d'amélioration énergétique.",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection
        title="Solutions pour les villes"
        imageUrl="/images/cover.jpg"
        subtitle="Greenocity accompagne les collectivités dans le financement et la mise en œuvre de leurs projets verts de réduction d’empreintes écologiques"
      />

      {/* Challenges Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <Badge className="bg-green-800">Y a t'il des défis ?</Badge>
        <h2 className="text-3xl font-bold text-gray-800 text-left mt-4 mb-12">
          Les défis des villes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/30 p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl text-green-600 font-bold mb-3">
              Pression citoyenne
            </h3>
            <p className="text-gray-600">
              Les habitants demandent des actions concrètes pour améliorer la
              qualité de l'air et le cadre de vie.
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl text-green-600 font-bold mb-3">
              Contraintes budgétaires
            </h3>
            <p className="text-gray-600">
              Budgets limités et manque de ressources pour financer des projets
              ambitieux de transition écologique.
            </p>
          </div>

          <div className="bg-white/30 p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl text-green-600 font-bold mb-3">
              Engagements climatiques
            </h3>
            <p className="text-gray-600">
              Obligation de respecter les accords climatiques avec des objectifs
              précis de réduction des GES.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-16 ">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>

        <div className="relative max-w-6xl mx-auto px-4">
          <Badge className="bg-green-800">Quelles sont les solutions?</Badge>
          <h2 className="text-3xl font-bold text-gray-800 text-left mt-4 mb-12">
            Nos solutions pour les villes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">{project.icon}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-green-800">Performance énergétique</Badge>
          <h2 className="text-3xl font-bold text-gray-800 my-6">
            Amélioration de la performance énergétique
          </h2>
          <p className="text-xl  max-w-2xl mx-auto ">
            Pour améliorer la performance énergétique des logements et des
            bâtiments, plusieurs solutions efficaces peuvent être mises en
            œuvre.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Solutions.map((solution, index) => (
            <Card key={index} className="bg-white/30">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-green-600">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{solution.desc1}</p>
                <p>{solution.desc2}</p>
                <p>{solution.desc3}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative ">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>

        <div className="relative py-16 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 ">
            <Badge className="bg-green-800">Qu'avons-nous déjà fait?</Badge>
            <h2 className="text-3xl font-bold text-center mt-4">
              Nos réalisations
            </h2>
          </div>

          <div className="bg-white/30 flex justify-around p-10 rounded-tl-2xl rounded-br-2xl gap-16">
            {successStories.map((story, index) => (
              <div key={index} className="grid gap-6">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  {story.city}
                </h3>
                <div>
                  <h4 className="text-black font-semibold mb-2">
                    Défi initial
                  </h4>
                  <p
                    className={` p-6 rounded-tl-2xl rounded-br-2xl  ${
                      index === 0
                        ? "bg-white text-gray-600"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {story.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Solution GreenOCity</h4>
                  <p
                    className={`p-6 rounded-tl-2xl rounded-br-2xl  ${
                      index === 0
                        ? "bg-white text-gray-600"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {story.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Impact mesuré</h4>
                  <p
                    className={`p-6 rounded-tl-2xl rounded-br-2xl  ${
                      index === 0
                        ? "bg-white text-gray-600"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {story.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre ville ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de vos projets et découvrir comment
            GreenOCity peut vous accompagner.
          </p>
          <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg">
            Prendre contact
          </Button>
        </div>
      </section>
    </div>
  );
}
