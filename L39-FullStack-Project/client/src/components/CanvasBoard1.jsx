import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const CanvasBoard = ({ elements, setElements, tool, boardId, setTool }) => {
  const [drawing, setDrawing] = useState(false);
  const [newElement, setNewElement] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    elements.forEach((el) => drawElement(ctx, el));
  }, [elements]);

  // console.log(tool);

  function handleMouseDown(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // let drawingTools = ['rectangle', 'pen','ellipse'];
    // let indx = drawingTools.findIndex(tool);
    // if(indx !== -1) setDrawing(true);

    if (tool === "pen") {
      const id = uuidv4();
      setNewElement({
        id,
        type: "pen",
        points: [{ x, y }],
        strokeColor: "black",
        strokeWidth: 2,
      });
      setDrawing(true);
    } else if (tool === "rectangle") {
      const id = uuidv4();
      setNewElement({
        id,
        type: "rectangle",
        x,
        y,
        width: 0,
        height: 0,
        strokeColor: "#000000",
        strokeWidth: 2,
      });
      setDrawing(true);
    } else if (tool === "ellipse") {
      const id = uuidv4();

      setNewElement({
        id,
        type: "ellipse",
        x,
        y,
        width: 0,
        height: 0,
        strokeColor: "black",
        strokeWidth: 2,
      });
      setDrawing(true);
    }
  }

  function handleMouseUp(e) {
    setDrawing(false);
    setElements((prev) => [...prev, newElement]);
    // console.log(newElement);
  }

  function handleMouseMove(e) {
    if (!drawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setNewElement((el) => {
      if (el.type === "pen") {
        return {
          ...el,
          points: [...el.points, { x, y }],
        };
      } else if (el.type === "rectangle" || el.type === "ellipse") {
        return {
          ...el,
          width: x - el.x,
          height: y - el.y,
        };
      }
    });
  }

  return (
    <>
      <canvas
        style={{
          backgroundColor: "beige",
        }}
        height={1000}
        width={800}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </>
  );
};

function drawElement(ctx, el, isSelected = false) {
  ctx.strokeStyle = el.strokeColor || "black";
  ctx.lineWidth = el.strokeWidth || 2;
  if (isSelected) {
    ctx.strokeStyle = "blue";
  }
  if (el.type === "pen") {
    const points = el.points || [];
    if (points.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  } else if (el.type === "rectangle") {
    ctx.strokeRect(el.x, el.y, el.width, el.height);
  } else if (el.type === "ellipse") {
    // ctx.strokeStyle = el.strokeColor || "black";
    ctx.lineWidth = el.strokeWidth || 2;

    const width = el.width || 0;
    const height = el.height || 0;

    const cx = el.x + width / 2;
    const cy = el.y + height / 2;
    const radiusX = Math.abs(width) / 2;
    const radiusY = Math.abs(height) / 2;

    if (radiusX === 0 || radiusY === 0) return;

    ctx.beginPath();
    ctx.ellipse(cx, cy, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export default CanvasBoard;
