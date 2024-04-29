import facebookIcon from "./images/icon-facebook.svg";
import pinterestIcon from "./images/icon-pinterest.svg";
import instagramIcon from "./images/icon-instagram.svg";
import { useEffect, useState } from "react";

function App() {
  const [dayTime, setDayTime] = useState(8);
  const [hourTime, setHourTime] = useState(23);
  const [minuteTime, setMinuteTime] = useState(59);
  const [secondTime, setSecondTime] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondTime((prevSecond) => {
        if (prevSecond > 0) {
          return prevSecond - 1;
        } else {
          // Reset seconds and decrease minutes
          setMinuteTime((prevMinute) => {
            if (prevMinute > 0) {
              return prevMinute - 1;
            } else {
              // Reset minutes and decrease hours
              setHourTime((prevHour) => {
                if (prevHour > 0) {
                  return prevHour - 1;
                } else {
                  // Reset hours and decrease days
                  setDayTime((prevDay) => {
                    if (prevDay > 0) {
                      return prevDay - 1;
                    } else {
                      // Countdown has ended, clear the interval
                      clearInterval(interval);
                      alert("Time is up!");
                      return 0;
                    }
                  });
                  return 23; // Reset hours to 23
                }
              });
              return 59; // Reset minutes to 59
            }
          });
          return 59; // Reset seconds to 59
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="main">
        <h1 className="title">We're launching soon</h1>
        <section className="timer">
          <div className="time day">{dayTime}</div>
          <div className="time hour">{hourTime}</div>
          <div className="time minute">{minuteTime}</div>
          <div className="time second">{secondTime}</div>
        </section>
        <footer className="footer">
          <img src={facebookIcon} alt="facebook icon" />
          <img src={pinterestIcon} alt="pinterest icon" />
          <img src={instagramIcon} alt="instagram icon" />
        </footer>
      </main>
    </>
  );
}

export default App;
