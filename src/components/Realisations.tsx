import { Badge } from "./ui/badge";
import { TitleSection } from "./ui/utils";

import CardRealisations from "./utils/cardRealisation";
import { realisationsLists } from "./utils/realisationsInfos";

export default function Realisations() {

  return (
    <section className="py-4 scroll-mt-24" id="realisations">
      <TitleSection title='Réalisations'/>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {realisationsLists.map((card, idx) => (
          <CardRealisations 
            key={idx}
            imageUrl={card.imageUrl} 
            alt={"image-" + card.title.toLowerCase().replace(/\s/g, "-")} 
            title={card.title} 
            description={card.description}
            site={card.site ?? '#' }
            github={card.github ?? '#' }
          >
            <>
              {card.techno.map((techno, i) => (
                <Badge 
                  key={i}
                  variant='outline' 
                  className={techno.style}
                >
                  { techno.label }
                </Badge>
              ))}
            </>
          </CardRealisations>
        ))}
      </div>
    </section>
  )
}