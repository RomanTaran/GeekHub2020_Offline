import { useEffect, useState } from 'react'
import './clock.css'
import { DateTime } from "luxon";

const Clock = (props) => {
  const [day, setDay] = useState(DateTime.local());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');
    setDay(DateTime.local());
    let hh = props.newZone.hour * 30;
    let mm = day.minute * deg;
    let ss = day.second * deg;
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  }

  return (
    <div className="clock">
      <div className="hour">
        <div className="hr" id="hr"></div>
      </div>
      <div className="min">
        <div className="mn" id="mn"></div>
      </div>
      <div className="sec">
        <div className="sc" id="sc"></div>
      </div>
    </div>
  );
}

export default Clock
