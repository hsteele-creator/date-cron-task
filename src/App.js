import logo from "./logo.svg";
import "./App.css";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { useState } from "react";
import { daysOfWeek, hours, weekOrMonth, daysOfMonth } from "./Data";
import {cronDayOfMonth, crondayOfWeek, cronHour} from "./helperFunctions"

function App() {
  const [date, setDate] = useState({
    weekOrMonth: "Week",
    dayOfMonth: "every day of the month",
    dayOfWeek: "every day of the week",
    hour: "every hour",
  });

  const [fullCronDate, setFullCronDate] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...date,
      [name]: value,
    });
  };

  const resetDate = () => {
    setDate({
      weekOrMonth: "Week",
      dayOfMonth: "every day of the month",
      dayOfWeek: "every day of the week",
      hour: "every hour",
    });
  };


  const cronDate = () => {
    const crMin = "0"
    const crMon = "*"
    const dOfM = cronDayOfMonth(date.dayOfMonth);
    const dOfW = crondayOfWeek(date.dayOfWeek);
    const crHour = cronHour(date.hour);
    setFullCronDate(fullCronDate => (crMin + " " + crHour + " " + dOfM+ " " + crMon + " " + dOfW))
  }

  return (
    <>
    <div className="App">
      <DropDownListComponent
        name="weekOrMonth"
        value={date.weekOrMonth}
        id="ddelement"
        dataSource={weekOrMonth}
        onChange={handleChange}
      />
      <div style={{display : date.weekOrMonth === "Month" ? "block" : "none"}}>
        <DropDownListComponent
          name="dayOfMonth"
          value={date?.dayOfMonth}
          id="ddelement"
          dataSource={daysOfMonth}
          onChange={handleChange}
        />
      </div>

      <DropDownListComponent
        name="dayOfWeek"
        value={date.dayOfWeek}
        id="ddelement"
        dataSource={daysOfWeek}
        onChange={handleChange}
      />

      <DropDownListComponent
        name="hour"
        value={date.hour}
        dataSource={hours}
        onChange={handleChange}
      />
      <button onClick={cronDate}>Submit</button>
      <button onClick={resetDate}>Clear</button>
    </div>

    {fullCronDate && <p className="full-cron">{fullCronDate}</p>}

  </>
  );
}

export default App;
