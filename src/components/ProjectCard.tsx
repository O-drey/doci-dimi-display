
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const ProjectCard = ({ title, description, image, className }: ProjectCardProps) => {
  return (
    <Card className={cn("overflow-hidden group hover:shadow-lg transition-shadow duration-300", className)}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-uspn-navy">{title}</h3>
        <p className="text-uspn-beige">{description}</p>
      </div>
    </Card>
  );
};
