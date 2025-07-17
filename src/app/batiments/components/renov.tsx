import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const Renov = () => {
  return (
    <div
      className="relative  bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/feuilles.png')" }}
    >
      <div className=" max-w-6xl mx-auto px-4 my-12">
        <div className="mb-10">
          <Badge className="bg-green-800">Les enjeux</Badge>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 my-4">
            Les enjeux de la rénovation énergétique
          </h2>
          <p className="text-lg text-gray-600 w-full md:max-w-2xl">
            La France fait face à un défi colossal : rénover 23,8 millions de
            logements d'ici 2050 pour atteindre ses objectifs de neutralité
            carbone. Cette transformation massive répond à une double urgence :
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex mb-6">
              <div className="bg-green-600 h-24 w-2 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-3">
                  Précarité énergétique
                </h3>
                <p className="text-gray-600">
                  Plus de 12 millions de Français souffrent du froid dans leur
                  logement ou consacrent une part excessive de leurs revenus au
                  chauffage.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-green-600 h-24 w-1.5 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-3">
                  Urgence climatique
                </h3>
                <p className="text-gray-600">
                  Le secteur résidentiel représente près de 30% des émissions de
                  gaz à effet de serre en France.
                </p>
              </div>
            </div>
          </div>

          <div className=" relative w-full h-64 md:h-96  rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg">
            <Image src="/images/renov.png" alt="Rénovation énergétique" fill />
          </div>
        </div>
      </div>
    </div>
  );
};
