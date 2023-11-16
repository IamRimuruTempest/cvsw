"use client";
import { useEffect, useState } from "react";
const Timer = () => {
  //  const [days, setDays] = useState(0);
  //  const [hours, setHours] = useState(0);
  //  const [minutes, setMinutes] = useState(0);
  //  const [seconds, setSeconds] = useState(0);

  //  const [stopTimer, setStopTimer] = useState(false);

  //  useEffect(() => {
  //    const target = new Date("09/22/2023 23:59:59");

  //    const interval = setInterval(() => {
  //      const now = new Date();
  //      const difference = target.getTime() - now.getTime();

  //      // days
  //      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  //      setDays(d);

  //      // hours
  //      const h = Math.floor(
  //        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //      );
  //      setHours(h);

  //      //minutes
  //      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //      setMinutes(m);

  //      //seconds
  //      const s = Math.floor((difference % (1000 * 60)) / 1000);
  //      setSeconds(s);

  //     const formattedDays: string = d.toString().padStart(2, "0");
  //     //  const formattedDays = d.toString().padStart(2, "0");
  //      const formattedHours = h.toString().padStart(2, "0");
  //      const formattedMinutes = m.toString().padStart(2, "0");
  //      const formattedSeconds = s.toString().padStart(2, "0");

  //      setDays(formattedDays);
  //      setHours(formattedHours);
  //      setMinutes(formattedMinutes);
  //      setSeconds(formattedSeconds);

  //      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
  //        setStopTimer(true);
  //      }
  //    }, 1000);

  //    return () => clearInterval(interval);
  //  }, []);
  return (
    <div>
      <section id="home">
        <div className="relative bg-[#322979]">
          <div className=" text-[#FBB03B] flex flex-col justify-items-center items-center text-center max-w-screen-xl  mx-auto py-20 md:py-24">
            <div className=" flex gap-2 lg:gap-5  flex-center items-center">
              <div className="text-center ">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {/* {stopTimer ? "00" : days} */}
                  00
                </h1>
                <span>Days</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {/* {stopTimer ? "00" : hours} */}
                  00
                </h1>
                <span>Hours</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {/* {stopTimer ? "00" : minutes} */}
                  00
                </h1>
                <span>Minutes</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {/* {stopTimer ? "00" : seconds} */}
                  00
                </h1>
                <span>Seconds</span>
              </div>
            </div>

            <p className="uppercase text-2xl lg:text-xl mt-4">
              Until the grand opening of
            </p>
            <p className="uppercase  text-2xl lg:text-xl font-bold  mb-5">
              Cagayan Valley Startup Week 2023
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timer;
