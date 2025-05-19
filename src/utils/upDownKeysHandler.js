import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../app/ItemsSlice.js";
import { navigationUpdate } from "../app/navigationActions";

export default function upDownKeysHandler(
  keyElements,
  descriptionItems,
  countKeysElements
) {
  let actual = useSelector((state) => state.items.actual);
  let desc = useSelector((state) => state.description);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCount({ count: countKeysElements }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();

      if (e.key == "ArrowDown") {
        const next = keyElements[actual] == "__BR__" ? actual + 2 : actual + 1;
        if(actual >= countKeysElements){
          dispatch(navigationUpdate(1, descriptionItems[0]));
          return;
        }
        let nextDescription =
          keyElements[actual] == "__BR__" ? next - 2 : next - 1;
        dispatch(navigationUpdate(next, descriptionItems[nextDescription]));
      }

      if (e.key == "ArrowUp") {
        const next =
          keyElements[actual - 2] == "__BR__" ? actual - 2 : actual - 1;
        if(actual == 2){
          dispatch(navigationUpdate(1, descriptionItems[0]));
          return;
        }
        let nextDescription =
          keyElements[actual] == "__BR__" ? next - 2 : next - 1;
        dispatch(navigationUpdate(next, descriptionItems[nextDescription]));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [actual, desc, dispatch]);
  return actual;
}
