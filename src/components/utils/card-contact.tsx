import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Card, CardDescription, CardTitle } from '../ui/card'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function CardContact({ 
    icon,
    title,
    link,
    subtitle,
  }:{
    icon: string,
    title: string,
    link?: string,
    subtitle: string,
  }) {

  const styleCard: string = "duration-700 anime flex flex-row items-center ease-out gap-2 transform flex-1 cursor-pointer backdrop-blur-2xl border bg-[#55555531] card p-3  border-zinc-600 shadow-md transition-all"
  const styleIcon: string = "text-white size-10 p-2 bg-gradient-to-br from-gray-600 to-gray-400 rounded-md"

  const MyIcon = () => {
    switch(icon){
      case 'email': return <EnvelopeIcon className={styleIcon}/> 
      case 'tel': return <PhoneArrowDownLeftIcon className={styleIcon}/> 
      case 'position': return <MapPinIcon className={styleIcon}/> 
    }
  } 

  return (
    <Card className={`${styleCard} flex-col items-center justify-center`}>
      <MyIcon/>
      <div className="flex flex-col items-center gap-1">
        <CardTitle className="flex items-center gap-2 text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 py-0 my-0">
          {
            link ? 
              <a href={link}>{subtitle}</a>
            : <span>{subtitle}</span>
          }
        </CardDescription>
      </div>
    </Card>
  )
}
