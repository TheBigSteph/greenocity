import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const fonctions = [
  {
    title: "plateforme digitale innovante",
    description:
      "Une interface intuitive qui centralise toutes les étapes de votre projet de rénovation énergétique, depuis l'audit initial jusqu'au suivi post-travaux.",
  },
  {
    title: "Conformité Mon accompagnateur Rénov'",
    description:
      "Notre service respecte les exigences du dispositif national tout en offrant une expérience utilisateur fluide et simplifiée.",
  },
  {
    title: "Service indépendant et neutre",
    description:
      "Aucun conflit d'intérêt avec les artisans ou fournisseurs de matériaux : nos recommandations sont basées uniquement sur vos besoins réels.",
  },
];

const functionment = [
  {
    title: "Audit énergétique",
    description:
      "Réalisé via notre application ou par un expert certifié à votre domicile. Analyse complète de l'enveloppe thermique, des systèmes de chauffage et de ventilation.",
    image: "/images/etape1.png",
  },
  {
    title: "Scénario de travaux",
    description:
      "Élaboration de plusieurs options de rénovation adaptées à votre logement, avec estimation des coûts et des économies d'énergie potentielles.",
    image: "/images/etape2.png",
  },
  {
    title: "Suivi administratif",
    description:
      "Montage complet des dossiers d'aides financières (MaPrimeRénov', CEE, éco-PTZ) pour maximiser vos subventions.",
    image: "/images/etape3.png",
  },
  {
    title: "Sélection des artisans",
    description:
      "Mise en relation avec des professionnels certifiés RGE, analyse comparative des devis et négociation des tarifs.",
    image: "/images/etape4.png",
  },
];

export const Assistant = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-800 mb-4">Notre assistant</Badge>
              <h2 className="text-xl md:text-3xl text-gray-800 font-bold">
                OYA : L&apos;Assistant performance énergétique du logement
              </h2>
              <p className="mt-6 text-lg ">
                Nous œuvrons pour garantir à chacun l'accès à un chauffage, une
                climatisation, une électricité et une eau durablement
                abordables, dans leurs foyers ou leurs communautés. Notre
                mission est une assistance au financement et à la réalisation de
                travaux fiables de performance énergétique, contribuant à des
                logements sains, sûrs et accessibles pour tous.
              </p>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg">
              <Image src="/images/image1.png" alt="Assistant OYA" fill />
            </div>
          </div>
        </div>
      </div>

      {/* definition section */}
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="">
          <Badge className="bg-green-800">OYA, c'est quoi?</Badge>
          <h2 className="text-xl md:text-3xl text-gray-800 font-bold my-4">
            Une définition
          </h2>
          <p className="text-lg text-gray-600 w-full md:max-w-2xl">
            OYA vous accompagne de manière personnalisée en fonction de votre
            situation, de vos objectifs et de votre budget, en privilégiant
            toujours l'efficacité énergétique et le confort de votre habitat.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {fonctions.map((fonction, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center bg-white/30 shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-2">
                  {fonction.title}
                </h3>
                <p className="text-gray-600">{fonction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fontionnenent OYA */}

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col mb-12 items-center text-center">
            <Badge className="bg-green-800">Comment fonctionne OYA?</Badge>
            <h2 className="text-2xl md:text-3xl text-gray-800 font-bold my-4">
              Fonctionnement d'OYA
            </h2>
            <p className="text-lg w-full md:max-w-2xl">
              Notre plateforme vous guide à chaque étape, simplifiant un
              processus souvent perçu comme complexe et intimidant. Vous gardez
              le contrôle tout en bénéficiant d'une expertise professionnelle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 justify-center">
            {functionment.map((step, index) => (
              <Card key={index} className=" bg-white/30 shadow-lg">
                <CardContent>
                  <div className="relative w-full h-8 md:h-10 md:w-64 overflow-hidden mb-6 ">
                    <Image src={step.image} alt="Assistant OYA" fill />
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 p-2 rounded-full mr-4 text-white">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-green-600 ml-3">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
