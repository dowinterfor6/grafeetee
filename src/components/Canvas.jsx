import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({ state, SPRAY_PAINT }) => {
  const canvasRef = useRef();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [context, setContext] = useState();

  // temp
  const radius = 10;

  useEffect(() => {
    canvasRef.current.width = canvasRef.current.offsetWidth;
    canvasRef.current.height = canvasRef.current.offsetHeight;

    setContext(canvasRef.current.getContext("2d"));
  }, []);

  const handleSprayPaint = (e) => {
    // TODO: for non 100% hardness, allow on same spot
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    if (e.buttons !== 1 || state.activeTool !== SPRAY_PAINT) return;

    if (context) {
      context.beginPath();
      context.strokeStyle = state.color;
      context.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
      context.fillStyle = state.color;
      context.fill();
      context.stroke();
    }
  };

  return (
    <section className="canvas-container">
      <canvas id="canvas" ref={canvasRef} onMouseMove={handleSprayPaint} />
    </section>
  )
}

export default Canvas;
