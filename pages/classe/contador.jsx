import { Component } from "react";

export default class Contador extends Component{
    
    render(){
        return (
            <div>
                <h1>
                    Contador(usando classe)
                </h1>
                <h2>{this.props.ValorInicial}</h2>
            </div>
        )
    }
}