import React from 'react';
import './App.css';
const { useRef } = React;


// type IRect = {
//   width: number;
//   height: number;
//   left: number;
//   right: number;
//   top: number;
//   bottom: number;
// }

function App() {
  // const width = 400;
  // const height = 200;
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  // if (!canvasRef) return;
  const context = canvasRef.current;
  // let mouseX: number | null = null;
  // let mouseY: number | null = null;

  // const getContext = (): CanvasRenderingContext2D => {
  //   const canvas: any = canvasRef.current;
  //   return canvas.getContext('2d');
  // };

  // const OnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
  //   if (e.button !== 0) { return; }
  //   const canvas: any = canvasRef.current;
  //   // const rect: IRect = canvas.getBoundingClientRect();
  //   const rect = canvas.getBoundingClientRect();
  //   const x = ~~(e.clientX - rect.left);
  //   const y = ~~(e.clientY - rect.top);
  //   Draw(x, y);
  // }

  // const OnMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
  //   if (e.buttons !== 1) { return; }
  //   const canvas: any = canvasRef.current;
  //   // const rect: IRect = canvas.getBoundingClientRect();
  //   const rect = canvas.getBoundingClientRect();
  //   const x = ~~(e.clientX - rect.left);
  //   const y = ~~(e.clientY - rect.top);
  //   Draw(x, y);
  // }

  // const DrawEnd = (e: React.MouseEvent<HTMLCanvasElement>) => {
  //   mouseX = null;
  //   mouseY = null;
  // }

  // const Draw = (x: number, y: number) => {
  //   const ctx = getContext();
  //   ctx.beginPath();
  //   ctx.globalAlpha = 1.0;
  //   if (mouseX === null || mouseY === null) {
  //     ctx.moveTo(x, y);
  //   } else {
  //     ctx.moveTo(mouseX, mouseY);
  //   }
  //   ctx.lineTo(x, y);
  //   ctx.lineCap = "round";
  //   ctx.lineWidth = 20;
  //   // ctx.strokeStyle = "#000000";
  //   ctx.strokeStyle = "DarkGreen";
  //   ctx.stroke();
  //   mouseX = x;
  //   mouseY = y;
  // }

  // const reset = () => {
  //   const ctx = getContext();
  //   const canvas: any = canvasRef.current;
  //   // ctx.clearRect(0, 0, width, height);
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // }

  return (
    <div className="App">
      <div>
        <canvas width="400" height="200" className="mycanvas">
          canvas
        </canvas>
      </div>
    </div>
  );
}


export default App;
