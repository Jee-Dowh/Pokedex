import React from "react";
import ReactDOM from "react-dom";
import TestComponent from "./Test";
import "./index.css";
import PhotoQuiz from "./Photo";
import Answer from "./Reponse"
import Quizz from "./Formulaire";

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Quizz/>
        <Answer/>
    </React.StrictMode>
);

//ReactDOM.render(<Quizz/>, document.getElementById("root"));
//ReactDOM.render(<PhotoQuiz/>, document.getElementById("root"));