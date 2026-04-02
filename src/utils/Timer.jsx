import React, { useEffect, useState } from "react";

const Timer = ({setTimeSpent ,lst}) => {
  const TOTAL_TIME = 30 * 60;

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  const timeSpent = TOTAL_TIME - timeLeft;
  useEffect(()=>{
        setTimeSpent(TOTAL_TIME - timeLeft);
  },[lst])


  return (
    <div className="font-bold">
        {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;