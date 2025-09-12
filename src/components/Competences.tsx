import { Code, Layers, Database, Wrench } from "lucide-react";
import MyCard from "./ui/my-card";
import { MyCompetence, TitleSection } from "./ui/utils";
import { databasesLists, frameworkLists, langageLists, outilLists } from "./utils/constant";

export default function Competences() {

  return (
    <section className="pt-7 min-h-screen" id="competences">
      <TitleSection title='competences'/>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
        <MyCard 
          title="Langage" 
          contenu={
            <div className="flex flex-wrap gap-3 items-center">
              {
                langageLists.map((element, index) => (
                  <MyCompetence 
                    key={index}
                    icon={element['icon']} 
                    text={element['text']}  
                    color={element['color']} 
                    alt={element['text']}
                  />
                ))
              }
            </div>
          }>
          <Code className="size-6 text-blue-500" />
        </MyCard>

        <MyCard 
          title="Frameworks & Library"
          contenu={
            <div className="flex flex-wrap gap-3 items-center">
              {
                frameworkLists.map((element, index) => (
                  <MyCompetence 
                    key={index}
                    icon={element['icon']} 
                    text={element['text']}  
                    color={element['color']} 
                    alt={element['text']}
                  />
                ))
              }
            </div>
          }>
          <Layers className="size-6 text-purple-500" />
        </MyCard>

        <MyCard 
          title="Bases de données" 
          contenu={
            <div className="flex flex-wrap gap-3 items-center">
              {
                databasesLists.map((element, index) => (
                  <MyCompetence 
                    key={index}
                    icon={element['icon']} 
                    text={element['text']}  
                    color={element['color']} 
                    alt={element['text']}
                  />
                ))
              }
            </div>
          }>
          <Database className="size-6 text-green-500" />
        </MyCard>

        <MyCard 
          title="Outils dev" 
          contenu={
            <div className="flex flex-wrap gap-3 items-center">
              {
                outilLists.map((element, index) => (
                  <MyCompetence 
                    key={index}
                    icon={element['icon']} 
                    text={element['text']}  
                    color={element['color']} 
                    alt={element['text']}
                  />
                ))
              }
            </div>
          }>
          <Wrench className="size-6 text-gray-500" />
        </MyCard>
      </div>
    </section>
  )
}