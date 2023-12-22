import React, { Component } from "react";
import "./Formulaire.css";
import "./Validation.css";
import { useState } from "react";

const PokemonIsValid = (props) => {
  const [message, setMessage] = useState("");
  const pokemonName = props.pokemonName;
  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();

      // access input value from state
      console.log("this is the input : " + message);
      // access input value from event object
      console.log(event.target.value);
      console.log("User pressed Enter ✅");
      if (message == pokemonName) {
        console.log(" Correct Answer");
      }
    }
  };

  return (
    <form>
      Quel est ce pokémon :
      <input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default PokemonIsValid;
