import React from "react";
import { useRef } from "react";

const CanvasBoard = ({ elements, setElements, tool, boardId, setTool }) => {
  const canvasRef = useRef(null);

  

  return (
    <>
      <canvas
        style={{
          backgroundColor: "beige",
        }}
        height={1000}
        width={800}
        ref={canvasRef}
      />
    </>
  );
};

export default CanvasBoard;
