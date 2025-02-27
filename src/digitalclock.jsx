import { useEffect, useState } from "react"

function DigitalClock(){
    const[time,setTime]=useState(new Date());

    useEffect(()=>{
       const intervalid=setInterval(()=>{
        setTime(new Date());
       },1000);

       return ()=>{
        clearInterval(intervalid);
       }
    },[]);
    function formatTime(){
        let hours=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const merdian=hours >=12?"PM":"AM";
        hours=hours%12||12
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${merdian}`
    }
    function padZero(number){

        return (number <10 ?"0":"")+number;
         
    }


    return(
        <>
        <h1>DIGITAL CLOCK</h1>
        <div className="clock-container">
        
        <div className="clock">
            <span>{formatTime()}</span>

        </div>

    </div>
        
        
        </>
    
    )

}
export default DigitalClock