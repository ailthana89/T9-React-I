import React from 'react';
import Button from '../Button/Button.css'


function Button (props){
    return(
        <div className="container-contador">
            <button className="button-menos" texto="botao" onClick={this.diminuir}> - </button>

                <p className="numero"> {this.state.numero} </p>
                <button className="button-mais" onClick={this.aumentar}> + </button>
                
            <button className={props.classe} onClick={props.click}>{props.texto}</button>

        </div>
    )

}

export default Button;