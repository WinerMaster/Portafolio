import style from "../assets/css/proyects.module.css";
import json from "../assets/json/proyects.json";
import { ANIMATION_CLASSNAME } from "../var-global/classname.animation";
import { lazy } from "react";
const ButtonLazy = lazy(()=>import("../components/button"));
const HashTagsLazy = lazy(()=>import("../components/hashtag"));

export default function Proyect() {
  const proyects = json.Proyects;

  function Proyect({ name, description, src, tags, git, demo, mykey}) {
    return (
      <article className={style.container} key={mykey}>
        <div className={style.img+ " " + ANIMATION_CLASSNAME}>
          <img src={src} alt={name + " " + description} />
        </div>
        <div className={style.content}>
          <h1 className={ANIMATION_CLASSNAME}>{name}</h1>
          <p className={ANIMATION_CLASSNAME}>{description}</p>
          <HashTagsLazy hash={tags} />
          <footer className={style.footer}>
            <ButtonLazy text={"Ver Demo"} href={demo}/>
            <a className={style.git+ " " + ANIMATION_CLASSNAME} href={git} target="_blank">
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.5 0C7.83412 0 0 7.80292 0 17.4303C0 25.1301 5.01278 31.6643 11.9679 33.9711C12.8434 34.1284 13.1592 33.5919 13.1592 33.1305C13.1592 32.7164 13.1452 31.6189 13.1399 30.1666C8.271 31.2187 7.24283 27.8284 7.24283 27.8284C6.44977 25.8152 5.30053 25.2787 5.30053 25.2787C3.71265 24.1969 5.4216 24.2214 5.4216 24.2214C7.17967 24.3437 8.10081 26.0179 8.10081 26.0179C9.66237 28.6812 12.1995 27.9123 13.1926 27.4666C13.3522 26.3395 13.8084 25.5705 14.3067 25.1354C10.4221 24.6967 6.33748 23.2008 6.33748 16.5198C6.33748 14.6202 7.02 13.0614 8.13415 11.8451C7.95694 11.4029 7.35161 9.62914 8.30785 7.23147C8.30785 7.23147 9.77642 6.76137 13.1189 9.01574C14.5464 8.62895 16.0189 8.43152 17.4982 8.42856C18.9777 8.43095 20.4502 8.62839 21.8776 9.01574C25.2218 6.75962 26.6886 7.23147 26.6886 7.23147C27.6449 9.62914 27.0448 11.4029 26.8623 11.8451C27.9853 13.0614 28.659 14.6185 28.659 16.5198C28.659 23.2183 24.5709 24.6897 20.6722 25.1214C21.2951 25.6596 21.8566 26.7222 21.8566 28.3474C21.8566 30.6787 21.8355 32.5591 21.8355 33.1305C21.8355 33.5971 22.1478 34.1389 23.0409 33.9676C29.9925 31.6573 35 25.1284 35 17.4303C35 7.80292 27.1659 0 17.5 0Z" fill="black" />
            </svg>
            </a>
          </footer>
        </div>
      </article>
    );
  }

  return (
    <>
      {proyects.map((proyect,i) => (
        <Proyect
        key={i}
          mykey={i}
          name={proyect.name}
          src={proyect.src}
          description={proyect.description}
          git={proyect.git}
          tags={proyect.tags}
          demo={proyect.demo}
        />
      ))}
    </>
  );
}
