import { CREATOR_ILUSTRATION } from "../var-global/creator-ilustration"

const { alt, from  } = CREATOR_ILUSTRATION

export default function Img({src, styleName}) {
    return (<img className={styleName} src={src} alt={alt} data-src={from} />)
}