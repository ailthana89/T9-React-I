/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import dog from '../img/dog.jpg'
import cat from '../img/cat.jpeg'
import fofinhos from '../img/caes-e-gatos.jpg'

class SecaoPets extends React.Component {
    constructor(){
        super();
        this.state = {
            imagemPet: fofinhos}
    }

    render(){
        return(
            <div>
                <img src={this.state.imagemPet} alt="bichos de estimação"></img>
                <div>
                    <button onClick={() => {
                        this.setState({imagemPet: cat})
                        }}>Gato</button>
                    <button onClick={() =>{
                        this.setState({imagemPet: dog})
                    }}>Cachorro</button>
                </div>
            </div>

        );
    }
}

export default SecaoPets;