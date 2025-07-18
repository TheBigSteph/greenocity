"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Play,
  Target,
  TrendingUp,
  Users,
  Leaf,
  Building,
  Globe,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full bg-gray-100">
      <Hero />
      <MissionSection />
      <ServicesSection />
      <SolutionsSection />
      <Methodology />
      <News />
      <Benefits />
      {/* <ContactSection /> */}
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-[270px] md:h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/cover_1.jpg" // Remplacez par une image de ville verte
          alt="Ville durable"
          fill
          className="object-cover rounded-br-[200px] md:rounded-br-[200px] md:rounded-bl-[200px] h-screen"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30 rounded-br-[200px] md:rounded-br-[200px] md:rounded-bl-[300px]" />

      <div className="relative z-10 grid md:grid-cols-1 px-6 items-center justify-center h-full text-center md:px-24">
        <div className="mt-16 md:mt-32">
          <h1 className="text-3xl md:text-5xl/14 font-bold md:w-[750px] lg:w-[850px] md:mx-auto text-white mb-6">
            Financez la transition écologique de votre ville avec GreenOCity
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6 md:w-[750px] lg:w-[850px] md:mx-auto">
            Connectons les projets urbains à fort impact écologique avec les
            investisseurs engagés, grâce à des Green Bonds accessibles et
            responsables.
          </p>
          <Button size="large" className="bg-[#2AAA8A] rounded-full uppercase">
            Découvrir notre solution
          </Button>
        </div>
      </div>
    </div>
  );
}

function MissionSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="bg-green-800">Notre mission</Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
          Réconcilier finance et écologie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-green-50 rounded-lg">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-600">
              Développer un monde responsable qui réconcilie écologie et
              inclusion, mobilité et lien social.
            </p>
          </div>

          <div className="p-6 bg-white/30 rounded-lg shadow-lg">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ambition</h3>
            <p className="text-gray-600">
              Catalyser des solutions audacieuses pour libérer des capitaux vers
              une planète plus saine.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Action</h3>
            <p className="text-gray-600">
              Créer un véhicule d'investissement pour les projets verts urbains
              et compenser localement l'empreinte carbone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    id: "consulting",
    icon: Users,
    title: "Conseil en Green Bonds",
    description:
      "Nous accompagnons les villes dans la structuration et l'émission d'obligations vertes pour financer leurs projets écologiques.",
    color: "text-green-600",
  },
  {
    id: "projects",
    icon: Leaf,
    title: "Développement de Projets Verts",
    description:
      "Identification et qualification de projets urbains à fort impact environnemental et social.",
    color: "text-green-600",
  },
  {
    id: "compensation",
    icon: Building,
    title: "Compensation Carbone Locale",
    description:
      "Mise en relation des entreprises avec des projets locaux de compensation carbone pour éviter le greenwashing.",
    color: "text-green-600",
  },
];

function ServicesSection() {
  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="bg-green-800">Pour une ville plus verte</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Nos services
          </h2>
          <p className="text-lg text-gray-600">
            GreenOCity propose une approche innovante pour financer la
            transition écologique des villes grâce aux mécanismes de finance
            verte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                className="bg-white/30 group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 "
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-10 h-10 ${service.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-green-6 00 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div
                    className={`w-12 h-1 ${service.color.replace(
                      "text-",
                      "bg-"
                    )} rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300`}
                  ></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const solutions = [
    {
      title: "Performance énergétique des bâtiments",
      image: "/images/solution1.jpg",
    },
    {
      title: "Protection durable des terres",
      image: "/images/solution2.jpg",
    },
    {
      title: "Production d'énergie renouvelable",
      image: "/images/solution3.jpg",
    },
    {
      title: "Désartificialisation des sols",
      image: "/images/solution4.jpg",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-12">
          <Badge className="bg-green-800">Pour les villes</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Nos solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            GreenOCity finance des projets verts locaux avec des co-bénéfices
            sociaux et environnementaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {solution.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Methodology() {
  const steps = [
    {
      title: "Pré-vente",
      description:
        "Roadshow auprès des investisseurs ESG locaux et internationaux",
      icon: "1",
    },
    {
      title: "Cadrage",
      description:
        "Analyse des performances énergétiques et établissement du point zéro",
      icon: "2",
    },
    {
      title: "Documentation",
      description: "Élaboration de la documentation écologique des projets",
      icon: "3",
    },
    {
      title: "Marketing",
      description: "Présentation des projets verts aux investisseurs",
      icon: "4",
    },
    {
      title: "Exécution",
      description: "Émission des Green Bonds et mobilisation des fonds",
      icon: "5",
    },
    {
      title: "Reporting",
      description: "Suivi de l'utilisation des fonds et mesure d'impact",
      icon: "6",
    },
  ];

  return (
    <div className="relative py-16 ">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-green-800">Comment fonctionne-t-on?</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Notre méthodologie en 6 étapes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une approche structurée pour garantir le succès de vos projets verts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/30">
              <CardContent>
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function News() {
  const newsItems = [
    {
      title: "GreenOCity lance une nouvelle plateforme de Green Bonds",
      description:
        "Notre nouvelle solution permet aux villes de financer plus facilement leurs projets écologiques grâce à des obligations vertes innovantes.",
      date: "15 mars 2024",
    },
    {
      title: "Partenaire avec la Ville SA pour 4 projets verts",
      description:
        "GreenOCity accompagne la Ville SA dans le financement de projets de performance énergétique et de désartificialisation des sols.",
      date: "2 février 2024",
    },
    {
      title: "Compensation carbone locale : une solution anti-greenwashing",
      description:
        "Notre approche permet aux entreprises de compenser leurs émissions localement, avec des bénéfices mesurables pour les communautés.",
      date: "10 janvier 2024",
    },
  ];

  return (
    <div className="py-16 bg-[url('/images/feuilles.png')] bg-no-repeat bg-right bg-contain">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-green-800">Les nouveautés</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Actualités GreenOCity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières initiatives et succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <Leaf className="w-12 h-12 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">{item.date}</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              <a
                href="#"
                className=" text-green-600 font-medium hover:text-green-700"
              >
                Lire la suite →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-white/30 border-green-600 text-green-600 hover:bg-green-50"
          >
            Voir toutes les actualités
          </Button>
        </div>
      </div>
    </div>
  );
}

function Benefits() {
  const benefits = [
    {
      title: "Pour les villes",
      description:
        "Financement complémentaire pour des projets verts sans augmentation d'impôts",
      icon: <Building className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Pour les entreprises",
      description:
        "Compensation carbone locale avec traçabilité et impact social mesurable",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Pour les citoyens",
      description:
        "Amélioration de la qualité de vie et de la santé environnementale",
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <div className="relative py-16 ">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-green-800/50 to-gray-100"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-green-800">Les avantages</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-4">
            Les avantages GreenOCity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une solution gagnant-gagnant pour tous les acteurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="py-16 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à transformer votre ville ?
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Contactez-nous pour discuter de vos projets verts et découvrir
            comment GreenOCity peut vous aider.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800">
          <h3 className="text-xl font-bold mb-6 text-center">Contactez-nous</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Envoyer
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="mb-4">Ou contactez-nous directement :</p>
          <p className="font-bold">Iphigénie Ngounou</p>
          <p>contact@greenocity.fr</p>
          <p>www.greenocity.fr</p>
        </div>
      </div>
    </div>
  );
}
