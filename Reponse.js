import React, {Component} from "react";
import "./Formulaire.css"

class Reponse extends Component {
    render() {
        return (
            <form>
                <label for="name">Quel est ce pokémon:</label>
                <input type="text"/>
            </form>
        );
    }
}

export default Reponse;