import { useEffect, useRef } from "react"
import style from "../assets/css/btn.module.css"
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation";

export default function Button({ text, hash, href }) {
    const ref = useRef(null);

    useEffect(() => {
        if (hash) {
            const btn = ref.current

            btn.onclick = function () {
                    const offsetTop = document.querySelector(hash).offsetTop;
                    scroll({
                        top: offsetTop,
                        behavior: "smooth"
                    })

            }
        }
    }, [])

    return (
        <button className={style.global_btn+ " " + ANIMATION_CLASSNAME} ref={ref} hash={hash}onClick={()=>{
            if(href){
                window.open(href, "_blank")
            }
        }}>
            <div></div>
            <div></div>
            <div></div>
            <span>{text}</span>
        </button>
    )
}