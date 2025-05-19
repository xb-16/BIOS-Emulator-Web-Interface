import KeyElementsHandler from "../utils/KeyElementsHandler.jsx";
import upDownKeysHandler from "../utils/upDownKeysHandler.js";

let keyElements = [
  "CD-ROM drive",
  { text: "hard drive", add: true },
  { text: "removable devices", add: true },
  "network boot from amd am79c970A",
];

let descriptionItems = [
  "Keys used to view or configure devices: <Enter> expands or collapses devices with a + or - <Ctrl+Enter> expands all <+> and <-> moves the device up or down.<n> May move removable device between Hard Disk or Removable Disk <d> Remove a device that is not installed.",
  "",
  "",
  "",
];
export default function Boot() {
  let actual = upDownKeysHandler(keyElements, descriptionItems, 4);

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
