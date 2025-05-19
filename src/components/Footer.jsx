import React from "react";
import { useSelector } from "react-redux";
export default function Footer() {
  let popup = useSelector((state) => state.popup);
  return (
    <footer className="bg-[#0089bb] min-h-[80px] flex flex-col justify-center place-items-center !p-1">
      {!popup.status ? (
        <>
          <div className="flex place-items-center justify-between w-[90%] !p-1">
            <div className="rowelm">f1</div>
            <div className="rowelm">help</div>
            <div className="rowelm">&uarr;&darr;</div>
            <div className="rowelm">select item</div>
            <div className="rowelm">-/+</div>
            <div className="rowelm">change values</div>
            <div className="rowelm">F9</div>
            <div className="rowelm">setup defaults</div>
          </div>
          <div className="flex place-items-center justify-between w-[90%] !p-1">
            <div className="rowelm">esc</div>
            <div className="rowelm">exit</div>
            <div className="rowelm">&harr;</div>
            <div className="rowelm">select menu</div>
            <div className="rowelm">Enter</div>
            <div className="rowelm">&ensp;execute commands</div>
            <div className="rowelm">F10</div>
            <div className="rowelm">save and exit</div>
          </div>
        </>
      ) : (
        <div className="!w-[40%] flex">
          <div className="flex gap-7">
            <div className="text-white">space</div>
            <div>select</div>
          </div>
          <div className="flex gap-7">
            <div className="text-white">enter</div>
            <div>accept</div>
          </div>
        </div>
      )}
    </footer>
  );
}
