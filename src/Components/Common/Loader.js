import React from "react";

export function Loader() {
  return (
    <div className="text-center">
      {/* LOADEAR */}
      <div>
        <div
          className="loader-img"
          style={{
            width: "80px",
            height: "80px",

            borderRadius: "50%",
            position: "absolute",
            margin: "auto",
            animation: "spin 2s linear infinite",
            border: "4px solid rgba(81, 75, 130, 0.1)",
            borderTopColor: "#514b82",
            background: "transparent",
          }}>
          {/* Loader */}
          {/* Your loader content goes here */}
          {/* End Loader */}
        </div>
      </div>
      {/* END LOADEAR */}
    </div>
  );
}

export function Loader2() {
  return (
    <div className="text-center">
      {/* LOADEAR */}
      <div>
        <div
          className="loader-img"
          style={{
            width: "fit-content",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "16px",
            paddingBottom: "8px",
            background:
              "linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat",
            animation: "l2 2s linear infinite",
          }}>
          {/* Loader */}
          Loading...
          {/* End Loader */}
        </div>
      </div>
      {/* END LOADEAR */}
    </div>
  );
}

// CSS animation definition
const styles = `
  @keyframes l2 {
    to {
      background-size: 100% 3px;
    }
  }
`;

export default Loader; // Exporting Loader as default
