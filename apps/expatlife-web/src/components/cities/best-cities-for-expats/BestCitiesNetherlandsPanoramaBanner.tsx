import { CitiesGuidePanoramaBanner } from "../shared/CitiesGuidePanoramaBanner";
import { bestCitiesForExpatsPanorama } from "./config/bestCitiesForExpatsVisuals.config";

export function BestCitiesNetherlandsPanoramaBanner({ className }: { className?: string }) {
  return (
    <CitiesGuidePanoramaBanner
      src={bestCitiesForExpatsPanorama.src}
      alt={bestCitiesForExpatsPanorama.alt}
      className={className}
    />
  );
}
