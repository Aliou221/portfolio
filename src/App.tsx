import { useEffect } from "react";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Propos from "./components/Propos";
import Realisations from "./components/Realisations";
import Services from "./components/Services";

function App() {

  useEffect(()=>{
    const sections = document.querySelectorAll('section')
    const navlinks = document.querySelectorAll("nav ul li a")

    window.addEventListener("scroll", ()=>{ 
      sections.forEach(section =>{ 
        const tete = window.scrollY; 
        const hauteur = section.offsetHeight; 
        const pos_section = section.offsetTop - 150; 
        const id = section.getAttribute("id");  

        if(tete >= pos_section && tete < pos_section + hauteur){ 
            
          navlinks.forEach((link) => {
            link.classList.remove("active")
            document.querySelector('ul li a[href*='+id+']')?.classList.add("active")
          })
        }
      })
  })
    
  },[])

  return (
    <>
      <Header />
      <div className="max-w-[1024px] overflow-hidden mx-auto flex-1 flex flex-col min-h-screen p-5">
        <HomeSection />
        <Propos  />
        <Competences />
        <Services/>
        <Realisations />
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App