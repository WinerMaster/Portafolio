import banner_one from '../assets/images/lenguajes-programación.png'
import banner_two from '../assets/images/image-long.png'
import style from '../assets/css/banner.module.css'

export function Banner({type}) {
    var banner_type = {
        banner_one: banner_one, 
        banner_two: banner_two
    }
    var select = banner_type[type]
    return (
        <section className={style.banner}>
            <div className={style.banner_img} style={ {backgroundImage: `url(${select})`}}> </div>
        </section>
    )
}