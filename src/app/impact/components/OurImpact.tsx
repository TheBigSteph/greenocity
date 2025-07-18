import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Leaf,
  Building,
  Euro,
  TrendingUp,
  Recycle,
  Users,
  Globe,
} from "lucide-react";
import Image from "next/image";

export function OurImpact() {
  const greenBondFeatures = [
    {
      icon: <Euro className="h-5 w-5" />,
      title: "Utilisation des fonds",
      description:
        "Fonds utilisés exclusivement pour des projets verts éligibles",
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Évaluation et sélection",
      description:
        "Projets évalués selon des critères environnementaux rigoureux",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Gestion des fonds",
      description:
        "Processus établis pour l'allocation appropriée des ressources",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Rapport et transparence",
      description:
        "Rapports réguliers sur l'utilisation et l'impact environnemental",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Rapport et transparence",
      description:
        "Rapports réguliers sur l'utilisation et l'impact environnemental",
    },
  ];

  const greenProjects = [
    { name: "Énergies renouvelables (solaire, éolien)" },
    { name: "Amélioration de l'efficacité énergétique des bâtiments" },
    { name: "Gestion durable de l'eau" },
    {
      name: "Transports durables (infrastructures pour vélos, transports en commun, verdissement des véhicules thermiques)",
    },
    { name: "Protection de la biodiversité et des espaces verts" },
  ];

  const ceeAdvantages = [
    "Financement des travaux par les fournisseurs d'énergie",
    "Large éventail de travaux éligibles (isolation, chauffage, etc.)",
    "Simplicité d'accès et démarches intégrées",
    "Impact environnemental positif",
  ];

  const primeRenovAdvantages = [
    "Financement jusqu'à 90% des travaux (max 70 000€)",
    "Bonification pour les ménages modestes",
    "Cumul possible avec d'autres aides (CEE)",
    "Amélioration d'au moins 2 étiquettes énergétiques",
  ];

  const greenAdvantages = [
    "Accès à des financements à conditions favorables: / Elles permettent aux villes de lever des fonds à des conditions souvent favorables.",
    "Attraction d'investisseurs: / Les investisseurs sont de plus en plus intéressés par des placements responsables et durables.",
    "Amélioration de l'image: / Les villes qui émettent des obligations vertes renforcent leur image en tant que leaders en matière de durabilité.",
  ];

  return (
    // <div className="min-h-screen ">
    <div className="relative py-12">
      {/* Section Green Bonds */}
      <div className=" mb-20 w-full md:max-w-11/12 mx-auto px-4 ">
        <div className="text-center mb-12">
          <Badge className="bg-green-800 ">
            {/* <Building className="h-4 w-4 mr-2" /> */}
            Pour les villes
          </Badge>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800  my-4">
            Green Bonds Principales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Financer des projets verts dans les villes à l'aide des obligations
            vertes est une approche efficace et durable.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className= "bg-[url('/images/feuilles.png')] bg-no-repeat bg-left bg-contain  ">
              <p className="flex text-green-600 font-bold mb-6">
                <Leaf className="h-6 w-6 mr-2" />
                Qu'est-ce qu'une obligation verte ?
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Une obligation verte est un emprunt émis par une entreprise ou
                une entité publique pour lever des fonds spécifiquement destinés
                à financer des projets ayant un bénéfice environnemental.
              </p>

            </div>
            <Image
              src="/images/cover.avif"
              alt="Green Bond"
              width={600}
              height={600}
              className="rounded-tl-3xl rounded-br-3xl shadow-md"
            />
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-lg mb-4">
              Ces projets peuvent inclure des initiatives telles que :
            </p>
            <div className="space-y-2">
              {greenProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center text-lg text-gray-700"
                >
                  <CheckCircle className="h-8 w-8 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  {project.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
        <div className="relative w-full md:max-w-11/12 mx-auto px-4  ">
          <div className="mb-12">
            <p className="flex text-green-600 font-bold mb-6">
              <TrendingUp className="h-6 w-6 mr-2" />
              Avantages des obligations vertes
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {greenAdvantages.map((advantage, index) => (
                <Card key={index} className="flex text-center shadow-lg bg-white/30">
                  <CardContent className="">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      {advantage.split("/").map((p, i) => (
                        <p
                          key={i}
                          className={`${i === 0 ? " font-semibold mb-2" : ""}`}
                        >
                          {p}
                        </p>
                      ))}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Principes des obligations vertes */}
          <div>
            <div className="">
              <p className="flex text-green-600 font-bold mb-6">
                <Recycle className="h-6 w-6 mr-2" />
                Principes des obligations vertes
              </p>
              <div className="w-full md:max-w-xl">
                Les principes qui régissent les obligations vertes sont
                essentiels pour garantir que les fonds levés sont utilisés de
                manière appropriée.
                <p>Voici les principaux éléments :</p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
              <div className="relative">
                {/* Version Desktop */}
                <div className="hidden lg:flex items-center justify-center">
                  {/* Cartes de gauche */}
                  <div className="flex-1 max-w-sm">
                    <div className="space-y-6 pr-8">
                      {greenBondFeatures.slice(0, 3).map((value, index) => (
                        <div
                          key={index}
                          className="bg-white/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-center text-green-600 mb-4">
                            {value.icon}
                            <h3 className="text-lg font-bold text-green-600 ml-3">
                              {value.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image centrée */}
                  <div className="flex-shrink-0 mx-6">
                    <div className="relative">
                      <img
                        src="/images/cover.jpg"
                        alt="Notre mission"
                        className="w-90 h-80 object-cover rounded-tl-3xl rounded-br-3xl shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Cartes de droite */}
                  <div className="flex-1 max-w-sm">
                    <div className="space-y-6 pl-8">
                      {greenBondFeatures.slice(3, 5).map((value, index) => (
                        <div
                          key={index + 2}
                          className="bg-white/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-center text-green-600 mb-4">
                            {value.icon}
                            <h3 className="text-lg font-bold text-green-600 ml-3">
                              {value.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Version Mobile/Tablet - Layout original */}
                <div className="lg:hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src="/images/cover.jpg"
                        alt="Notre mission"
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {greenBondFeatures.map((value, index) => (
                        <div
                          key={index}
                          className="bg-white/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-center text-green-600 mb-4">
                            {value.icon}
                            <h3 className="text-lg font-bold text-green-600 ml-3">
                              {value.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section CEE et MaPrimeRénov' */}
      <div className="my-20 w-full md:max-w-11/12 mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className=" bg-green-800 ">
            {/* <Building className="h-4 w-4 mr-2" /> */}
            Pour les bâtiments
          </Badge>
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 my-4">
            CEE et MaPrimeRénov'
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deux dispositifs complémentaires qui offrent des avantages pour la
            rénovation énergétique des logements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/30 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardTitle className="text-2xl">
                Certificats d'Économie d'Énergie (CEE)
              </CardTitle>
              <CardDescription className="text-green-100">
                Avantages des CEE pour vos travaux de rénovation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {ceeAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/30 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardTitle className="text-2xl">MaPrimeRénov'</CardTitle>
              <CardDescription className="text-green-100">
                Aide financière substantielle pour vos projets
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {primeRenovAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    // </div>
  );
}
