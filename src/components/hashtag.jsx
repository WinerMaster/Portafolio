import style from "../assets/css/hashtag.module.css"
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation"

export default function HashTags({hash}) {

    function CreateHash({name, index}) {
        return (
            <div className={style.hashtag+ " " + ANIMATION_CLASSNAME} key={index}>
                <span className={style.hash}>#</span>
                <span className={style.name}>{name}</span>
            </div>
        )
    }

    return(
        <article className={style.container_hash}>
            {hash.map((name, i) =><CreateHash key={i} name={name} index={i}/>)}
        </article>
    )
}