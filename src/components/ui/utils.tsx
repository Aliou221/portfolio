import { Github, Linkedin } from "lucide-react"
import { Badge } from "./badge";
import type { MouseEventHandler } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";


export function TitleSection({ 
  title 
  }: {
    title: string 
  }) {
  return <h1 className="text-2xl relative w-full my-5 bg-gradient-to-r title from-gray-400 to-gray-200 bg-clip-text text-transparent font-bold uppercase mt-5">
          {title}
        </h1>
}

export function BtnLink({
    link, 
    text, 
    style, 
    click,
    target,
    downloaded
  }: {
    link : string, 
    text : string, 
    style: string, 
    click?: MouseEventHandler<HTMLAnchorElement>
    downloaded?: boolean
    target?: string
  }) {
  return <a href={link} target={target} download={downloaded} onClick={click} className={`${style} hover:scale-[1.098] transition-all ease-in-out shadow-2xl text-sm font-bold px-3 py-2 rounded-md`}>
          {text}
        </a>
}

export function MyLinkIcon({
    link = "#",
    areaLabel,
  }:{
    link: string,
    areaLabel?: string,
  }){
  return <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all"
          aria-label={areaLabel}
        >
          {
            areaLabel === "LinkedIn" ? (
              <Linkedin className="w-8 h-8 text-white transition-all bg-blue-500 shadow-md p-1 rounded-md" />
            ) : areaLabel === "Email" ? (
              <EnvelopeIcon className="w-8 h-8 text-white shadow-md transition-all bg-zinc-700 p-1 rounded-md" />
            ) : (
              <Github className="w-8 h-8 text-white shadow-md transition-all bg-black p-1 rounded-md" />
            )
          }
        </a>
}

export function MyCompetence({
    icon,
    text,
    color,
    alt
  }:{
    icon: string,
    text: string,
    color: string,
    alt: string
  }) {
    return (
      <Badge variant='default' className={`flex items-center gap-2 ${color}`}>
        <img src={icon} alt={alt} className="size-5" /> 
        {text}
      </Badge>
    )
}