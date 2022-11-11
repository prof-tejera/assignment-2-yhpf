import React, { useEffect, useState, useRef } from "react";
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import Input from "../generic/Input";
import "../generic/TimersStyle.css";

// https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/

const Countdown = ({onAdd}) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [originalTime, setOriginalTime] = useState(0);
    const timeRef = useRef(timeLeft);
    timeRef.current = timeLeft;

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    // Timer functionality
    useEffect(() => {
        if (isActive && isPaused === false) {
        const timer = setInterval(() => {
            if (timeRef.current > 0) {
                setTimeLeft(timeRef.current-10);
            } else {
                clearTimeout(timer);
            }
        }, 10);

        return () => clearTimeout(timer);
        };
    }, [isActive, isPaused]);

    const addTimerType = () => {
        onAdd({ "timerType": "Countdown", "timerTime": timeLeft })
    }

    // input time in seconds
    // display time in minutes, seconds and tenth/hundreds
    return (
        <Panel>
            <div className="panel">
                <p className="input-text">Time in seconds:</p>
                <Input 
                    timeChanged={(newTime) => { 
                        setTimeLeft(newTime*1000) 
                        setOriginalTime(newTime*1000)
                    }}
                    placeholder="input in seconds"
                />
                <br />
                <div className="timerArea">
                    <p className="timer-text">Time</p>
                    <DisplayTime 
                        time={timeLeft}
                        showTimeUp={true}
                        isActive={isActive}
                    />
                </div>
                <button onClick={ addTimerType }>
                    Add to Workout
                </button>
            </div>
        </Panel>
    );
};

export default Countdown;