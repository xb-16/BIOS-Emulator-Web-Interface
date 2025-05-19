import { useEffect } from "react";
import KeyElementsHandler from "../utils/KeyElementsHandler.jsx";
import ValueElementsHandler from "../utils/ValueElementsHandler.jsx";
import upDownKeysHandler from "../utils/upDownKeysHandler.js";
import { useSelector, useDispatch } from "react-redux";
import { navigationUpdate } from "../app/navigationActions.js";
import { subMenuSet } from "../app/subMenuSlice.js";
export default function SubMenu() {
  let tab = useSelector((state) => state.tab).tab;
  const dispatch = useDispatch();
  let keyElements = useSelector((state) => state.subMenu.keys);
  let descriptionItems = useSelector((state) => state.subMenu.descriptions);
  let valueElements = useSelector((state) => state.subMenu.values);
  let heading = useSelector((state) => state.subMenu.heading);
  let actual = upDownKeysHandler(keyElements, descriptionItems, keyElements.length);

  useEffect(() => {
    dispatch(navigationUpdate(1, descriptionItems[0]));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if(e.key == "Escape"){
        dispatch(subMenuSet({status : false}));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [actual]);

  return (
    <div className="telm">
      <div className="parent">
        <div className="border-b-2 text-center !p-[7px]">{heading}</div>
        <div className="child">
          <KeyElementsHandler keyElements={keyElements} actual={actual} />
          <ValueElementsHandler valueElements={valueElements} actual={(tab == 1) ? actual + 1 : actual} />
        </div>
      </div>
    </div>
  );
}
