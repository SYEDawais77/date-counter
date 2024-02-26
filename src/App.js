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
      return Math.abs(dateCounter) + " day from today was " + date.toDateString();
    } else {
      date.setDate(date.getDate() + dateCounter);
      return Math.abs(dateCounter) + " days from today was " + date.toDateString();
    }
  }

  const handleStepsInc = () => {
    setSteps(steps + 1);
  };
  const handleStepsDec = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };
  const handleDateInc = () => {
    setDateCounter(dateCounter + steps);
  };
  const handleDateDec = () => {
    setDateCounter(dateCounter - steps);
  };
  return (
    <>
      <div className="card">
        <div className="step">
          <button onClick={handleStepsDec}>-</button>
          <h1>Steps: {steps}</h1>
          <button onClick={handleStepsInc}>+</button>
        </div>
        <div className="counter">
          <button onClick={handleDateDec}>-</button>
          <h1>Count: {dateCounter}</h1>
          <button onClick={handleDateInc}>+</button>
        </div>
        <div className="date">
          <h1>{NewDateFromCount()}</h1>
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
