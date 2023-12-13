import React, {Component} from "react";

class Table extends Component {
    render() {
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
                        <td>Chipolata</td>
                        <td>Classique</td>
                    </tr>
                        <td>Margez</td>
                        <td>Piquante</td>
                </tbody>
            </table>
        );
    }
}

export default Table;