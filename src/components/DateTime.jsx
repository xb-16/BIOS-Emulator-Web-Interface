import React, { useEffect, useState } from "react";

const pad = (num) => num.toString().padStart(2, "0");
export default function DateTime({ actual }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedDate = `${pad(now.getMonth() + 1)}/${pad(
        now.getDate()
      )}/${now.getFullYear()}`;
      const formattedTime = `${pad(now.getHours())}:${pad(
        now.getMinutes()
      )}:${pad(now.getSeconds())}`;

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime(); // Initial render
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <div className="elm curly black">
        <span style={actual == 1 ? { color: "#ABAAAB", backgroundColor: "black" } : {}}> {time} </span>
      </div>
      <div className="elm curly black">
        <span style={actual == 2 ? { color: "#ABAAAB", backgroundColor: "black" } : {}}> {date} </span>
      </div>
    </div>
  );
}
