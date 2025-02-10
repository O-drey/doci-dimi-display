
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  year: string;
  quote: string;
  position: string;
}

export const TestimonialCard = ({ name, year, quote, position }: TestimonialCardProps) => {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="mb-4">
        <User className="w-12 h-12 text-uspn-navy" />
      </div>
      <blockquote className="flex-grow">
        <p className="text-gray-600 italic mb-4">{quote}</p>
      </blockquote>
      <div className="mt-4">
        <p className="font-semibold text-uspn-navy">{name}</p>
        <p className="text-sm text-uspn-beige">{position}</p>
        <p className="text-sm text-uspn-gold">Promotion {year}</p>
      </div>
    </Card>
  );
};
