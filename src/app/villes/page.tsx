import { Leaf, Target, Globe, Users, BarChart2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function VillesPage() {
  const cityProjects = [
    {
      title: "Performance énergétique",
      description: "Rénovation des bâtiments publics pour réduire la consommation d'énergie",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      image: "/images/city-energy.jpg"
    },
    {
      title: "Protection des terres",
      description: "Préservation des espaces naturels et augmentation de la biodiversité",
      icon: <Globe className="w-6 h-6 text-green-600" />,
      image: "/images/city-land.jpg"
    },
    {
      title: "Énergie renouvelable",
      description: "Installation de panneaux solaires et autres sources d'énergie propre",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      image: "/images/city-solar.jpg"
    },
    {
      title: "Désartificialisation",
      description: "Création d'îlots de fraîcheur et réduction des surfaces imperméables",
      icon: <Target className="w-6 h-6 text-green-600" />,
      image: "/images/city-greening.jpg"
    }
  ];

  const successStories = [
    {
      city: "Ville SA",
      challenge: "Budget limité pour la transition écologique sans augmentation d'impôt",
      solution: "Financement par Green Bonds de 4 projets verts",
      impact: "Réduction de 30% des émissions carbone du patrimoine municipal"
    },
    {
      city: "Communauté d'Agglomération B",
      challenge: "Manque de compétences techniques pour les projets verts",
      solution: "Assistance à maîtrise d'ouvrage complète par GreenOCity",
      impact: "5 projets lancés en 18 mois avec création de 50 emplois locaux"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Solutions pour les villes"
        imageUrl="/images/cover.jpg"
        subtitle="Greenocity accompagne les collectivités dans le financement et la mise en œuvre de leurs projets verts de réduction d’empreintes écologiques"
      />
      {/* <div className="relative h-96">
        <Image
          src="/images/city-hero.jpg"
          alt="Ville durable"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions pour les villes</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              GreenOCity accompagne les collectivités dans le financement de leur transition écologique
            </p>
          </div>
        </div>
      </div> */}

      {/* Challenges Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Les défis des villes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pression citoyenne</h3>
            <p className="text-gray-600">
              Les habitants demandent des actions concrètes pour améliorer la qualité de l'air et le cadre de vie.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Contraintes budgétaires</h3>
            <p className="text-gray-600">
              Budgets limités et manque de ressources pour financer des projets ambitieux de transition écologique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Engagements climatiques</h3>
            <p className="text-gray-600">
              Obligation de respecter les accords climatiques avec des objectifs précis de réduction des GES.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos solutions pour les villes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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

      {/* Success Stories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos réalisations</h2>
        
        <div className="space-y-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-700 mb-4">{story.city}</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Défi initial</h4>
                  <p className="text-gray-600">{story.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Solution GreenOCity</h4>
                  <p className="text-gray-600">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Impact mesuré</h4>
                  <p className="text-gray-600">{story.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre ville ?</h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de vos projets et découvrir comment GreenOCity peut vous accompagner.
          </p>
          <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg">
            Prendre contact
          </Button>
        </div>
      </section>
    </div>
  );
}
