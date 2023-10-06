import React from 'react'
import ReactDOM from 'react-dom/client'
import style from "../assets/css/contact.module.css"
import { USE_LINKS, goLink } from "../var-global/use-links";
import { Link } from "../components/link"
import image from "../assets/images/contact.png"
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation";
import { lazy, useRef } from "react";
import { Email } from '../components/email';

const ImgLazy = lazy(()=>import("../components/image"));
const MODAL = document.getElementById("modal");
const root = ReactDOM.createRoot(MODAL)

export function Contact() {

    const CONTAINER_CONTACT = useRef();
    const arry = USE_LINKS.slice(0, USE_LINKS.length - 1);

    const sendForm = () => {
        const container = CONTAINER_CONTACT.current;
        const form = container.querySelector("form");
        const name = form.querySelector("[name='name']").value,
        email = form.querySelector("[name='email']").value,
        message = form.querySelector("[name='message']").value;

        const style = MODAL.children[0] != null ? MODAL.children[0].style : MODAL;

        if (root._internalRoot) {
            root.render(<Email name={name} email={email} message={message} root={root}/>)
        }

        if(style?.display === "none") {
            style.display= "flex";
        }
    }

    function keyup(e) {
        const input = e.target;
        console.log({
            input,
            value: input.value
        })
        
        if(input.value)
        input.classList.add(style.active)
        else input.classList.remove(style.active);
    }

    return (<section className={style.contact} ref={CONTAINER_CONTACT} id="contact" data-num="3">
            <div></div>
        <article className={style.container}>
            <form className={style.form+ " " + ANIMATION_CLASSNAME}>
                <h1 className={style.title}>CONTÁCTAME</h1>
                <input onKeyUp={keyup} type="text" name="name" placeholder="Nombre Completo" autoComplete="off" spellCheck="false" />
                <input onKeyUp={keyup} type="email" name="email" placeholder="Correo Electrónico" autoComplete="off" spellCheck="false" />
                <textarea onKeyUp={keyup} name="message" id="message" placeholder="Escribir Mensaje..." autoComplete="off" spellCheck="false" ></textarea>
                <button type="button" className={style.btn} onClick={sendForm}>Enviar Mensaje</button>
            </form>
            <div className={style.message+ " " + ANIMATION_CLASSNAME}>
                <div className={style.circle}></div>
                <ImgLazy styleName={style.img} src={image} />
                <div className={style.msg} >
                    <p className={style.p}>Conéctate conmigo. Estoy aquí para responder a tus preguntas, discutir ideas emocionantes o trabajar juntos en colaboraciones. Utiliza el formulario o la información de contacto y responderé rápidamente. ¡Espero saber de ti pronto!</p>
                    <div className={style.color}></div>
                    <div className={style.color}></div>
                    <div className={style.color}></div>
                </div>
            </div>
        </article>
        <footer className={style.footer}>
            <div className={style.seccions}>
                {arry.map((property, i) => {
                    return <Link
                        key={i}
                        mykey={i}
                        name={style.link}
                        text={property.name}
                        href={property.hash}
                        click={function (e) {
                            goLink(e, this)
                        }} />
                })}
            </div>
            <div className={style.icons}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71496 0 0 6.88493 0 15.3797C0 22.1737 4.29667 27.9391 10.2582 29.9745C11.0086 30.1133 11.2793 29.6399 11.2793 29.2328C11.2793 28.8674 11.2673 27.899 11.2628 26.6176C7.08943 27.5459 6.20814 24.5545 6.20814 24.5545C5.52837 22.7781 4.54331 22.3047 4.54331 22.3047C3.18227 21.3502 4.64708 21.3718 4.64708 21.3718C6.154 21.4798 6.94355 22.957 6.94355 22.957C8.28203 25.307 10.4567 24.6285 11.3079 24.2353C11.4448 23.2407 11.8358 22.5622 12.2629 22.1783C8.93323 21.7912 5.43212 20.4713 5.43212 14.5763C5.43212 12.9002 6.01715 11.5247 6.97213 10.4515C6.82023 10.0614 6.30138 8.4963 7.12102 6.38071C7.12102 6.38071 8.37979 5.96591 11.2447 7.95507C12.4683 7.61378 13.7305 7.43958 14.9985 7.43696C16.2666 7.43907 17.5288 7.61329 18.7523 7.95507C21.6187 5.96437 22.876 6.38071 22.876 6.38071C23.6956 8.4963 23.1813 10.0614 23.0249 10.4515C23.9874 11.5247 24.5649 12.8987 24.5649 14.5763C24.5649 20.4867 21.0608 21.7851 17.7191 22.1659C18.253 22.6409 18.7342 23.5784 18.7342 25.0124C18.7342 27.0694 18.7162 28.7286 18.7162 29.2328C18.7162 29.6445 18.9839 30.1225 19.7493 29.9714C25.7078 27.9329 30 22.1721 30 15.3797C30 6.88493 23.285 0 15 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24">
                    <path d="M25.0932 1.43555L23.1739 2.93501L15.0019 9.00783L6.8298 2.87504L4.91049 1.37557C4.45833 1.00153 3.90637 0.768353 3.32299 0.704941C2.73961 0.641529 2.15044 0.750665 1.62848 1.01883C1.10652 1.28699 0.674699 1.7024 0.386523 2.21358C0.0983468 2.72477 -0.0335236 3.30927 0.00724898 3.89467V21.2734C0.00724898 21.8143 0.2221 22.333 0.604537 22.7154C0.986973 23.0978 1.50567 23.3127 2.04652 23.3127H6.8298V11.7369L15.0019 17.8696L23.1739 11.7369V23.3127H27.9572C28.4981 23.3127 29.0168 23.0978 29.3992 22.7154C29.7816 22.333 29.9965 21.8143 29.9965 21.2734V3.89467C30.0246 3.31432 29.8836 2.73829 29.5905 2.2366C29.2974 1.73491 28.8649 1.32916 28.3455 1.06868C27.8261 0.808201 27.2423 0.704205 26.6649 0.769335C26.0875 0.834465 25.5415 1.06592 25.0932 1.43555Z" />
                </svg>
            </div>
            <div className={style.copyright}>
                <span>Todos los derechos reservados © Daniel Muñoz. 2023</span>
            </div>
        </footer>
    </section>)
}