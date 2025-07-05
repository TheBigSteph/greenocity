import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { BarChart2, Globe, Handshake, Leaf, Target, Users } from "lucide-react";
import Image from "next/image";
import StorySection from "./StorySection";

type PropsCard = {
  title: string;
  image: string;
  description: string;
  icon?: React.ReactNode;
};

export const OurVision = () => {
  const aboutList = [
    {
      title: "Notre Vision",
      description:
        "Développer un monde responsable et durable qui réconcilie écologie et inclusion, mobilité et lien social.",
      icon: <Globe className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Notre Ambition",
      description:
        "Catalyser des solutions audacieuses et investissables qui libèrent plus de capitaux pour une population et une planète mesurablement plus saines.",
      icon: <Target className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Notre Action",
      description:
        "Créer un véhicule d'investissements dans les projets verts des villes pour compenser localement l'empreinte carbone résiduelle des organisations.",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
  ];

  const values = [
    {
      title: "Impact Local",
      description:
        "Nous privilégions les projets à fort impact environnemental et social pour les communautés locales.",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Transparence",
      description:
        "Une approche vérifiable et mesurable de la compensation carbone pour éviter le greenwashing.",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Innovation",
      description:
        "Des solutions financières innovantes pour répondre aux défis de la transition écologique.",
      icon: <Handshake className="w-6 h-6 text-green-600" />,
    },
  ];

  const teamStats = [
    { number: "10+", label: "Projets verts financés" },
    { number: "5M€", label: "De fonds mobilisés" },
    { number: "15", label: "Villes accompagnées" },
    { number: "100%", label: "Engagement écologique" },
  ];

  const SolutionCard = ({ title, image, description, icon }: PropsCard) => (
    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="flex items-center mb-3">
            {icon && <div className="mr-3">{icon}</div>}
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="A Propos de GreenoCity"
        imageUrl="/images/cover.jpg"
      />

      {/* Values Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Ce qui guide chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {teamStats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Notre raison d'être
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            GreenOCity est née d'un constat simple : les villes manquent de
            ressources pour financer leur transition écologique, tandis que les
            entreprises cherchent des solutions locales de compensation carbone
            crédibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutList.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {value.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <StorySection
        image="/images/cover.avif"
        alt="Équipe GreenOCity"
        title="Notre histoire"
        paragraphs={[
          "Fondée en 2022, GreenOCity est née de la rencontre entre experts de la finance verte et acteurs du développement urbain durable. Nous avons constaté que les villes manquaient cruellement de ressources pour financer leur transition écologique, alors même que des solutions existaient.",
          "Notre innovation ? Créer un pont entre les entreprises soumises à la DPEF (Déclaration de Performance Extra-Financière) et les projets verts locaux, grâce au mécanisme des Green Bonds.",
          "Aujourd'hui, notre équipe pluridisciplinaire travaille sans relâche pour accélérer la transition écologique des territoires, avec déjà plus de 15 villes accompagnées dans leurs projets de résilience.",
        ]}
      />

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          Notre équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Iphigénie Ngounou",
              role: "CEO & Fondatrice",
              image: "/images/team.jpg",
            },
            {
              name: "Lucas Dubois",
              role: "Directeur Financier",
              image: "/images/team.jpg",
            },
            {
              name: "Emma Lefevre",
              role: "Responsable Projets",
              image: "/images/team.jpg",
            },
            {
              name: "Paul Moreau",
              role: "Expert Carbone",
              image: "/images/team.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-100"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-green-700 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Prêt à transformer votre territoire ?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Que vous soyez une collectivité, une entreprise ou un investisseur,
            découvrez comment GreenOCity peut vous accompagner dans vos projets
            verts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Contactez-nous
            </Button>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Voir nos projets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
