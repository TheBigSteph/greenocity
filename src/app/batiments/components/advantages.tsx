import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Droplet, Sun } from "lucide-react";
import Image from "next/image";

const accompagnement = [
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour vous guider à chaque étape du projet.",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour vous guider à chaque étape du projet.",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour vous guider à chaque étape du projet.",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour vous guider à chaque étape du projet.",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour vous guider à chaque étape du projet.",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié pour vous guider à chaque étape du projet.",
    icon: <Sun className="h-6 w-6" />,
  },
];

export const Advantages = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col mb-12 ">
            <Badge className="bg-green-800">
              Engagés pour la justice climatique
            </Badge>
            <h2 className="text-2xl md:text-3xl text-gray-800 font-bold my-4">
              Notre mission et impact
            </h2>
            {/* <p className="text-lg w-full md:max-w-2xl">
            OYA simplifie la rénovation énergétique en vous guidant à chaque
            étape, de l'audit initial à la gestion des aides financières.
          </p> */}
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-600">
                Mission
              </h3>
              <p className=" text-lg">
                OYA se focalise à démocratiser l'accès à l'énergie propre. Nous
                travaillons avec des partenaires à travers le pays pour
                accélérer la croissance de nos services innovants et créer un
                impact significatif dans les communautés sous-desservies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-600">
                Impact
              </h3>
              <p className=" text-lg">
                OYA combine des solutions techniques avec une justice sociale,
                en reconnaissant que la transition énergétique doit bénéficier à
                tous, particulièrement aux populations historiquement
                marginalisées.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col mb-12 items-center text-center">
          <Badge className="bg-green-800">Un suivi approprié</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Un accompagnement de A à Z
          </h2>
          <p className="text-lg w-full md:max-w-2xl">
            OYA reste disponible pendant toute la durée du projet et au-delà,
            avec un interlocuteur unique et engagé pour une expérience sereine
            et efficace.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-12 justify-center items-center ">
          {/* Version Desktop */}
          <div className="hidden lg:flex items-center md:flex sm:flex ">
            {/* Cartes de gauche */}
            <div className="flex-1 max-w-sm">
              <div className="space-y-1 ">
                {accompagnement.slice(0, 3).map((value, index) => (
                  <div
                    key={index}
                    className=" p-4  hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center text-green-600 mb-4">
                      {value.icon}
                      <h3 className="text-lg font-bold text-green-600 ml-3">
                        {value.title}
                      </h3>
                      <div className="w-24 h-1 bg-green-800"></div>
                    </div>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image centrée */}
            <div className="flex-shrink-0 mx-0">
              <div className="h-96 w-2 bg-green-800" />
            </div>

            {/* Cartes de droite */}
            <div className="flex-1 max-w-sm">
              <div className="space-y-1 ">
                {accompagnement.slice(3, 5).map((value, index) => (
                  <div
                    key={index + 2}
                    className=" p-6  hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center text-green-600 mb-4 ">
                      <div className="w-24 h-1 bg-green-800"></div>
                      {value.icon}
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

          {/* Version Mobile/Tablet - Layout original */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1  gap-8">
              <div>
                <img
                  src="/images/Image2.png"
                  alt="Notre mission"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="grid grid-cols-1  sm:hidden gap-6">
                {accompagnement.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/30 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center text-green-600 mb-4">
                      {value.icon}
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

          <div className="hidden lg:block relative w-full h-96 md:w-96 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg ml-32">
            <Image src="/images/Image2.png" alt="Notre mission" fill />
          </div>
        </div>
      </div>
    </div>
  );
};
