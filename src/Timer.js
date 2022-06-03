import { useState, useEffect } from "react";

const Timer = ({ targetTime }) => {
  const [time, setTime] = useState(60000);
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevState) => prevState - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (time === 0) {
      clearInterval(interval);
      playBeep();
    }
    return () => clearInterval(interval);
  }, [time, timerOn, targetTime]);

  const handleReset = () => {
    setTime(0);
    setTimerOn(false);
  };

  const handleSetSeconds = (targetTime) => {
    setTime(targetTime);
    setTimerOn(true)
  };

  const playBeep = () => {
    const audio = new Audio(
      "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
    );
    audio.play();
  };

  return (
    <div>
      <main>
        <h1>Countdown</h1>
        <div id="display-timer">
          <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)} :</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
          <span>{("0" + ((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div>
          <button onClick={() => handleSetSeconds(targetTime)} className="set">
            Start
          </button>
          <button
            onClick={() => setTimerOn(!timerOn)}
            className={timerOn ? "stop" : "resume"}
          >
            {timerOn ? "Pause Timer" : "Resume Timer"}
          </button>
          <button onClick={handleReset} className="reset">
            Reset
          </button>
        </div>
      </main>
    </div>
  );
};
export default Timer;
