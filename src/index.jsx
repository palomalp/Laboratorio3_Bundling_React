import React from "react";
//ReactDOM, como interactúa react con una aplicación web:
import ReactDOM from "react-dom";
import { AverageComponent } from "./averageComponent";
import { TotalScoreComponent } from './totalScoreComponent';
import logoImg from './content/logo_1.png';

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <AverageComponent />
    <TotalScoreComponent />
  </div>,
  document.getElementById("root")
);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild (img);

