import style from "../assets/css/about.module.css"
import about from "../assets/images/aboutme.png"
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation";
import { lazy } from "react";

const ButtonLazy = lazy(()=>import("../components/button"));
const HashTagsLazy = lazy(()=>import("../components/hashtag"));
const ImgLazy = lazy(()=>import("../components/image"));

export function About() {
    const hashtags = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACTJS",
        "NODEJS",
        "C++",
        "PHP",
        "MYSQL",
        "MONGODB"
    ]
    return(
        <section className={style.about} id="about" data-num="1">
            <main className={style.container}>
                <section className={style.about_description}>
                    <header className={style.title+ " " + ANIMATION_CLASSNAME}>
                        <h1>DESCUBRE MÁS</h1>
                        <h1 className="gradient">SOBRE MÍ</h1>
                    </header>
                    <div className={style.description+ " " + ANIMATION_CLASSNAME}>
                        <p>Soy un apasionado desarrollador full stack con más de dos años de experiencia. Mi viaje en la programación ha sido impulsado por mi amor por aprender y mi enfoque autodidacta. Cada día, mi pasión me impulsa a alcanzar nuevos logros y mi compromiso con la mejora continua me ha permitido avanzar de manera asombrosa en este emocionante mundo de la programación.</p>
                    </div>
                    <footer className={style.out+ " " + ANIMATION_CLASSNAME}>
                        <HashTagsLazy hash={hashtags}/>
                        <ButtonLazy text={"Contactar"} hash={"#contact"}/>
                    </footer>
                </section>
                <section className={ANIMATION_CLASSNAME}>
                    <ImgLazy src={about} styleName={style.img}/>
                </section>
            </main>
        </section>
    )
}