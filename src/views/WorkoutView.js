import React, { useContext } from "react";
import "./ViewsStyle.css";

import Workout from "../components/timers/Workout";
import Active from "../components/timers/Active";

import { Context } from "../Context";


// use global context to get added timer info from addview
const item1 = "wo item 1";
const item2 = "wo item 2";
const item3 = "wo item 3";

const WorkoutView = () => {
  // This should be a real list later, that can take n number of items
  const workoutList = [
    item1,
    item2,
    item3
  ];

  const { timerList, setTimerList } = useContext(Context);

  return (
    <>
    <div className="ViewTitle">
      <h1>Workout - Let's Go!</h1>
    </div>
    <div className="WorkoutView">
      <div className="WorkoutTimerDisplay">
        <h2>Workout Timer</h2>
        <Workout />
      </div>
      <div className="ItemsList">
        <h2>List of Timers in Workout</h2>
        {timerList.map((item, i) => (
          <div className="Item" key={i}>
              <div className="ItemTitle">
                  {item.timerType} <button>Remove</button>
              </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WorkoutView;
