import { Navbar } from "./layouts/navbar"
import { Home } from "./layouts/home"
import { CREATOR_ILUSTRATION } from "./var-global/creator-ilustration"
import { Banner } from "./components/banner"
import { About } from "./layouts/about"
import { Portfolio } from "./layouts/portfolio"
import { Contact } from "./layouts/contact"
import { useEffect } from "react"
import { Animation } from "./anim/animation"
import { ANIMATION_CLASSNAME } from "./var-global/classname.animation"


export default function App() {

  useEffect(()=> {

    const sections =document.querySelectorAll("section[id]")
    sections.forEach(section => {
      const ITEMS_TO_ANIMATE = section.querySelectorAll("."+ANIMATION_CLASSNAME);
      const ANIMATION_DELAY = [0.5,0.6,0.7,0.8,0.9,0.10,0.11,0.12,0.13,0.14,0.15];

        Animation(ITEMS_TO_ANIMATE,{
          move: 100,
          origin: "bottom",
          delay: ANIMATION_DELAY
        }, {threshold: 0})
      
    })
  }, [])

  return (
    <>
    <Navbar/>
    <Home creator={CREATOR_ILUSTRATION}/>
    <Banner type={"banner_one"}/>
    <About/>
    <Banner type={"banner_two"}/>
    <Portfolio/>
    <Contact/>
    </>
  )
}
