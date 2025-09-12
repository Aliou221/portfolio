import { type ReactElement } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { EyeIcon, Github } from "lucide-react";
import { useAnimation } from "./animation";

export default function CardRealisations({
    imageUrl,
    alt,
    title,
    description,
    children,
    site,
    github,
  }: {
    imageUrl: string;
    alt: string;
    title: string;
    description: string;
    children: ReactElement;
    site: string;
    github: string;
  }) {

  useAnimation('.anime-card-realisation', 0.4)

  return (
    <Card  className={`anime-card-realisation transition-all duration-700 ease-out transform flex-1 cursor-pointer backdrop-blur-2xl border bg-[#55555531] card p-3 border-zinc-600 shadow-md`}>
      <div className="flex flex-col h-full gap-2 justify-between">
        <div className="flex flex-col gap-1">
          <img src={imageUrl} alt={alt} className="rounded-md" />
          <div>
            <CardTitle className="text-white text-xl uppercase">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-300 py-2">
              {description}
            </CardDescription>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-wrap gap-2 items-center">{children}</div>
          <div className="flex items-center gap-3">
            <a href={site} target="_blank">
              <EyeIcon
                className={`${
                  site === "#" ? "hidden" : "block"
                } text-white size-6 hover:bg-gray-800 p-1 rounded-md shadow-md transition-all`}
              />
            </a>
            <a href={github} target="_blank">
              <Github
                className={`${
                  github === "#" ? "hidden" : "block"
                } text-white size-6 hover:bg-gray-800 p-1 rounded-md shadow-md transition-all`}
              />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
