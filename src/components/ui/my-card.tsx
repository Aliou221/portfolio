import { useAnimation } from "../utils/animation";
import { Card, CardDescription, CardTitle } from "./card"
import { type ReactElement } from "react"

export default function MyCard(
    { 
        children, 
        title, 
        contenu 
    } : {
        children?: ReactElement, 
        title: string, 
        contenu?: string | ReactElement
    }) {
    
    useAnimation('.anime-card-propos', 0.4)

    return (
        <div className="anime-card-propos flex-1">
            <Card  className={`duration-300 h-full  hover:scale-[1.0189] hover:bg-zinc-900/80  ease-out transform cursor-pointer backdrop-blur-2xl border bg-[#55555531] card p-3  border-zinc-600 shadow-md transition-all`}>
                <div className='flex items-center gap-2'>
                    { children }
                    <CardTitle className="font-bold text-xl flex items-center gap-2 text-white">
                        { title }
                    </CardTitle>
                </div>
                <CardDescription className="font-medium text-gray-100 text-sm">
                    { contenu }
                </CardDescription>
            </Card>
        </div>
    )
}
