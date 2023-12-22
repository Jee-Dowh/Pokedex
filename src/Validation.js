import React, { Component } from "react";
import "./Formulaire.css";
import "./Validation.css";
import { useState } from "react";

const PokemonIsValid = (props) => {
  const [message, setMessage] = useState("");
  const pokemonName = props.pokemon.name;
  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();

      // access input value from state
      // console.log(message);
      // access input value from event object
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

class Validation extends Component {
  render() {
    const { pokemon } = this.props;
    return <PokemonIsValid name={pokemon.name} />;
  }
}

export default Validation;
