import React from "react";

export default class Header extends React.Component{
    contenedor ={
      background:"black",
        color:"white",
        height:"200px",
        paddingTop:"40px"

    };

    texto1={
        margin:"20px",
        color:"white",
        fontSize:"60px",
        fontWeight:"900",
        letterSpacing:"2px"
    }
    texto2={
        margin:"20px",
        fontSize:"20px",
        marginTop:"0",
        color:"white",
        fontWeight:"600"

    }

    render() {
        return(
            <div style={this.contenedor}>

                <h1 style={this.texto1}>HN Feed</h1>

                <h4 style={this.texto2}>{"We <3 hacker news!"}</h4>

            </div>
            )
    }
}
