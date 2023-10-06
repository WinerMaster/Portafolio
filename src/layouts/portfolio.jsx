import { lazy } from "react";
import style from "../assets/css/portfolio.module.css"
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation";

const ProyectLazy = lazy(()=> import("../components/proyect"));

export function Portfolio() {
    return (
        <section className={style.portfolio} id="portfolio" data-num="2">
            <main className={style.main}>
                <header className={style.title+ " " + ANIMATION_CLASSNAME}>
                    <h1>Te invito a explorar mi <span className={style.gradient + " gradient"}>portafolio</span> y </h1>
                    <h1>descubrir la calidad de mi trabajo</h1>
                    <span className={style.sub}>Mi pasión por el diseño y la creatividad se refleja en cada proyecto.</span>
                </header>
                <div className={style.container}>
                    <ProyectLazy />
                </div>
            </main>
        </section>
    )
}