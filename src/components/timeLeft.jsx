import React, { useEffect, useState } from "react";
import formatTime from "../utils/FormatTime"

const TimeLeft = () => {
    const[timeLeft,setTimeLeft] = useState( 1* 60)
    useEffect(()=>{
        if(timeLeft <= 0) return

        const timer = setInterval(()=>{
            setTimeLeft (prev=>prev-1)
        },1000)

        return ()=>clearInterval(timer)

    },[timeLeft])

    return (
        <>

        </>
    );

}

export default TimeLeft;