import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const Examples = () => {
  const examples = [
    {
      title: "Famille en précarité énergétique",
      description:
        "Les Dubois, propriétaires d'une maison mal isolée de 1970, dépensaient plus de 2500€/an en chauffage. Grâce à OYA, ils ont bénéficié d'une isolation complète et d'une pompe à chaleur, avec 90% de financement par les aides publiques. Économies annuelles : 1800€.",
      image: "/images/example1.png",
    },
    {
      title: "Propriétaire bailleur",
      description:
        "Mme Martin souhaitait rénover son appartement locatif classé F. OYA l'a accompagnée pour une rénovation globale atteignant l'étiquette B, augmentant la valeur locative de 15% tout en réduisant les charges. Investissement initial amorti en 7 ans grâce aux aides MaPrimeRénov'.",
      image: "/images/example2.png",
    },
    {
      title: "Copropriété",
      description:
        "La résidence Les Cèdres (28 logements) a réalisé une rénovation énergétique collective coordonnée par OYA : isolation par l'extérieur, remplacement des menuiseries et ventilation. Économies moyennes par appartement: 40% sur les factures énergétiques, avec un plan de financement collectif optimisé",
      image: "/images/example3.png",
    },
  ];

  const advantages = [
    {
      title: "Gain de temps",
      description:
        "Simplification des démarches administratives souvent chronophages. OYA s'occupe des formalités pendant que vous vous concentrez sur le projet.",
    },
    {
      title: "Accompagnement complet",
      description:
        "Soutien technique, financier et social adapté à votre situation personnelle, avec des solutions sur mesure pour votre logement.",
    },
    {
      title: "Optimisation financière",
      description:
        "Maximisation des aides disponibles et réduction significative du reste à charge grâce à notre expertise dans les dispositifs de financement.",
    },
    {
      title: "Sécurité et confiance",
      description:
        "Service neutre et indépendant garantissant la conformité des travaux et la qualité des prestations des artisans sélectionnés.",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col mb-12 items-center text-center">
            <Badge className="bg-green-800">Les exemples</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
              Exemples concrets d'accompagnement
            </h2>
            <p className="text-lg w-full md:max-w-2xl">
              Chaque projet bénéficie d'un accompagnement sur mesure, prenant en
              compte les spécificités du bâti, la situation financière des
              propriétaires et les objectifs de performance énergétique.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {examples.map((example, index) => (
              <Card
                key={index}
                className="bg-white/30 shadow-lg hover:shadow-md transition-shadow"
              >
                <CardContent className="space-y-4">
                  <div className="relative w-full h-48 mb-4 ">
                    <Image
                      src={example.image}
                      alt={example.title}
                      fill
                      className="object-cover rounded-lg hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardTitle className="text-lg  font-bold text-green-600 mb-2">
                    {example.title}
                  </CardTitle>
                  <p className="leading-relaxed ">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-12 ">
          <Badge className="bg-green-800">Les avantages</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Les avantages client
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Avec OYA, transformez votre projet de rénovation en une expérience
            positive, tout en contribuant à la transition écologique et en
            améliorant durablement votre qualité de vie.
          </p>
        </div>

        <div className="hidden lg:flex justify-center items-center md:flex sm:flex ">
          {/* Cartes de gauche */}
          <div className="flex-1 max-w-sm">
            <div className="space-y-3 ">
              {advantages.slice(0, 2).map((value, index) => (
                <div
                  key={index}
                  className=" p-4  hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center text-green-600 mb-4">
                    {/* {value.icon} */}
                    <h3 className="text-lg font-bold text-green-600 ">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image centrée */}
          <div className="flex-shrink-0 mx-2">
            <div className="">
              <Image
                src="/images/advantage.png"
                alt="les avantages"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Cartes de droite */}
          <div className="flex-1 max-w-sm">
            <div className="space-y-3 ">
              {advantages.slice(2, 4).map((value, index) => (
                <div
                  key={index + 2}
                  className=" p-6  hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center text-green-600 mb-4 ">
                    {/* {value.icon} */}
                    <h3 className="text-lg font-bold text-green-600 ">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Version Mobile/Tablet - Layout original */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1  gap-8">
            <div>
              <img
                src="/images/advantage.png"
                alt="Notre mission"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1  sm:hidden gap-6">
              {advantages.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/30 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center text-green-600 mb-4">
                    {/* {value.icon} */}
                    <h3 className="text-lg font-bold text-green-600 ml-3">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
