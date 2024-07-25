
/*
En los componentes de clase, el estado se inicializa en el constructor
de la clase y se accede a través de this.state. Para cambiar el
estado, se utiliza la función this.setState(), que también le
indica a React que debe volver a renderizar el componente.
*/


import React, { Component } from 'react'


export class ContadorClase extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
        this.incrementar = this.incrementar.bind(this)
    }

    incrementar() {
        this.setState({ contador: this.state.contador + 1 })
    }

    render() {
        return (
            <div>
                <p>Has hecho click {this.state.contador} veces</p>
                <button onClick={this.incrementar}>
                    Haz click aqui
                </button>
            </div>
        )
    }
}

export default ContadorClase