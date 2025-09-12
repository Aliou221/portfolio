import logoImage from "/img-me.png"
import monCv from "@/assets/pdf/Cv_Aliou_Cisse.pdf"
import { BtnLink, MyLinkIcon } from "./ui/utils"
import { useAnimation } from "./utils/animation";


export default function HomeSection() {

  useAnimation('.anime', 0.2)

  return (
    <section className="min-h-screen mx-auto container p-4 flex items-center justify-center flex-col" id="home">
      <div className="anime">
        <img 
          src={logoImage} 
          alt="image" 
          className="size-40 rounded-full bg-[#55555531] cursor-pointer hover:scale-[1.058] transition-all hover:shadow-2xl shadow-zinc-800 shadow-2xl mb-5" 
        />
      </div>
      <div>
        <h2 className="md:text-3xl text-xl anime leading-9 text-center font-bold text-balance text-white">
          Je suis Aliou CISSE,<br />
          <span className="bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-center text-transparent">
            Étudiant <span className="text-gray-500 text-2xl">|</span> Développeur Web
          </span>
        </h2>
        <p className="text-center anime max-w-[500px] my-5 text-sm text-gray-400">
          Découvrez mon parcours et mes réalisations en tant qu'étudiant en informatique,
          passioné de developpement web et d'innovation technologie.
        </p>
      </div>

      <div className="flex anime items-center gap-5 ">
        <BtnLink link={monCv} target="_blank" text="Voir mon CV" style="bg-white text-gray-900" />
        <BtnLink link="#contact" text="Me Contacter" style="bg-gray-900 text-white" />
      </div>

      <div className="flex anime items-center gap-5 my-6">
        <MyLinkIcon link="https://www.linkedin.com/in/aliou-cisse-469a37271" areaLabel="LinkedIn"/>
        <MyLinkIcon link="https://github.com/Aliou221" areaLabel="Github"/>
      </div>
    </section>
  )
}
