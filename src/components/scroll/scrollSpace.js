import React from "react";
import s from "./secondPage.module.css";

const ScrollSpace=({children,scroller,text,wrap})=>{
    return(
        <div ref={wrap} className={s.container}>
            <div className={s.viewport}>
                <div ref={scroller} className={s.contentBox}>
                    <div  ref={text} className={s.text}>
                        {children}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSpace