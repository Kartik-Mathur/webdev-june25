import React from "react";
import { useRef } from "react";

const CanvasBoard = ({ elements, setElements, tool, boardId }) => {
  const canvasRef = useRef(null);
    

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default CanvasBoard;
