import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({ state, SPRAY_PAINT }) => {
  const canvasRef = useRef();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [context, setContext] = useState();

  useEffect(() => {
    adjustCanvasWidth();
    // canvasRef.current.width = canvasRef.current.offsetWidth;
    // canvasRef.current.height = canvasRef.current.offsetHeight;
    window.addEventListener('resize', adjustCanvasWidth);

    setContext(canvasRef.current.getContext("2d"));
  }, []);

  const adjustCanvasWidth = () => {
    canvasRef.current.width = canvasRef.current.offsetWidth;
    canvasRef.current.height = canvasRef.current.offsetHeight;
  }

  const handleSprayPaint = (e) => {
    // TODO: for non 100% hardness, allow on same spot
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    if (e.buttons !== 1 || state.activeTool !== SPRAY_PAINT) return;

    if (context) {
      context.strokeStyle = state.color;
      context.lineCap = "round";
      context.lineJoin = "round";

      context.globalAlpha = 1;
      context.lineWidth = state.thickness;
      context.lineTo(mouseX, mouseY);
      context.stroke();
    }
  };

  const handleMouseDown = () => {
    context.beginPath();
    context.moveTo(mouseX, mouseY);
  }

  const handleMouseUp = () => {
    context.closePath();
  }

  return (
    <section className="canvas-container">
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={handleSprayPaint}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </section>
  )
}

export default Canvas;
