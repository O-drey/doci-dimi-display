import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      
      {/* Hero Section */}
      <section className="bg-uspn-lightGray py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-uspn-gray">
              Master DIMI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-uspn-gray">
              Design d'interface multimédia et internet
            </p>
            <Button className="bg-uspn-coral hover:bg-uspn-coral/90">
              En savoir plus <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">La Formation</h2>
            <p className="text-gray-600">
              Formation par la voie de l'alternance (apprentissage et professionnalisation)
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Objectifs</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Design d'interfaces innovantes</li>
                <li>Création numérique avancée</li>
                <li>Gestion de projets multimédia</li>
                <li>Développement web et mobile</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Points Forts</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Formation en alternance</li>
                <li>Projets concrets</li>
                <li>Partenariats professionnels</li>
                <li>Équipe pédagogique experte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volume Horaire Section */}
      <section className="py-20 bg-uspn-lightGray">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Volume Horaire</h2>
            <p className="text-gray-600">
              Organisation de la formation sur 2 semestres
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Rythme d'Alternance</h3>
              <ul className="space-y-3 text-gray-600">
                <li>3 jours en entreprise</li>
                <li>2 jours en formation</li>
                <li>450 heures de formation</li>
                <li>35 heures par semaine en entreprise</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Répartition</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Cours magistraux : 150h</li>
                <li>Travaux dirigés : 150h</li>
                <li>Projets tutorés : 100h</li>
                <li>Ateliers pratiques : 50h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cours Section */}
      <section className="py-20 bg-uspn-lightGray">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Programme Détaillé</h2>
            <p className="text-gray-600">
              Un programme complet pour former des experts en design d'interface et création numérique
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-uspn-navy mb-6">Semestre 3</h3>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-uspn-navy mb-3">UE 1 : Conception et Design</h4>
                <ul className="space-y-2 text-uspn-beige">
                  <li>• Design d'expérience utilisateur (UX)</li>
                  <li>• Interface et ergonomie</li>
                  <li>• Prototypage et maquettage</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-uspn-navy mb-3">UE 2 : Technologies Web</h4>
                <ul className="space-y-2 text-uspn-beige">
                  <li>• Développement front-end avancé</li>
                  <li>• Frameworks modernes (React, Vue.js)</li>
                  <li>• Intégration et responsive design</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-uspn-navy mb-3">UE 3 : Création Numérique</h4>
                <ul className="space-y-2 text-uspn-beige">
                  <li>• Motion design et animation</li>
                  <li>• Design graphique avancé</li>
                  <li>• Production audiovisuelle</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-uspn-navy mb-6">Semestre 4</h3>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-uspn-navy mb-3">UE 4 : Gestion de Projet</h4>
                <ul className="space-y-2 text-uspn-beige">
                  <li>• Méthodologies agiles</li>
                  <li>• Management d'équipe</li>
                  <li>• Budgétisation et planning</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-uspn-navy mb-3">UE 5 : Innovation</h4>
                <ul className="space-y-2 text-uspn-beige">
                  <li>• Nouvelles technologies (AR/VR)</li>
                  <li>• Design thinking</li>
                  <li>• Veille technologique</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-uspn-navy mb-3">UE 6 : Professionnalisation</h4>
                <ul className="space-y-2 text-uspn-beige">
                  <li>• Stage ou alternance</li>
                  <li>• Mémoire professionnel</li>
                  <li>• Projet de fin d'études</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-uspn-lightGray">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Projets Étudiants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Interface Innovante"
              description="Conception d'une interface utilisateur pour une application mobile"
              image="photo-1488590528505-98d2b5aba04b"
            />
            <ProjectCard
              title="Design Web"
              description="Création d'une expérience utilisateur immersive"
              image="photo-1486312338219-ce68d2c6f44d"
            />
            <ProjectCard
              title="Application Mobile"
              description="Développement d'une application interactive"
              image="photo-1498050108023-c5249f4df085"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Témoignages Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Marie Laurent"
              year="2023"
              position="UX Designer"
              quote="Le Master DIMI m'a permis d'acquérir des compétences solides en design d'interface et en gestion de projet."
            />
            <TestimonialCard
              name="Thomas Martin"
              year="2022"
              position="Directeur Artistique"
              quote="Une formation complète qui m'a ouvert les portes du monde professionnel du design numérique."
            />
            <TestimonialCard
              name="Sophie Dubois"
              year="2021"
              position="Product Designer"
              quote="L'alternance est un véritable atout, permettant d'appliquer directement les connaissances acquises."
            />
          </div>
        </div>
      </section>

      {/* Débouchés Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Débouchés Professionnels</h2>
            <p className="text-gray-600">
              Une formation qui ouvre les portes vers des métiers d'avenir
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-uspn-navy">Design & Création</h3>
              <ul className="space-y-3 text-uspn-beige">
                <li>• UX/UI Designer</li>
                <li>• Directeur Artistique Digital</li>
                <li>• Motion Designer</li>
                <li>• Designer d'Interaction</li>
                <li>• Lead Designer</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-uspn-navy">Développement</h3>
              <ul className="space-y-3 text-uspn-beige">
                <li>• Développeur Front-end</li>
                <li>• Intégrateur Web</li>
                <li>• Développeur Full-stack</li>
                <li>• Lead Developer</li>
                <li>• Architecte Web</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-uspn-navy">Management</h3>
              <ul className="space-y-3 text-uspn-beige">
                <li>• Chef de Projet Digital</li>
                <li>• Product Owner</li>
                <li>• Product Manager</li>
                <li>• Consultant Digital</li>
                <li>• Entrepreneur Digital</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
