import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Leaf, Building, Euro, TrendingUp, Users, Globe  } from "lucide-react"

export function OurImpact() {
  const greenBondFeatures = [
    {
      icon: <Euro className="h-5 w-5" />,
      title: "Utilisation des fonds",
      description: "Fonds utilisés exclusivement pour des projets verts éligibles"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Évaluation et sélection",
      description: "Projets évalués selon des critères environnementaux rigoureux"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Gestion des fonds",
      description: "Processus établis pour l'allocation appropriée des ressources"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Rapport et transparence",
      description: "Rapports réguliers sur l'utilisation et l'impact environnemental"
    }
  ]

  const greenProjects = [
    { name: "Énergies renouvelables (solaire, éolien)"},
    { name: "Amélioration de l'efficacité énergétique des bâtiments" },
    { name: "Gestion durable de l'eau" },
    { name: "Transports durables (infrastructures pour vélos, transports en commun, verdissement des véhicules thermiques)" },
    { name: "Protection de la biodiversité et des espaces verts" }
  ]

  const ceeAdvantages = [
    "Financement des travaux par les fournisseurs d'énergie",
    "Large éventail de travaux éligibles (isolation, chauffage, etc.)",
    "Simplicité d'accès et démarches intégrées",
    "Impact environnemental positif"
  ]

  const primeRenovAdvantages = [
    "Financement jusqu'à 90% des travaux (max 70 000€)",
    "Bonification pour les ménages modestes",
    "Cumul possible avec d'autres aides (CEE)",
    "Amélioration d'au moins 2 étiquettes énergétiques"
  ]

  const greenAdvantages =[
    "Accès à des financements à conditions favorables: Elles permettent aux villes de lever des fonds à des conditions souvent favorables.",
    "Attraction d'investisseurs: Les investisseurs sont de plus en plus intéressés par des placements responsables et durables.",
    "Amélioration de l'image: Les villes qui émettent des obligations vertes renforcent leur image en tant que leaders en matière de durabilité."
  ]

  return (
    <div className="min-h-screen ">
    

      <div className="w-full md:max-w-11/12 mx-auto px-4 py-12">
        {/* Section Green Bonds */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 p-2 text-sm">
              <Building className="h-4 w-4 mr-2" />
              Pour les villes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Green Bonds Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Financer des projets verts dans les villes à l'aide des obligations vertes est une approche efficace et durable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 p-2 flex items-center">
                  <Leaf className="h-6 w-6 mr-2" />
                  Qu'est-ce qu'une obligation verte ?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Une obligation verte est un emprunt émis par une entreprise ou une entité publique pour lever des fonds spécifiquement destinés à financer des projets ayant un bénéfice environnemental.
                </p>
                <p className="text-gray-700 mb-4">
                  Ces projets peuvent inclure des initiatives telles que :
                </p>
                <div className="space-y-2">
                  {greenProjects.map((project, index) => (
                    <div key={index} className="flex items-center text-base text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      {project.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 p-2 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Avantages des obligations vertes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {greenAdvantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Principes des obligations vertes */}
          <Card >
            <CardHeader className="bg-green-700 text-white">
              <CardTitle className="text-2xl">Principes des obligations vertes</CardTitle>
              <CardDescription className="text-green-100">
                Les principes qui régissent les obligations vertes sont essentiels pour garantir que les fonds levés sont utilisés de manière appropriée. 
                <p>Voici les principaux éléments :</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {greenBondFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300">
                    <div className="text-green-700 mb-3 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-green-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16 bg-green-200" />

        {/* Section CEE et MaPrimeRénov' */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 p-2F bg-green-100 text-green-800 text-sm hover:bg-green-200">
              <Building className="h-4 w-4 mr-2" />
              Pour les bâtiments
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              CEE et MaPrimeRénov
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deux dispositifs complémentaires qui offrent des avantages pour la rénovation énergétique des logements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="text-2xl">Certificats d'Économie d'Énergie (CEE)</CardTitle>
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

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
    </div>
  )
}