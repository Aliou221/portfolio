import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import MyCard from "./ui/my-card";
import { TitleSection } from "./ui/utils";
import { PaletteIcon } from "lucide-react";

export default function Services() {
  return (
    <section className="min-h-[70vh]" id="services">
      <TitleSection title="Mes Services" />
        <div className="min-[590px]:grid-cols-2 grid gap-6 flex  min-[856px]:grid-cols-3">
          <MyCard 
            title="Sites Web Vitrine"
            contenu={
              <>
                <p>Création de sites web modernes et responsives pour présenter votre activité avec élégance.</p>
                <ul className="list-disc list-inside py-3 space-y-1">
                  <li className="text-gray-300 text-sm">Design responsive</li>
                  <li className="text-gray-300 text-sm">SEO optimisé</li>
                  <li className="text-gray-300 text-sm">Performance rapide</li>
                </ul>
              </>
            }
          >
            <GlobeAltIcon className="size-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-400 text-white p-1" />
          </MyCard>

          <MyCard 
            title="Applications Web"
            contenu={
              <>
                <p>Développement d'applications web dynamiques et interactives avec les dernières technologies.</p>
                <ul className="list-disc list-inside py-3 space-y-1">
                  <li className="text-gray-300 text-sm">React / Next.js</li>
                  <li className="text-gray-300 text-sm">API REST</li>
                  <li className="text-gray-300 text-sm">Base de données</li>
                </ul>
              </>
            }
          >
            <CodeBracketIcon className="size-8 rounded-md bg-gradient-to-br from-gray-500 to-green-400 text-white p-1" />
          </MyCard>

          <MyCard 
            title="Design Graphique"
            contenu={
              <>
                <p>Création d'affiches, flyers et supports visuels pour vos campagnes marketing.</p>
                <ul className="list-disc list-inside py-3 space-y-1">
                  <li>Affiches & Flyers</li>
                  <li>Identité visuelle</li>
                  <li>Supports numériques</li>
                </ul>
              </>
            }
          >
            <PaletteIcon className="size-8 rounded-md bg-gradient-to-br from-purple-500 to-purple-400 text-white p-1" />
          </MyCard>

        </div>
    </section>
  );
}
