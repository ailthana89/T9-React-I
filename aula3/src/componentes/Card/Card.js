import React from 'react';


function Card (props){
    return (
        <div>
            <img src={props.imagem} alt="imagem"></img>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )    
}

export default Card;