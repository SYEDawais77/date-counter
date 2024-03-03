import { useState } from "react";
import "./index.css";
function App() {
  const [steps, setSteps] = useState(1);
  const [dateCounter, setDateCounter] = useState(0);

  const dateForFooter = new Date();
  const date = new Date();

  function NewDateFromCount() {
    if (dateCounter === 0) {
      return "Today is " + date.toDateString();
    } else if (dateCounter > 0 && dateCounter === 1) {
      date.setDate(date.getDate() + dateCounter);
      return dateCounter + " day from today is " + date.toDateString();
    } else if (dateCounter > 1) {
      date.setDate(date.getDate() + dateCounter);
      return dateCounter + " days from today is " + date.toDateString();
    } else if (dateCounter < 0 && dateCounter === -1) {
      date.setDate(date.getDate() + dateCounter);
      return (
        Math.abs(dateCounter) + " day from today was " + date.toDateString()
      );
    } else {
      date.setDate(date.getDate() + dateCounter);
      return (
        Math.abs(dateCounter) + " days from today was " + date.toDateString()
      );
    }
  }

  const handleSliderChange = (e) => {
    setSteps(Number(e.target.value));
  };

  const handleInputChange = (e) => {
    setDateCounter(Number(e.target.value));
  };

  const handleDateInc = () => {
    setDateCounter(dateCounter + steps);
  };
  const handleDateDec = () => {
    setDateCounter(dateCounter - steps);
  };
  const ResetDate = () => {
    setDateCounter(0);
    setSteps(1);
  };
  return (
    <>
      <div className="card">
        <div className="step">
          <input
            type="range"
            min={1}
            max={10}
            onChange={handleSliderChange}
            value={Number(steps)}
          />
          <h1>{steps}</h1>
        </div>
        <div className="counter">
          <button onClick={handleDateDec}>-</button>
          <input className="dateCounter" type="number" name="numberOfDays" value={dateCounter} onChange={handleInputChange} />
          <button onClick={handleDateInc}>+</button>
        </div>
        <div className="date">
          <h1>{NewDateFromCount()}</h1>
        </div>
        <div style={steps  > 1 || dateCounter > 0 ? {display:"block"} : {display: "none"}}>
        <button className="resetButton" onClick={ResetDate}>Reset Date</button>
        </div>
      </div>

      <footer className="footer">
        <p>
          Copyright &copy; {dateForFooter.getFullYear()} Design and Developed by
          <a href="mailto:shah.syedawais77@yahoo.com">SYED AWAIS SHAH</a>
        </p>
      </footer>
    </>
  );
}

export default App;
