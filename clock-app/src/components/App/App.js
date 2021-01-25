import './App.css';
import Clock from "../clock/clock";
import timezones from "compact-timezone-list";
import { useState } from "react";
import { DateTime } from "luxon";

function App() {
  const [newTime, setNewTime] = useState(DateTime.local());
  let zones = timezones.sort((a, b) => a.tzCode > b.tzCode ? 1 : -1);
  const cities = zones.map((city, index) => {
    if (city.tzCode === DateTime.local().zoneName) {
      return <option key={index} selected>{city.tzCode}</option>
    } else {
      return <option key={index}>{city.tzCode}</option>
    }
  });
  const handleChange = (event) => {
    const local = DateTime.local();
    const newTime = local.setZone(event.target.value);
    setNewTime(newTime);
  }
  return (
    <div className="App">
      <header className="App-header">
        <label>It's time to learn React</label>
        <Clock newZone={newTime}/>
        <select onChange={handleChange}>
          {cities}
        </select>
      </header>
    </div>
  );
}

export default App;
