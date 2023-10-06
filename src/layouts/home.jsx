import { lazy } from "react";
import style from "../assets/css/home.module.css";
import img from "../assets/images/perfil.png";
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation";

const ButtonLazy = lazy(()=>import("../components/button"));
const ImgLazy = lazy(()=>import("../components/image"));

export function Home() {

  return (
    <section className={style.home} id="home" data-num="0">
      <div className={style.container_img + " " + ANIMATION_CLASSNAME}>
        <ImgLazy src={img} styleName={style.img}/>
      </div>
      <div className={style.content}>
        <span className={style.span+ " " + ANIMATION_CLASSNAME}>¡Bienvenido a mi portafolio!</span>
          <h1 className={ANIMATION_CLASSNAME}>HOLA MI NOMBRE ES</h1>
          <h1 className={"gradient "+ ANIMATION_CLASSNAME}>DANIEL MUÑOZ</h1>
        <p className={style.p+ " " + ANIMATION_CLASSNAME}>Full Stack Developer</p>
        <ButtonLazy text={"Ver Proyectos"} hash={"#portfolio"}/>
      </div>
    </section>
  );
}
