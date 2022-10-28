import React from 'react';
import './App.css';
const { useEffect, useState, useCallback } = React;

function App() {
  const [png, setPng] = useState<string | null>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);

  type Coordinate = {
    x: number;
    y: number;
  };




  useEffect(() => {
    const canvasElem = document.createElement("canvas");
    const context = canvasElem.getContext("2d");
    canvasElem.addEventListener("mousedown", event => startPaint(event));

    canvasElem.width = 400;
    canvasElem.height = 200;



    // ---
    if (context !== null) {
      context.lineWidth = 10;
      context.strokeStyle = "blue"
      context.strokeRect(0, 0, canvasElem.width, canvasElem.height);


      canvasElem.addEventListener("mousemove", event => getCoordinate(event));


      const startPaint = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
          setMousePosition(coordinates);
          setIsPainting(true);
        }
      }, []);

      const paint = useCallback(
        (event: MouseEvent) => {
          if (isPainting) {
            const newMousePosition = getCoordinates(event);
            if (mousePosition && newMousePosition) {
              drawLine(mousePosition, newMousePosition);
              setMousePosition(newMousePosition);
            }
          }
        },
        [getCoordinates]
      );


      const getCoordinates = (event: MouseEvent) => {
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
  }, [png, isPainting, mousePosition]);

  return (
    <div className="App">
      <h1>お絵かきアプリ</h1>
      {png && <img alt="" src={png} />}
    </div>
  );
}

export default App;
