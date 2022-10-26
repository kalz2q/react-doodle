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

    // draw
    if (context !== null) {
      context.lineWidth = 10;
      context.strokeStyle =  "blue"
      context.strokeRect(0,0,canvasElem.width, canvasElem.height);
      // context.fillRect(0, 0, canvasElem.width, canvasElem.height);
      context.fillStyle = "yellow";
      context.fillRect(50, 50, 50, 50);
      context.fillRect(canvasElem.width - 100, 50, 50, 50);
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
