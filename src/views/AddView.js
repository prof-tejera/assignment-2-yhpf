import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ViewsStyle.css";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

import { Context } from "../Context";

// use global context to get added timer info from addview
const item1 = "wo item 1";
const item2 = "wo item 2";
const item3 = "wo item 3";

const AddView = () => {
    const { timerList, setTimerList } = useContext(Context);
    const addToList = (item) => {
        setTimerList([...timerList, item]);
    }

    const timers = [
        { title: "Stopwatch", C: <Stopwatch onAdd={addToList} /> },
        { title: "Countdown", C: <Countdown onAdd={addToList} /> },
        { title: "XY", C: <XY onAdd={addToList} /> },
        { title: "Tabata", C: <Tabata onAdd={addToList} /> },
    ];

    // This should be a real list later, that can take n number of items
    return (
        <>
        <div className="ViewTitle">
            <h1>Add new timer to WorkOut</h1>
        </div>
        <div className="SaveCancel">
            <a href="/add"><button>Clear Workout</button></a>
            <Link to="/"><button>Go to Workout</button></Link>
        </div>
        <div className="WorkoutView">
            <div className="Timers">
                <h2>Add timers to Workout</h2>
                {timers.map((timer, i) => (
                    <div className="Timer" key={i}>
                        <div className="TimerTitle">
                            {timer.title}
                        </div>
                        {timer.C}
                    </div>
                ))}
            </div>
            <div className="ItemsList">
                <h2>List of Timers in Workout</h2>
                {timerList.map((item, i) => (
                    <div className="Item" key={i}>
                        <div className="ItemTitle">
                            {item.timerType} {item.timerRounds} {item.timerTime} {item.timerRest} <button>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};
  
export default AddView;