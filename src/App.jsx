import React from 'react';
import './App.css';
import Header from './Header';
import Row from './Row';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            datos: [],
        };
        this.getNews()
    }

    getNews = () => {
        fetch("http://localhost:3001/news/all")
            .then(d => d.json()
                .then(d => {
                    this.setState({datos: d})
                    console.log(d)
                }));
    }

    render() {
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
