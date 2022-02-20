const axios =require("axios")


axios.get("http://localhost:8080").then(res=>{
    let count=0
    let answerObj={}
    answerObj["1.1"]=res.data.reduce((acc,cur)=>{
        count+=1
        if (cur.type==="cat"){
            acc.cat=acc.cat+1
        }
        else {
            acc.dog=acc.dog+1
        }
        acc.avgage=acc.avgage+cur.age
        if(count===res.data.length){
            acc.avgage=Math.round(acc.avgage/count)
        }
        return acc



    },{cat:0,dog:0,avgage:0})
    answerObj["1.2"]=res.data.reduce((acc,curr)=>{
        if (curr.breed&&curr.type==="dog"&&curr.features[0]==="black"){
            acc+=1
        }
        return acc
    },0)
    answerObj["1.3"]=res.data.reduce((acc,curr)=>{
        if(curr.type==="dog"&&curr.features[0]==="white"||curr.type==="cat"&&curr.features[0]==="black"){
            acc.push(curr)
        }
        return acc
    },[])
    answerObj["1.4"]=[...res.data.reduce((acc,curr)=>{
        if(curr.type==="cat"){
            acc.push(curr)
        }
        return acc
    },[]).sort((a,b)=>b.age-a.age),
        ...res.data.reduce((acc,curr)=>{
        if(curr.type==="dog"){
            acc.push(curr)

        }
        return acc
        },[]).sort((a,b)=>a.age-b.age)]
    return(
        answerObj

    )


}).then(res=>console.log(res))


function degree(num,n){
    return Math.exp(Math.log(num)*n)
}


function degree2(num,n){
    let answer=1
    if (n===0){
        return 1
    }
    else if(n<0){
        for (let i=0;i>n;i--){
            answer=answer*num
        }
        return 1/answer
    }
   else {
        for (let i=0;i<n;i++){
            answer=answer*num
        }
        return answer
    }


}



function flatNew(items,depth) {
    const arr = [];

    items.forEach(item => {
        if (Array.isArray(item)&&depth>1) {

            arr.push(...flatNew(item,depth-1));
        } else {
            arr.push(item);
        }
    });

    return arr;
}

