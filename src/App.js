import "./App.css";
import { useState } from "react";
import Timer from "./Timer";

function App() {
  const [targetTime, setTargetTime] = useState(0);

  const handleTimeChange = (e) => {
    e.preventDefault();
    setTargetTime(e.target.value * 1000);
  };
  console.log(targetTime);
  return (
    <section className='card-box'>
      <form>
        <label htmlFor="start-time">Set Timer value in seconds: </label>
        <input
          placeholder="00s"
          type="number"
          id="start-time"
          pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
          onChange={handleTimeChange}
        />
      </form>
      <Timer targetTime={targetTime} />
    </section>
  );
}
export default App;
