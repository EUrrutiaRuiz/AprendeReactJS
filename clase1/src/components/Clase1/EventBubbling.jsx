/*
“Event Bubbling” es un término que se utiliza para describir cómo
los eventos en React (y en el DOM en general) se propagan a través
de la estructura del árbol de componentes. Cuando se dispara un
evento (como un clic o un cambio de entrada), ese evento se propaga
hacia arriba a través de la estructura del árbol de componentes,
comenzando por el componente en el que se disparó el evento y
continuando hasta el componente más alto.

Esto puede ser útil porque te permite manejar un evento en un
componente de alto nivel, incluso si el evento se disparó en un
componente de bajo nivel. Aquí tienes un ejemplo de cómo se vería
esto:

En este ejemplo, el evento de clic se dispara en el componente Hijo,
pero se maneja en el componente Padre.
Es importante tener en cuenta que, aunque el “event bubbling”
puede ser útil, también puede llevar a comportamientos inesperados 
si no se maneja correctamente. Por ejemplo, si tienes varios

manejadores de eventos en diferentes niveles de tu estructura de
componentes, todos ellos se activarán cuando se dispare un evento,
a menos que detengas explícitamente la propagación del evento.

*/

import React from 'react'

function Padre() {
    const handleClick = () => {
        console.log('Saludos desde el padre')
    }

    return (
        <Hijo onClick={handleClick} />
    )
}

function Hijo({ onClick }) {
    return (
        <button onClick={onClick}>Haz Click</button>
    )
}

export default Padre