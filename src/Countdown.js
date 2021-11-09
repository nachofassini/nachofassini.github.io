import { useCallback, useEffect, useState } from "react";

const TimeBox = ({ value, measure }) => (
  <div
    style={{
      display: "inline-block",
      minWidth: 60,
      padding: 15,
      backgroundColor: "#020b43",
      borderRadius: 10,
      border: "2px solid #030d52",
      margin: 10,
    }}
  >
    {value}
    <span
      style={{
        color: "#fff",
        display: "block",
        marginTop: 15,
        fontSize: ".35em",
        fontWeight: 400,
      }}
    >
      {measure}
    </span>
  </div>
);

// const initialDate = moment("20211021 1425", "YYYYMMDD HHII");
// const returnDate = moment("20211112 0930", "YYYYMMDD HHII");
// const initialDate = Date.parse("oct 21, 2021 14:25:00");
const returnDate = Date.parse("nov 12, 2021 09:30:00");

const Countdown = () => {
  const [returnIn, setReturnIn] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateTimer = useCallback(() => {
    const now = new Date();

    const diff = returnDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diff / (1000 * 60));
    const diffInSeconds = Math.floor(diff / 1000);

    const hours = diffInHours - days * 24;
    const minutes = diffInMinutes - diffInHours * 60;
    const seconds = diffInSeconds - diffInMinutes * 60;
    setReturnIn({ days, hours, minutes, seconds });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [updateTimer]);

  return (
    <div
      style={{
        fontSize: "1.5em",
        fontWeight: 200,
        color: "#fff",
        padding: 10,
      }}
    >
      <TimeBox value={returnIn.days} measure="Dias" />
      <TimeBox value={returnIn.hours} measure="Horas" />
      <TimeBox value={returnIn.minutes} measure="Minutos" />
      <TimeBox value={returnIn.seconds} measure="Segundos" />
    </div>
  );
};

export default Countdown;
