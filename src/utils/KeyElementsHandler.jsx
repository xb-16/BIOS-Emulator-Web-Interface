export default function KeyElementsHandler({keyElements, actual, children}) {
    return (
        <div className="key">
        {children}
        {keyElements.map((item, index) => {
          if (item === "__BR__") return <br key={index} />;
          if (typeof item == "string")
            return (
              <div
                key={index}
                className="elm"
                style={index + 1 == actual ? { color: "white" } : {}}
              >
                {item}
              </div>
            );
          return (
            <div
              key={index}
              className={`elm ${item.arrow ? "arrow" : ""} ${item.add ? "add" : ""}`}
              style={index + 1 == actual ? { color: "white" } : {}}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    );
}