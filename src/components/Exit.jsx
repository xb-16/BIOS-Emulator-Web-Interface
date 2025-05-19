import { useEffect } from "react";
import KeyElementsHandler from "../utils/KeyElementsHandler.jsx";
import upDownKeysHandler from "../utils/upDownKeysHandler.js";

let keyElements = [
  "exit saving changes",
  "exit discarding changes",
  "load setup defaults",
  "discard changes",
  "save changes",
];
let descriptionItems = [
  "exit system setup and save  your changes to CMOS.",
  "exit utility without saving setup data to CMOS.",
  "load default values for all SETUP items.",
  "load previous values from CMOS for all SETUP items.",
  "save setup data to CMOS",
];
export default function Exit() {
  let actual = upDownKeysHandler(keyElements, descriptionItems, 5);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key == "Enter") {
        if (actual == 1) {
          dispatchEvent(new KeyboardEvent("keydown", { key: "F10" }));
        }
        if (actual == 3) {
          dispatchEvent(new KeyboardEvent("keydown", { key: "F9" }));
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [actual]);
  return (
    <div className="telm">
      <div className="parent">
        <div className="child">
          <KeyElementsHandler keyElements={keyElements} actual={actual} />
        </div>
      </div>
    </div>
  );
}
