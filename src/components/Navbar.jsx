import React from "react";
import { useSelector } from "react-redux";

const activeStyle = {
  background: "#B6B3B0",
  color: "#0019CB",
};

const switches = ["Main", "Advanced", "Security", "Boot", "Exit"];

export default function Navbar({ tab, isSubMenuDisplayed }) {
  const tabSelected = useSelector((state) => state.tab).tab;

  return (
    <div>
      <div className="bg-[#0089BB] text-center !p-[10px]">PhoenixBIOS Setup Utility</div>
      <div className="flex bg-[#0019cb] text-[#b6b3b0]">
        {isSubMenuDisplayed ? (
          <div className="w-[10%] !p-[10px] text-center !font-[400]" style={activeStyle}>
            {switches[tabSelected - 1]}
            
          </div>
        ) : (
          switches.map((item, index) => (
            <div
              key={index}
              className="w-[10%] !p-[10px] text-center !font-[400]"
              style={index + 1 === tab ? activeStyle : {}}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
