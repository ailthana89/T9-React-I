import React from 'react';


function Input (props) {
    let valor = "digite aqui";
    return (
    <div>
        <input onChange={(e) =>{
        valor = e.target.value;
        console.log(valor);

        }}></input>

    <p>{valor}</p>

    </div>

    )}
   

export default Input;