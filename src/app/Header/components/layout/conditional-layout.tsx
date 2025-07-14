"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import NavBar from "./navBar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function ConditionalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gestion de la soumission du formulaire
  };

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer className="flex flex-col bg-green-700 text-white">
      {/* Newsletter Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Restez informé sur la finance verte urbaine
          </h2>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-green-100">
              Abonnez-vous à notre newsletter pour recevoir nos dernières
              actualités, études de cas et opportunités d'investissement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <Input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleInputChange}
                className="flex-1 h-12 px-4 bg-white text-gray-800 placeholder:text-gray-500 border-0 rounded-full"
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleInputChange}
                className="flex-1 h-12 px-4 bg-white text-gray-800 placeholder:text-gray-500 border-0 rounded-full"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 h-12 px-4 bg-white text-gray-800 placeholder:text-gray-500 border-0 rounded-full"
                required
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-green-600 hover:bg-green-500 text-white font-medium rounded-full"
              >
                S'abonner
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-green-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex w-[320px] items-center space-x-2 bg-white py-2 px-7 rounded-br-[100px] rounded-tl-[100px]">
                <Link href="/">
                  <span className="text-5xl font-bold text-[#2AAA8A]">
                    GreenoCity
                  </span>
                </Link>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              GreenOCity connecte les projets urbains écologiques avec les
              investisseurs engagés grâce à des solutions de financement
              innovantes.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Nos solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Légal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  CGU
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic text-green-100 space-y-2">
              <p>25 rue du Maréchal Foch</p>
              <p>78000 Versailles, France</p>
              <div className="flex items-center mt-4">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:contact@greenocity.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@greenocity.fr
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a
                  href="tel:+33123456789"
                  className="hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-green-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GreenOCity. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-green-300 hover:text-white text-sm transition-colors"
            >
              Accessibilité
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-white text-sm transition-colors"
            >
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
