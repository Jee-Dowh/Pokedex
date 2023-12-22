import React, { Component } from "react";
import "./Formulaire.css";
import "./Reponse.css";
import { useState } from "react";

// const validation = (props) => {

// });

// };

const PokemonIsValid = (props) => {
  // const { pokemon } = this.props;
  const [message, setMessage] = useState("");
  const handleKeyDown = (event) => {
    console.log(event.key);
    console.log(props.name);

    if (event.key === "Enter") {
      event.preventDefault();
      if (message == props.name) {
        prompt("Correct !");
      }

      // 👇️ access input value from state
      console.log(message);

      // 👇️ access input value from event object
      // console.log(event.target.value)

      console.log("User pressed Enter ✅");
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
