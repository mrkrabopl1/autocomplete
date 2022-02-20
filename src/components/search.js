import React, {useEffect, useState} from "react";
import s from "./style.module.css"

import axios from "axios";
import Slider from "./scroll/slider";

const Search=()=>{
const [flag,setFlag]=useState(true)
    const [streetData,setStreet]=useState([])
    const [constData,setConst]=useState([])

    let [name,setName]=useState('')
    useEffect(()=>{


           axios.get("https://dispex.org/api/vtest/Request/streets").then(res=>{
                setStreet(res.data.map(elem=>elem.name)); setConst(res.data.map(elem=>elem))
            })


    },[])

const sortStreet=(str)=>{
    setStreet(constData.reduce((acc,curr)=>{
        if(curr["name"].indexOf(str)!==-1){
            acc.push(curr["name"])
        }
        return acc

    },[]))
}
    const streetList=streetData.map(elem=><div onClick={()=>{setName(elem);
        sortStreet(elem)}}>{elem}</div>)









    return(
        <div>
            <input value={name} onChange={(e)=>{sortStreet(e.target.value);
                setName(e.target.value)}} type={"text"} />
            {flag?
                <button onClick={()=>setFlag(!flag)} className={s.btnFlag}> &or;</button>:
                <button onClick={()=>setFlag(!flag)} className={s.btnFlag}>&and; </button>
            }

            {
                flag? <Slider flag={flag} name={name}>{ streetList} </Slider>:""
            }
        </div>
    )
}

export default Search