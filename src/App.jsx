import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Popup from "./components/Popup.jsx";
import Main from "./components/Main.jsx";
import Advanced from "./components/Advanced.jsx";
import Security from "./components/Security.jsx";
import Boot from "./components/Boot.jsx";
import Exit from "./components/Exit.jsx";
import SubMenu from "./components/SubMenu.jsx";

import { useSelector, useDispatch } from "react-redux";

import { next, prev } from "./app/tabSlice.js";
import { popupSet } from "./app/popupSlice.js";
import { helpSet } from "./app/helpSlice.js";
import Help from "./components/Help.jsx";
import ItemDescription from "./components/ItemDescription.jsx";
import { navigationUpdate } from "./app/navigationActions.js";

function App() {
  if (window.innerWidth < 960) {
    alert(
      "You Can't Navigate BIOS effectively, Please Use Scren With Long Width For Best Experience."
    );
  }

  // disabling right Click Using Mouse.
  document.oncontextmenu = (e) => {
    e.preventDefault();
  };

  let actualTab = useSelector((state) => state.tab);
  let popup = useSelector((state) => state.popup);
  let help = useSelector((state) => state.help);
  let subMenu = useSelector((state) => state.subMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (!subMenu.status || !popup.status) {
        if (e.key == "ArrowRight") {
          dispatch(next());
          dispatch(navigationUpdate(1, ""));
        }
        if (e.key == "ArrowLeft") {
          dispatch(prev());
          dispatch(navigationUpdate(1, ""));
        }
      }
      if (e.key == "F9") {
        dispatch(
          popupSet({ status: true, msg: "Load Default Configuration Now ?" })
        );
      }
      if (e.key == "F10") {
        dispatch(
          popupSet({
            status: true,
            msg: "Save Configuration Changes and Exit Now ?",
          })
        );
      }
      if (e.key == "F1") {
        dispatch(helpSet({ status: !help.status }));
      }
      if (e.key == "Escape") {
        dispatch(helpSet({ status: false }));
        dispatch(popupSet({ status: false, msg: "" }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [actualTab, popup, help, subMenu, dispatch]);

  return (
    <>
      {!help.status ? (
        <>
          <Navbar tab={actualTab.tab} isSubMenuDisplayed={subMenu.status} />

          <div className="tabsContainer">
            {!subMenu.status ? (
              <>
                {actualTab.tab == 1 && <Main />}
                {actualTab.tab == 2 && <Advanced />}
                {actualTab.tab == 3 && <Security />}
                {actualTab.tab == 4 && <Boot />}
                {actualTab.tab == 5 && <Exit />}
              </>
            ) : (
              <SubMenu />
            )}

            <ItemDescription />
          </div>

          <Footer />
          {popup.status && <Popup msg={popup.msg} />}
        </>
      ) : (
        <Help />
      )}
    </>
  );
}

export default App;
