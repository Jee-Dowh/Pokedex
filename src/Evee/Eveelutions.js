import React, { Component } from "react";

/*const EveelutionsHeader = () =>{
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
        </thead>
    );
};

class Eveelutions extends Components {
    render()  {
        return (
            <table>
                <EveelutionsHeader/>
            </table>
        );
    }
}

const EveelutionsBody = () => { 

}; */

class Eveelutions extends Component {
    render (){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Leafeon</td>
                        <td>Grass</td>
                    </tr>
                    <tr>
                        <td>Vaporeon</td>
                        <td>Water</td>
                    </tr>
                    <tr>
                        <td>Jolteon</td>
                        <td>Electric</td>
                    </tr>
                    <tr>
                        <td>Flareon</td>
                        <td>Fire</td>
                    </tr>
                    <tr>
                        <td>Umbreon</td>
                        <td>Dark</td>
                    </tr>
                    <tr>
                        <td>Glaceon</td>
                        <td>Ice</td>
                    </tr>
                    <tr>
                        <td>Espeon</td>
                        <td>Psychic</td>
                    </tr>
                    <tr>
                        <td>Sylveon</td>
                        <td>Fairy</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


export default Eveelutions;