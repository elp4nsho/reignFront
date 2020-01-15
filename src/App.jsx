import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Botona from './Botona';
import Ejemplo from './Ejemplo';
import {TableRow} from "@material-ui/core";
import InteractiveList from './Botona'
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import Header from './Header';
import Row from './Row';
import Box from '@material-ui/core/Box';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            i: 0, text: "hola",
            datos: [],
            data: [
                {
                    id: 0,
                    name: "fco",
                    age: "22"
                },
                {
                    id: 30,
                    name: "dfco",
                    age: "122"
                },
                {
                    id: 20,
                    name: "fcoo",
                    age: "223"
                },
                {
                    id: 10,
                    name: "fcoo",
                    age: "242"
                }
            ]
        };
        this.changeText()
    }

    changeText = () => {
        fetch("http://localhost:3001/news/all")
            .then(d => d.json()
                .then(d => {
                    this.setState({datos: d})
                    console.log(d)
                }));
        /*this.setState({i: this.state.i + 1});*/

    }

    render() {
        const {i} = this.state;
        return (
            <div>
                    <Header/>

                   {
                        this.state.datos.map((p, i) => {
                            return (<Row data={p} key={i}/>
                            )
                        })
                    }

            </div>


        );
    }

}

class TaableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}


