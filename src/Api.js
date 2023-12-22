import React, { Component } from "react";
import Formulaire from "./Formulaire.js";
import PhotoQuiz from "./Photo.js";
import Correct from "./Reponse.js";

class Api extends Component {
  state = {
    dataToPass: [
      {
        titleTaille: "Taille",
        titleType: "Type",
        titleCouleur: "Couleur",
        titleHabitat: "Habitat",
        titleWeight: "Poids",
      },
    ],
    pokemon: [],
    pokemonSpecies: [],
    habitat: [],
    couleur: [],
  };

  componentDidMount() {
    if (Array.isArray(this.state.pokemon)) {
      let id = Math.round(Math.random() * 1017);
      this.getPokemon("pokemon", "https://pokeapi.co/api/v2/pokemon/", id);
      this.getPokemonSpecies(
        "pokemonSpecies",
        "https://pokeapi.co/api/v2/pokemon-species/",
        id
      );
    }
  }

  getPokemon(features, link, id) {
    let url = link + id;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          [features]: result,
        });
      });
  }

  getPokemonSpecies(features, link, id) {
    let url = link + id;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          [features]: result,
        });
        this.getPokemon("habitat", result.habitat?.url, "");
        this.getPokemon("couleur", result.color?.url, "");
        this.getPokemon("name", result.name, "");
      });
  }

  // search pokemon.sprite?.front.default do a .map in the array
  // All black : filter: brightness(0%);

  // getPokemonPhoto(features, link, id) {
  //   let url = link + id;
  //   fetch(url)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       this.setState({
  //         [features]: result,
  //       });
  //       this.getPokemon("photo", result.sprite?.front.default?.url, "");
  //     });
  // }

  render() {
    const { dataToPass } = this.state;
    const { pokemon } = this.state;
    const { couleur } = this.state;
    const { habitat } = this.state;
    const { photo } = this.state;
    const { name } = this.state;
    return (
      <Formulaire
        tableDataContent={dataToPass}
        pokemon={pokemon}
        couleur={couleur}
        habitat={habitat}
        photo={pokemon.sprites?.front_default}
        name={name}
      />

      // (<PhotoQuiz photo={pokemon.sprites?.front_default} />)
      // (<PhotoQuiz photo={photo} />)
    );
  }
}

export default Api;
