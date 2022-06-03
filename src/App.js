import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
import SetTimer from "./SetTimer";

function App() {
  const [targetTime, setTargetTime] = useState(0);

  const handleTimeChange = (e) => {
    e.preventDefault();
    setTargetTime(e.target.value * 1000);
  };
  console.log(targetTime);
  return (
    <section className='card-box'>
      <SetTimer handleTimeChange={handleTimeChange} />
      <Timer targetTime={targetTime} />
    </section>
  );
}
export default App;
