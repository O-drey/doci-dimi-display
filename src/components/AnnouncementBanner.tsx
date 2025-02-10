
import { useState } from "react";
import { X } from "lucide-react";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-uspn-coral text-white py-3 px-4 relative animate-slide-in">
      <div className="container mx-auto text-center text-sm md:text-base">
        Si vous êtes curieux, créatif et que vous souhaitez inventer les interfaces de demain, venez rencontrer les étudiants et responsables de formation du Master DIMI-Création Numérique à la JPO le 8 février
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Fermer"
      >
        <X size={20} />
      </button>
    </div>
  );
};
