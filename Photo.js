import React, { Component } from "react";
import "./Photo.css";
import PhotoQuiz from "./Photo";

const photoPokemons = (props) => {
  let photoPokemon = [];

  props.pokemon.sprites?.front.default.map((photo, PhotoIndex) => {
    photoPokemon.push(photo.sprites.back_default);
  });
  return <div>{photoPokemon[0]}</div>;
};

class Photo extends Component {
  render() {
    const { photo } = this.props;
    return (
      <div className="Photo">
        <photo photo={photo} />
      </div>
    );
  }
}

// search pokemon.sprite?.front.default do a .map in the array
// All black : filter: brightness(0%);

export default Photo;
