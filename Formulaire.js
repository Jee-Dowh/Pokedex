import React, { Component } from "react";
import "./Formulaire.css";
import PhotoQuiz from "./Photo";
import { tab } from "@testing-library/user-event/dist/tab";

const TableHeader = (props) => {
  const rowsHeader = props.tableHeaderContent.map((row, index) => {
    return (
      <thead key={index}>
        <tr>
          <th>{row.titleTaille}</th>
        </tr>
        <tr>
          <th>{row.titleWeight}</th>
        </tr>
        <tr>
          <th>{row.titleType}</th>
        </tr>
        <tr>
          <th>{row.titleCouleur}</th>
        </tr>
        <tr>
          <th>{row.titleHabitat}</th>
        </tr>
      </thead>
    );
  });
  return <thead className="TableHeader">{rowsHeader}</thead>;
};

const TableBody = (props) => {
  let pokemonTypes = [];

  props.pokemon.types?.map((PokemonType, TypeIndex) => {
    pokemonTypes.push(PokemonType.type.name);
  });

  return (
    <tbody>
      <tr>
        <td>{props.pokemon.height / 10} m</td>
      </tr>
      <tr>
        <td>{props.pokemon.weight / 10} kg</td>
      </tr>
      <tr>
        <td>
          {pokemonTypes[0]}
          <span> </span>
          {pokemonTypes[1]}
          <span> </span>
          {pokemonTypes[2]}
        </td>
      </tr>
      <tr>
        <td>{props.couleur.name}</td>
      </tr>
      <tr>
        <td>{props.habitat.name}</td>
      </tr>
    </tbody>
  );
};

class Formulaire extends Component {
  render() {
    const { tableDataContent, pokemon, couleur, habitat } = this.props;
    return (
      <div>
        <table>
          <TableHeader tableHeaderContent={tableDataContent} />
          <TableBody
            tableBodyContent={tableDataContent}
            pokemon={pokemon}
            couleur={couleur}
            habitat={habitat}
          />
        </table>
        <img src={pokemon.sprites?.front_default} />
      </div>
    );

    //   <table>
    //     <TableHeader tableHeaderContent={tableDataContent} />
    //     <TableBody
    //       tableBodyContent={tableDataContent}
    //       pokemon={pokemon}
    //       couleur={couleur}
    //       habitat={habitat}
    //     />
    //   </table>
    // );
  }
}

export default Formulaire;
