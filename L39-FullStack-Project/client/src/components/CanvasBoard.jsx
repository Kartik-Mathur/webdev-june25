import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CanvasBoard = ({ elements, setElements, tool, boardId, setTool }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pen = canvas.getContext('2d');
  }, [elements]);
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
