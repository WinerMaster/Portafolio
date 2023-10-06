import style from "../assets/css/navbar.module.css";
import { useEffect, useRef } from "react";
import { Link } from "../components/link";
import { USE_LINKS, goLink } from "../var-global/use-links";

export function Navbar() {

    const ref_li = useRef();
    const ref_move = useRef();
    const ref_parent = useRef();
    const { active } = style;
    const join = (one, two) => one +" "+ two;
    
    useEffect(()=> {
        const sections = document.querySelectorAll("#root > section[id]");
        const move = ref_move.current;
        const li = ref_li.current;

        window.onresize = () => move.style.setProperty("--w", li.offsetWidth + "px");

        const observe = new IntersectionObserver((entries) => {
            const width = li.offsetWidth;
            const getAttr = (entry) => entry.target.getAttribute("data-num");

            if(entries.length > 0) {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        move.style = `--i:${getAttr(entry)}; --w: ${width}px`;
                    }
                })
            }

            const entry = entries[0];

            if(entry.isIntersecting) {
                move.style = `--i: ${getAttr(entry)}; --w:${width}px`;
            }

        }, {
            rootMargin: '-50px',
            root: null,
            threshold: 0
        });
        
        sections.forEach(section => observe.observe(section))
    }, [])

    const ADD_STYLES = (elem, index) => {
        elem = elem.current;
        const parent = ref_parent.current;
        const child = parent.querySelector("." + active);
        child.classList.remove(active)
        elem.classList.add(active);

        ref_move.current.style = "--i:"+index + "; --w:" + ref_li.current.offsetWidth + "px";
    }

    const createLi = (link, index) => {
        const addClass = !index ? join(style.a,active) : style.a;

        function eventClick(event) {
            const elem = this;

            goLink(event, elem)
            
            ADD_STYLES(elem, index)
        }

       return (
            <li className={style.li} key={index} ref={ref_li}>
                <Link name={addClass} text={link.name} href={link.hash} click={eventClick}/>
            </li>
        );
    };

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <ul className={style.ul} ref={ref_parent}>
                    {USE_LINKS.map((link, i) => createLi(link, i))}
                </ul>
                <div className={style.move} ref={ref_move}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>
    );
}
