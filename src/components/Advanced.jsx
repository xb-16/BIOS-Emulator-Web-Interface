import React, { useEffect } from "react";
import upDownKeysHandler from "../utils/upDownKeysHandler";
import KeyElementsHandler from "../utils/KeyElementsHandler";
import ValueElementsHandler from "../utils/ValueElementsHandler";
import { useDispatch } from "react-redux";
import {Advanced1SubMenuKeys, Advanced1SubMenuValues, Advanced1SubMenuDescriptions, Advanced2SubMenuKeys, Advanced2SubMenuValues, Advanced2SubMenuDescriptions, Advanced3SubMenuKeys, Advanced3SubMenuValues, Advanced3SubMenuDescriptions} from "../utils/subMenusList";
import { subMenuSet } from "../app/subMenuSlice.js";


let keyElements = [
  "Multiprocessor Specification:",
  "Installed O/S:",
  "Reset Configuration Data:",
  { text: "Cache Memory", arrow: true },
  { text: "I/O Device Configuration", arrow: true },
  "Large Disk Access Mode:",
  "Local Bus IDE adapter:",
  { text: "Advanced Chipset Control", arrow: true },
];
let descriptionItems = [
  "Configures the MP specification revision level.some operating systems will require 1.1 for cmpatibility reasons.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
let valuesElements = [
  <div className="elm curly black">
    <span>1.4</span>
  </div>,
  <div className="elm curly black">
    <span>Other</span>
  </div>,
  <div className="elm curly black">
    <span>No</span>
  </div>,
  <div className="elm empty">&ensp;</div>,
  <div className="elm empty">&ensp;</div>,
  <div className="elm curly black">
    <span>DOS</span>
  </div>,
  <div className="elm curly black">
    <span>Both</span>
  </div>,
  <div className="elm empty">&ensp;</div>,
];

export default function Advanced() {
  let dispatch = useDispatch();
  let actual = upDownKeysHandler(keyElements, descriptionItems, 8);


  useEffect(() => {
    const handleKeyDownSubMenu = (event) => {
      event.preventDefault();
      if (event.key == "Enter") {
        if(actual == 4) {
          dispatch(subMenuSet({ status: true, keys : Advanced1SubMenuKeys, values : Advanced1SubMenuValues, descriptions : Advanced1SubMenuDescriptions, heading : keyElements[actual - 1]?.text}));
        }
        if(actual == 5){
          dispatch(subMenuSet({ status: true, keys : Advanced2SubMenuKeys, values : Advanced2SubMenuValues, descriptions : Advanced2SubMenuDescriptions, heading : keyElements[actual - 1]?.text}));
        }
        if(actual == 8){
          dispatch(subMenuSet({ status: true, keys : Advanced3SubMenuKeys, values : Advanced3SubMenuValues, descriptions : Advanced3SubMenuDescriptions, heading : keyElements[actual - 1]?.text}));
        }
      }
    }

    window.addEventListener("keydown", handleKeyDownSubMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDownSubMenu);
    }
  }, [actual, dispatch]);


  return (
    <div className="telm">
      <div className="parent">
        <div className="child">
          <KeyElementsHandler keyElements={keyElements} actual={actual} />

          <ValueElementsHandler
            valueElements={valuesElements}
            actual={actual}
          />
        </div>
      </div>
    </div>
  );
}
