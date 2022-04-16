import { useEffect, useState } from "react";

export const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let id;
  useEffect(() => {
    id = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinutes(minutes + 1);
        setSecond(0);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  const restart = () => {
    setSecond(0);
    setMinutes(0);
  };
  const stop = () => {
    clearInterval(id);
  };
  return (
    <div>
      <h2>Timer</h2>
      <h1>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {second < 10 ? "0" + second : second}
      </h1>
      <button className="restart" onClick={restart}>
        Reset
      </button>
      <button className="stop" onClick={stop}>
        Stop
      </button>
    </div>
  );
};
