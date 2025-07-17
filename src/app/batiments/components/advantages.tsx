import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export const Advantages = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col mb-12 items-center text-center">
          <Badge className="bg-green-800">Engagés pour la justice climatique</Badge>
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold my-4">
            Notre mission et impact
          </h2>
          <p className="text-lg w-full md:max-w-2xl">
            OYA simplifie la rénovation énergétique en vous guidant à chaque
            étape, de l'audit initial à la gestion des aides financières.
          </p>
        </div>
      </div>

    </div>
  )
}