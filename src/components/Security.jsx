import KeyElementsHandler from "../utils/KeyElementsHandler.jsx";
import ValueElementsHandler from "../utils/ValueElementsHandler.jsx";
import upDownKeysHandler from "../utils/upDownKeysHandler.js";

let keyElements = [
  "Security Features:",
  "Password on boot:",
  "__BR__",
  "Password on boot:",
];
let valueElements = ["enter", "enter", "__BR__", "enabled"];
let descriptionItems = [
  "user password controls access to the system at boot.",
  "supervisor password controls access to the setup utility",
  "",
  "",
];
export default function Security() {
  let actual = upDownKeysHandler(keyElements, descriptionItems, 4);
  return (
    <div className="telm">
      <div className="parent">
        <div className="child">
          <KeyElementsHandler keyElements={keyElements} actual={actual}>
            <div className="elm not">supervisor password is:</div>
            <div className="elm not">user password is:</div>
            <br />
          </KeyElementsHandler>
          <ValueElementsHandler valueElements={valueElements} actual={actual}>
            <div className="elm not">set</div>
            <div className="elm not">set</div>
            <br />
          </ValueElementsHandler>
        </div>
      </div>
    </div>
  );
}
