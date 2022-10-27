import React from 'react';
import './App.css';
const { useEffect, useState } = React;

function App() {
  const [png, setPng] = useState<string | null>(null);



  useEffect(() => {
    const canvasElem = document.createElement("canvas");
    const context = canvasElem.getContext("2d");
    canvasElem.width = 400;
    canvasElem.height = 200;
    let startX: number, startY: number, x: number, y: number,
      borderWidth = 10;




    // draw
    if (context !== null) {
      context.lineWidth = 10;
      context.strokeStyle = "blue"
      context.strokeRect(0, 0, canvasElem.width, canvasElem.height);
      canvasElem.addEventListener("mousedown", event => getCoordinate(event));
      canvasElem.addEventListener("mousemove", event => getCoordinate(event));
      const getCoordinate = (event: MouseEvent) => {
        if (event.type === 'mousedown') {
          startX = event.pageX - canvasElem.offsetLeft - borderWidth;
          startY = event.pageY - canvasElem.offsetTop - borderWidth;
        } else if (event.type === 'mousemove') {
          x = event.pageX - canvasElem.offsetLeft - borderWidth;
          y = event.pageY - canvasElem.offsetTop - borderWidth;
          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(x, y);
          context.stroke();
          startX = x;
          startY = y;
        }
      }
    }
    setPng(canvasElem.toDataURL());
  }, [png]);

  return (
    <div className="App">
      <h1>お絵かきアプリ</h1>
      {png && <img alt="" src={png} />}
    </div>
  );
}

export default App;
