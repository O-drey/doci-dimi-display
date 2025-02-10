
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
    </div>
  );
};

export default Index;
