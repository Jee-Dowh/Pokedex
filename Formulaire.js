import React, {Component} from "react";
import "./Formulaire.css"
class Formulaire extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Taille</th>
                        <th></th>
                        <th>1m</th>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <th></th>
                        <th>Éléctrique</th>
                    </tr>
                    <tr>
                        <th>Couleur</th>
                        <th></th>
                        <th>Jaune</th>
                    </tr>
                    <tr>
                        <th>Habitat</th>
                        <th></th>
                        <th>Ville</th>
                    </tr>
                </thead>
            </table>
        );
    }
}

export default Formulaire;