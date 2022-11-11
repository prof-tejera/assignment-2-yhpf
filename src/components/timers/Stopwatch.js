import React, { useEffect, useState } from "react";
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import "../generic/TimersStyle.css";

//https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

const Stopwatch = ({onAdd}) => {
    const [time, setTime] = useState(0);

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    // Timer functionality
    useEffect(() => {
        let timer = null;
        if (isActive && isPaused === false) {
        timer = setInterval(() => {
            setTime(time => time+1);
            }, 10);
        } else if (!isActive && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isActive, isPaused, time]);

    const addTimerType = () => {
        onAdd({ "timerType": "Stopwatch" })
    }

    // input time in seconds
    // display time in minutes, seconds and tenth/hundreds
    return (
        <Panel>
            <div className="panel">
                <div className="timerArea">
                    <DisplayTime time={time*10} />
                </div>
                <button onClick={ addTimerType }>
                    Add to Workout
                </button>
            </div>
        </Panel>
    );
};


export default Stopwatch;