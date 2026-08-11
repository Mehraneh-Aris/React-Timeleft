import React, { useEffect, useState } from "react";
import formatTime from "../utils/FormatTime"
import styles from "../styles/CountdownTimer.module.css"

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
        <div className={styles.card}>
            <h2 className={styles.title}>تخفیف های ویژه</h2>
            {
              timeLeft > 0 ?(
                <p className={styles.timer}>زمان باقیمانده : <span className={styles.time}>{formatTime(timeLeft)}</span></p>
              )  : (
                <p className={styles.expired}>زمان به پایان رسید</p>
              )
            }

            <button className={styles.button} disabled={timeLeft <= 0} >دریافت تخفیف</button>
        </div>
    );

}

export default TimeLeft;