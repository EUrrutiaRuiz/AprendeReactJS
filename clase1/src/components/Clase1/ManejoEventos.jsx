/* React tiene un sistema de eventos propio que es compatible con el modelo de eventos W3C(World Wide Web Consortium).
Esto significa que, aunque estés trabajando con una biblioteca JavaScript, los eventos en React funcionan de manera muy 
similar a cómo lo hacen en HTML plano. 

<button onclick="handleClick()">
    Haz clic en mí
</button>
*/

/**
React, en su intento de proporcionar una experiencia de desarrollo
uniforme entre diferentes navegadores, implementa un sistema de
eventos sintéticos. Un evento sintético es básicamente un objeto que
simula un evento nativo del navegador, proporcionando la misma
interfaz, independientemente del navegador que estés utilizando.
Esto es especialmente útil para manejar las inconsistencias entre
los diferentes navegadores.

Los eventos sintéticos en React son instancias de la clase SyntheticEvent, que es una envoltura alrededor del evento nativo del

navegador. Tienen la misma interfaz que los eventos nativos del na-
vegador, incluyendo stopPropagation() y preventDefault(),

excepto que funcionan de manera idéntica en todos los navegado-
res.
 */

import React from 'react'

class EnventoClase extends React.Component {
    handleClick() {
        console.log('El botón fue clickado!');
    }

    render() {
        return <button onClick={this.handleClick}>Haz clic en mí</button>;
    }
}


function ManejoEventos() {
    const handleClick = () => {
        console.log('El boton dio click')
    }

    return (
        <button onClick={handleClick}>Haz click aqui</button>
    )
}

export default ManejoEventos