import React from "react";
import ReactDOM from "react-dom";
import Api from "./Api.js";
import "./index.css";
import PhotoQuiz from "./Photo";
import Answer from "./Reponse";
import Quizz from "./Formulaire";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>PokéQuizz</h1>
    <Api />
    <Answer />
  </React.StrictMode>
);

//ReactDOM.render(<Quizz/>, document.getElementById("root"));
//ReactDOM.render(<PhotoQuiz/>, document.getElementById("root"));
