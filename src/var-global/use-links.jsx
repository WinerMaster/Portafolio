export const USE_LINKS = [
    {
        name: "Inicio",
        hash: "#home"
    },
    {
        name: "Sobre Mí",
        hash: "#about"
    },
    {
        name: "Portafolio",
        hash: "#portfolio"
    },
    {
        name: "Contacto",
        hash: "#contact"
    }
]

export const goLink = function(event, link) {
    event.preventDefault();
    const href = link.current.getAttribute("href")
    const top = document.querySelector(href).offsetTop;
    
        window.scroll({
            top: top,
            behavior: "smooth"
        })
}