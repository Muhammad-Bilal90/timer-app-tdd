import React, { useState, useEffect } from 'react';
import "./timer.css";

const Timer = () => {
    let [mins, setMins] = useState(0);
    let [secs, setSecs] = useState(0);
    const [start, setStart] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if(reset){
            setStart(false);
            setReset(false);
            setMins(0);
            setSecs(0);
        }

        if(start){
            let interval = setInterval(() => {
                setSecs(secs => secs + 1)
                if(secs >= 59) {
                    setSecs(secs => secs = 0)
                    setMins(mins => mins + 1)
                }
                
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [secs,start,reset,mins]);
    

    return (
        <div className="timerContainer">
            <div className="timerOuterBorder">
                <div className="timerDisplay" title="timerDisplay">
                    {mins < 10 ? `0${mins}` : mins} : {secs < 10 ? `0${secs}` : secs}
                </div>
            </div>    
            <div>
                <button className="buttons" onClick={() => setStart(true)}>Start</button>
                <button className="buttons" onClick={() => setStart(false)}>Stop</button>
                <button className="buttons" onClick={() => setReset(true)}>Reset</button>
            </div>
        </div>    
        
    );
}

export default Timer;