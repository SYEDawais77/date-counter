import { useReducer } from "react";
import "./index.css";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, dateCounter: action.payload };
    case "dec":
      return { ...state, dateCounter: action.payload };
    case "setSteps":
      return { ...state, steps: action.payload };
    case "setCount":
      return { ...state, dateCounter: action.payload };
    case "reset":
      return { steps: 1, dateCounter: 0 };
    default:
      return "Unknown type";
  }
}
function App() {
  const initialState = { dateCounter: 0, steps: 1 };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { dateCounter, steps } = state;

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
    dispatch({ type: "setSteps", payload: Number(e.target.value) });
  };

  const handleInputChange = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const handleDateInc = () => {
    dispatch({ type: "inc", payload: dateCounter + steps });
  };
  const handleDateDec = () => {
    dispatch({ type: "dec", payload: dateCounter - steps });
  };
  const ResetDate = () => {
    dispatch({ type: "reset" });
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
          <input
            className="dateCounter"
            type="number"
            name="numberOfDays"
            value={dateCounter}
            onChange={handleInputChange}
          />
          <button onClick={handleDateInc}>+</button>
        </div>
        <div className="date">
          <h1>{NewDateFromCount()}</h1>
        </div>
        <div
          style={
            steps > 1 || dateCounter > 0 || dateCounter < 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <button className="resetButton" onClick={ResetDate}>
            Reset
          </button>
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
