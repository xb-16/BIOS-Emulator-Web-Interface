import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { choicesSet } from "../app/choicesSlice";
import { popupSet } from "../app/popupSlice";

let styleOfChoice = {
  background: "black",
  color: "white",
};
export default function Popup({ msg }) {
  let choice = useSelector((state) => state.choices);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.key == " ") {
        dispatch(choicesSet({ status: !choice.status }));
      }
      if (e.key == "Enter") {
        dispatch(popupSet({ status: false, msg: "" }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [choice, dispatch]);
  return (
    <div
      style={{ animation: ".3s old" }}
      className="z-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#fffefb] min-w-[500px] w-fit !px-[5px] !py-[12px] shadow-[10px_15px] flex flex-col text-center text-[#212055] overflow-hidden"
    >
      <div className="!p-[15px] border-2 border-black">setup confirmation</div>
      <div className="!p-[15px] border-2 border-black">
        <div className="qs">{msg}</div>
        <br />
        <div className="flex flex-row justify-evenly">
          <div
            className="curly"
            style={choice.status == true ? styleOfChoice : {}}
          >
            yes
          </div>
          <div
            className="curly"
            style={choice.status == false ? styleOfChoice : {}}
          >
            no
          </div>
        </div>
      </div>
    </div>
  );
}
