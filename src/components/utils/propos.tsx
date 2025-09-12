import { LightBulbIcon, FireIcon, EyeIcon } from "@heroicons/react/24/outline";
import type { ReactElement } from "react";

export const myCardList = [
  {
    'title': 'Objectif',
    'description': 'Mon ambition est de devenir ingénieur en génie logiciel et de développer des solutions innovantes adaptées aux besoins réels.',
    'icon': 'objectif'
  },
  {
    'title': 'Passion',
    'description': 'Passionné par le développement web et les nouvelles technologies, j’aime apprendre et relever de nouveaux défis.',
    'icon': 'passion',
  },
  {
    'title': 'Vision',
    'description': 'Ma vision est de contribuer à la transformation digitale en Afrique grâce à des solutions logicielles innovantes.',
    'icon': 'vision',
  },
];

export const myIcon = (icon: string): ReactElement => {

  const styleIcon: string = "size-8 p-1 bg-gray-200 rounded-md text-gray-500 shadow-md";

  switch (icon) {
    case 'objectif': return <LightBulbIcon className={styleIcon} />;
    case 'passion': return <FireIcon className={styleIcon} />;
    case 'vision': return <EyeIcon className={styleIcon} />;
    default: return <></>;
  }
}