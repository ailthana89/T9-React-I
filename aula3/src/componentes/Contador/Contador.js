import React from 'react';
import '../Contador/Contador.css';


class Contador extends React.Component {
    constructor(){
        super();
        this.state = {
            numero: 0
        }
    }
    aumentar = () => {
        this.setState((estado) => ({
            numero: estado.numero +1
        }))

    }
    diminuir  = () => {
        this.setState((estado) => ({
            numero: estado.numero -1
        }))

    }

    render (){
        return (
            <div className="container-contador">
                <button className="button-menos" texto="botao" onClick={this.diminuir}> - </button>
                <p className="numero"> {this.state.numero} </p>
                <button className="button-mais" onClick={this.aumentar}> + </button>
            </div>
        )
    }
}

export default Contador;