import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import s from "./secondPage.module.css"
import ScrollBar from "./scrollBar";
import ScrollSpace from "./scrollSpace";


const Slider=(props)=>{

    let [topImg,setTop]=useState(0)
    let imgStyle={
        top:`${topImg}px`
    }
    let [mHeighNum,setHeigh]=useState(0)
    let [flag2,setFlag2]=useState(true)
    let mHeight =useRef(null)
    let text =useRef(null)
    let polzun =useRef(null)
    let wrap =useRef(null)
    let scroller =useRef(null)
    const scrolly=()=>{
        let a=true
        return  function () {
            if(a){

                a=false
                setTimeout(()=>{

                    a=true ;




                    //console.log(scroller.current.scrollTop,"offset",text.current.clientHeight-scroller.current.clientHeight)
                   if(mHeight.current&&polzun.current&&scroller.current&&text.current.clientHeight){
                       setTop(

                           (mHeight.current.clientHeight-polzun.current.clientHeight)*scroller.current.scrollTop/(text.current.clientHeight-scroller.current.clientHeight)
                       )
                   }





                },10)
            }

        }



    }
    let scrollo=scrolly()

    const drag=(e)=>{
        let clientRect=polzun.current.getBoundingClientRect()
        let mainTop=mHeight.current.getBoundingClientRect().top
        let move=e.clientY-mainTop-polzun.current.clientHeight/2
        console.log(clientRect.top,"img")

        setTimeout(()=>{




            if(clientRect.top>=0){


                if(move<0){
                    move=0
                }
                if(move+polzun.current.clientHeight>mHeight.current.clientHeight){
                    move=mHeight.current.clientHeight-polzun.current.clientHeight
                    console.log("sssssssssssssssssssssss")
                }


                scroller.current.scrollTo(0,(text.current.clientHeight-scroller.current.clientHeight)*(move/(mHeight.current.clientHeight-polzun.current.clientHeight)))
                console.log(move,"dddddddddd")
                setTop(move)
                console.log(move,"dddddddddd")


            }




        },10)

    }



    useEffect(()=>{
        if (polzun.current){

            console.log("eeeeeeeeeeeeeeeeee")
            scroller.current.addEventListener("mouseover", ()=>scroller.current.addEventListener("scroll",scrollo,100))

            polzun.current.addEventListener("mousedown",(e)=>mHeight.current.addEventListener("mousemove",drag),console.log(topImg,"uuuuuuuuuuu"))
            polzun.current.addEventListener("selectstart",()=>false)
            // window.current.addEventListener("mouseup",(e)=>mHeight.current.removeEventListener("mousemove",drag))
        }
        return {

        }

    },[polzun.current])
    useEffect(()=>{

            console.log("dddd")
        if(text.current){
            if(mHeight.current){
                setHeigh(mHeight.current.clientHeight)
            }



            if (text.current.clientHeight<mHeighNum){
                console.log("a")
                setFlag2(false)
            }
            else{
                console.log("z")
                setFlag2(true)
            }

        }

    },[props.name,mHeight.current])

    return (


            <div className={s.scrollSpace}>

                {flag2?<ScrollBar  mHeight={mHeight} polzun={polzun} imgStyle={imgStyle}/>:""}


                <ScrollSpace wrap={wrap} scroller={scroller} text={text} children={props.children}/>


            </div>




    )
}

export default Slider