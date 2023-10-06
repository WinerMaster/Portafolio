import { useEffect, useState } from "react";
export function Email({name, email, message}) {
    const [success, setSuccess] = useState(null);
 
    var response = "";
    const valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!name && !email && !message) {
        response = "!Completa todos los campos!";
    } else if(!valid_email.test(email)) {
        response = ("!Correo Electrónico inválido!")
    }else {

        useEffect(()=> {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'URL');
            xhr.onload = function() {
                if(this.response === "true") {
                    setSuccess("¡Se ha enviado con éxito!")
                }
            };
        const data  = JSON.stringify({
            name,
            email,
            message,
            key: import.meta.env.VITE_API_KEY
        });
    
        xhr.send(data);
        }, [])
    }


    const styles_container = {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
        width: "320px",
        height: "200px",
        color: "var(--color-text)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        fontSize: "16px",
        background: "var(--white)",
        position: "fixed",
        zIndex: "999",
        transition: "transform 0.5s"
    };
    const styles_button = {
        cursor: "pointer",
    }

    const Span = ({text}) => <span style={{color: "inherit", fontSize: "inherit"}}>{text}</span>
    const Check = ()=> <svg width="52" height="52" viewBox="0 0 24 24" style={{fill: "rgba(77, 206, 65, 1)"}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>;
    const Error = ()=> <svg width="52" height="52" viewBox="0 0 24 24" style={{fill: "rgba(236, 33, 33, 1)"}}><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path><path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"></path></svg>;
    const Exit = ()=> <svg width="24" height="24" viewBox="0 0 24 24" style={{top:"8px", right: "8px",position: "absolute",fill: "rgba(0, 0, 0, 1)"}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    const click = function () {
        const modal = document.getElementById("modal").children[0];
        const style = modal.style;
        console.log(modal)
        if(style.display === "flex") {
            style.display = "none"
        }
    }
  
    if(success === null || success != null && !response) {

        return <div style={styles_container}><Span text="¡Se ha enviado con éxito!"/><Check/><button style={styles_button} onClick={click}><Exit/></button></div> 
    }else {
        return <div style={styles_container}><Span text={response}/><Error/><button style={styles_button} onClick={click}><Exit /></button></div>
    }
}
