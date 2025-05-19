import React from "react";
import { useSelector } from "react-redux";

function styleInnerSpanBasedOnParent(parent, startFrom, actual) {
  if (!React.isValidElement(parent)) return parent;

  const className = parent.props.className || "";
  const isBlack = className.includes("black");

  // Get children (assuming direct <span>)
  const children = React.Children.map(parent.props.children, (child) => {
    if (React.isValidElement(child) && child.type == "span") {
      const baseStyle = child.props.style || {};
      const shouldHighlight = startFrom == actual;

      const style = {
        ...baseStyle,
        color: isBlack
          ? shouldHighlight
            ? "#ABAAAB"
            : "black"
          : shouldHighlight
          ? "white"
          : baseStyle.color,
        backgroundColor: shouldHighlight ? "black" : baseStyle.backgroundColor,
      };

      return React.cloneElement(child, { style });
    }

    return child;
  });

  return React.cloneElement(parent, {
    children,
  });
}

export default function ValueElementsHandler({ valueElements, actual , children }) {
  let tab = useSelector((state) => state.tab);
  let startFrom;
  return (
    <div className="value">
      {children}
      {valueElements.map((item, index) => {
        startFrom = index + 2;
        if(tab.tab != 1){
          startFrom = index + 1;
        }
        if (item == "__BR__") return <br key={startFrom} />;

        if (React.isValidElement(item)) {
          const styled = styleInnerSpanBasedOnParent(item, startFrom, actual);
          return React.cloneElement(styled, { key: startFrom, actual });
        }

        return (
          <div
            key={startFrom}
            className="elm curly"
            style={{
              color: startFrom === actual ? "black" : undefined,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
