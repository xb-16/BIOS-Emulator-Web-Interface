import { useEffect, useRef, useState } from "react";

export default function Help() {
  const contentRef = useRef(null);
  const [displayContinue, setdisplayContinue] = useState(true);
  console.log(displayContinue.current);
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.key == "ArrowDown") {
        contentRef.current.scrollTop += 50;
      }
      if (e.key == "ArrowUp") {
        contentRef.current.scrollTop -= 50;
      }
      if (
        contentRef.current.scrollTop >=
        contentRef.current.scrollHeight - contentRef.current.clientHeight
      ) {
        setdisplayContinue(false);
      } else {
        setdisplayContinue(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="bg-[#b6b3b0] text-[#0019cb] !p-6 box-content h-[100vh]">
      <div className="relative border-2 border-black">
        <h1 className="border-b-2 border-black p-3 text-center">
          General Help
        </h1>
        <div className="!p-3  !h-[80vh] overflow-y-hidden" ref={contentRef}>
          Setup changes system behavior by modifying the BIOS Configuration
          parameters. Selecting incorrect values may cause system boot failure;
          load Setup Default values to recover.
          <br />
          <br />
          &lt;Up/Down&gt; arrows select fields in current menu.
          <br />
          &lt;PgUp/PgDn&gt; moves to previous/next page on scrollable menus.
          <br />
          &lt;Home/End&gt; moves to top/bottom item of current menu.
          <br />
          <br />
          Within a field,&lt;F5&gt; or &lt;-&gt; selects next lower value and
          &lt;F6&gt;, &lt;+&gt;, or &lt;Space&gt; selects next higher value.
          <br />
          <br />
          &lt;Left/Right&gt; arrows select menus on menu bar. &lt;Enter&gt;
          displays more options for items marked with a&, &lt;Enter&gt; also
          displays an option list on some fields.
          <br />
          <br />
          &lt;F9&gt; loads factory-installed Setup Default values.
          <br />
          &lt;F10&gt; restores previous values from CMOS.
          <br />
          <br />
          &lt;ESC&gt; or &lt;Alt-X&gt; exits Setup: in sub-menus, pressing these
          keys returns to the previous menu.
          <br />
          <br />
          &lt;F1&gt; or &lt;Alt-H&gt; displays General Help (this screen).
          <br />
          <br />
          <br />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#b6b3b0] w-full text-center">
          {displayContinue && <span className="curly">continue</span>}
        </div>
      </div>
    </div>
  );
}
