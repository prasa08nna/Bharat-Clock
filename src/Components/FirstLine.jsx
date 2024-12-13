import { useEffect } from "react";
import { useState } from "react";

export function FirstLine(){
    return <p className="myPara">This is the clock that shows the time in Bharat at all times </p>
}

export function SecondLine(){
    const [time, setTime] = useState(new Date());
   
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>{
            clearInterval(intervalId)
        }
    },[])
    return <p className="myPara">This is the current time:{time.toLocaleDateString()}-{time.toLocaleTimeString()} </p>
}
