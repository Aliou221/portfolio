import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BtnLink } from "./ui/utils";
import imageLogo from "/logo.png";

export default function Header() {

  const myLinks: string[] = ["Accueil", "A propos", "Compétences", "Services", "Réalisations"];
  const linkID: string[] = ["#", "#propos", "#competences", "#services", "#realisations"];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f3f3f30a] z-50 backdrop-blur-lg sticky top-0 border-b border-gray-600">
      <div className="mx-auto max-w-[1024px] w-full p-4">
        <nav className="flex items-center justify-between">
            <a
              href="#"
              className="logo flex items-center gap-2 text-xl font-bold text-white"
            >
              <img src={imageLogo} alt="Logo" className="size-10 rounded-full" />
              AliouDev
            </a>

            {/* Menu Desktop */}
            <ul className="hidden min-[800px]:flex items-center gap-2">
              {myLinks.map((linkItem, index) => (
                <li key={index}>
                  <a
                    href={linkID[index]}
                    onClick={() => setActiveIndex(index)}
                    className={`px-3 py-2 text-sm border-b-2 font-medium rounded-md transition-all ease-out duration-300
                    ${ index === 0
                      ? "text-white border-b-2 font-bold border-gray-500"
                      : "text-white hover:border-gray-500 hover:font-bold border-b-2 border-transparent"
                    }`}
                  >
                    {linkItem}
                  </a>
                </li>
              ))}
              <BtnLink
                link="#contact"
                text="Contact"
                style="bg-white px-3 py-2 text-gray-900"
              />
            </ul>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-[800px]:hidden block text-white z-50"
            >
              {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
            </button>
        </nav>

        {/* Menu Mobile Overlay */}
        <div
          className={`nav fixed top-0 left-0 w-full h-screen bg-[#131111]/95 backdrop-blur-2xl z-40 flex flex-col items-start p-3 justify-center gap-6 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="flex flex-col w-full items-start gap-6 text-lg">
            {myLinks.map((linkItem, index) => (
              <li key={index} className="w-full anime flex-1">
                  <a
                    href={linkID[index]}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsOpen(false);
                    }}
                    className={`${activeIndex === index ? 'text-white font-bold border-b-2 border-gray-500' : ''} px-4 w-full block py-2 rounded-md transition-all ease-out duration-300
                    text-white hover:bg-gray-800 font-medium focus:text-gray-400`
                    }
                  >
                  { linkItem }
                  </a>
              </li>
            ))}
          </ul>
            
          <BtnLink
            click={() =>  setIsOpen(false) }
            link="#contact"
            text="Contact"
            style="bg-gradient-to-br from-gray-500 to-gray-300 text-gray-900 px-3 py-2 w-[90%] self-center text-center"
          />
        </div>
      </div>
    </header>
  );
}
