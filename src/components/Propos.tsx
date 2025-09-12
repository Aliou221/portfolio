import myTof from '/img-me.png'
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardTitle } from "./ui/card";
import MyCard from './ui/my-card';
import { TitleSection } from './ui/utils';
import { useAnimation } from './utils/animation'
import { myCardList, myIcon } from './utils/propos';

export default function Propos() {

  useAnimation('.anime-card-me', 0.2)

  return (
    <section className="min-h-screen" id='propos'>
      <TitleSection title='A propos de moi'/>

      <div className="my-7 md:flex-row flex-col flex w-full flex-wrap gap-4">
        <Card  className={`anime-card-me transition-all duration-700 ease-out transform  backdrop-blur-2xl bg-[#55555531] card p-3 border-zinc-600 shadow-2xl flex-1 cursor-pointer flex items-center justify-center flex-col`}>
          <img
            src={myTof} 
            alt="mon image" 
            className='size-40 rounded-full shadow-2xl cursor-pointer'
          />
          <CardTitle className="font-bold text-2xl text-white">
            Qui Suis Je ?
          </CardTitle>
          <CardDescription className="font-medium text-center text-gray-200">
            Je m'appelle <span className="font-bold">Aliou CISSE</span> et je suis actuellement étudiant en troisiéme année de licence en Informatique à l'Université Iba Der Thiam de Thiès.
          </CardDescription>
          <Badge variant="outline" className='text-gray-300 px-3 py-1'>
            <span className="font-bold">Option:</span> 
            <span className='text-gray-300 font-bold'>GL</span>
          </Badge>
        </Card>
        <div className="flex-1 flex-col space-y-4 my-card-section">
          { myCardList.map((card, index) => (
            <MyCard 
              key={index}
              title={card.title}
              contenu={card.description}
            >
              { myIcon(card.icon) }
            </MyCard>
          ))}
        </div>
      </div>
    </section>
  )
}