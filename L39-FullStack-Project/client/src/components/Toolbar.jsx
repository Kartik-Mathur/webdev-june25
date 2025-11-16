import React from "react";

let tools = ["select", "pen", "ellipse", "rectangle"];

const Toolbar = ({ setActiveTool, activeTool }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        padding: "8px",
        borderBottom: "1px solid #ccc",
        alignItems: "center",
      }}
    >
      {tools.map((tool) => (
        <button
          key={tool}
          onClick={() => setActiveTool(tool)}
          style={{
            padding: "6px 12px",
            borderRadius: "4px",
            border:
              activeTool === tool ? "2px solid #007bff" : "1px solid #ccc",
            background: activeTool === tool ? "#e7f1ff" : "#fff",
            cursor: "pointer",
          }}
        >
          {tool.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
