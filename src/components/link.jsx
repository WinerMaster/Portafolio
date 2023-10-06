import { useRef } from "react";

export function Link({
    mykey = Math.random(),
    name,
    text,
    href,
    click = ()=>{},
}) {
    const _ref = useRef();
    function event(evento, e) {
        evento.call(_ref, e)
    }

    const key_value = Math.floor(Math.random() * 5)+ mykey;

    return (
        <a className={name} key={key_value} href={href} ref={_ref} onClick={(e)=> event(click, e)}>
            {text}
        </a>
    )
}