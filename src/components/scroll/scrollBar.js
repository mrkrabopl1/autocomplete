import React from "react";
import s from "./secondPage.module.css";

const ScrollBar=({imgStyle,polzun,mHeight,text})=>{

    return (
        <div ref={mHeight} className={s.scroll}>

            <div ref={polzun} style={imgStyle} className={s.scrollImg}>

            </div>

            <div  className={s.bar}>
                <div  className={s.line}></div>
            </div>

        </div>
    )
}
export default ScrollBar