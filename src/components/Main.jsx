import DateTime from "./DateTime.jsx";
import KeyElementsHandler from "../utils/KeyElementsHandler.jsx";
import ValueElementsHandler from "../utils/ValueElementsHandler.jsx";
import upDownKeysHandler from "../utils/upDownKeysHandler.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { subMenuSet } from "../app/subMenuSlice.js";
import { Main1SubMenuKeys, Main1SubMenuValues, Main1SubMenuDescriptions, Main5SubMenuKeys, Main5SubMenuValues, Main5SubMenuDescriptions } from "../utils/subMenusList.jsx";

const keyElements = [
  "system time :",
  "system date :",
  "__BR__",
  "legacy diskette a :",
  "legacy diskette b :",
  "__BR__",
  { text: "primary master", arrow: true },
  { text: "primary slave", arrow: true },
  { text: "secondary master", arrow: true },
  { text: "secondary slave", arrow: true },
  "__BR__",
  { text: "keyboard features", arrow: true },
  "__BR__",
  "system memory :",
  "extended memory :",
  "boot time diagnostic screen",
];

const valueElements = [
  <DateTime />,
  "__BR__",
  <div className="elm curly black">
    <span>
      1.44/1.25 MB 3<sup>1/2&quot;</sup>
    </span>
  </div>,
  <div className="elm curly black">
    <span>disabled</span>
  </div>,
  "__BR__",
  "Vmware Virtual iD",
  "none",
  "Vmware Virtual ID",
  "none",
  "__BR__",
  <div className="elm empty">&ensp;</div>,
  "__BR__",
  "640 KB",
  "236540 KB",
  <div className="elm curly black">
    <span>disabled</span>
  </div>,
];

let descriptionItems = [
  "<tab>, <shift-tab>, or <enter>; selects fields",
  "",
  "selects floppy type. note that 1.25MB 33<sup>1/2</sup></div> refernces a 1024 byte/sector japanese media format. the 1.25 mb.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "b",
];
export default function Main() {
  const dispatch = useDispatch();
  let actual = upDownKeysHandler(keyElements, descriptionItems, 16);


  useEffect(() => {
    const handleKeyDownSubMenu = (event) => {
      event.preventDefault();
      if (event.key == "Enter") {
        if(actual == 7 || actual == 8 || actual == 9 || actual == 10) {
          dispatch(subMenuSet({ status: true, keys : Main1SubMenuKeys, values : Main1SubMenuValues, descriptions : Main1SubMenuDescriptions, heading : keyElements[actual - 1]?.text}));
        }
        if(actual == 12) {
          dispatch(subMenuSet({ status: true, keys : Main5SubMenuKeys, values : Main5SubMenuValues, descriptions : Main5SubMenuDescriptions, heading : keyElements[actual - 1]?.text}));
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
          <ValueElementsHandler valueElements={valueElements} actual={actual} />
        </div>
      </div>
    </div>
  );
}
