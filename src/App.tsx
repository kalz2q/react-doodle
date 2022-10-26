import React from 'react';
import './App.css';
const { useEffect, useState } = React;

function App() {
  const [png, setPng] = useState<string | null>(null);



  useEffect(() => {
    let ctx,
      drawFlag = false,
      prevX = 0,
      currX = 0,
      prevY = 0,
      currY = 0,
      dotFlag = false;

    const canvasElem = document.createElement("canvas");
    const context = canvasElem.getContext("2d");

    canvasElem.addEventListener("mousemove", event => getCoordinate(event));
    const getCoordinate = (event: MouseEvent) => {
      if ((event.type === 'mousedown') || (event.type === 'mousemove')) {
        prevX = currX;
        prevY = currY;
        currX = event.clientX - canvasElem.offsetLeft;
        currY = event.clientY - canvasElem.offsetTop;
      }
    }

    canvasElem.width = 400;
    canvasElem.height = 200;

    // draw
    if (context !== null) {
      context.lineWidth = 10;
      context.strokeStyle = "blue"
      context.strokeRect(0, 0, canvasElem.width, canvasElem.height);




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
