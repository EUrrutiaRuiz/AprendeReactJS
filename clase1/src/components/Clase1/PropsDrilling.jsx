/*
“Props Drilling” es un término que se utiliza para describir el
proceso de pasar datos de un componente a otro a través de la
estructura del árbol de componentes. Esto se hace a través de las
props.
Imagina que tienes una estructura de componentes en la que un
componente madre tiene varios componentes hijos, y algunos de
esos hijos tienen sus propios hijos. Si el componente más interno
necesita acceder a los datos del componente madre, esos datos
tendrían que “perforar” todos los niveles de componentes hasta
llegar al componente más interno.
*/

/*
Aunque el props drilling puede ser útil en algunos casos, puede
volverse problemático cuando tienes una estructura de componentes 
grande y compleja. En estos casos, puede ser difícil rastrear
*/

import React from 'react'

function Madre({ datos }) {
    return (
        <>
            <Hija datos={datos}></Hija>
            <Hija datos={datos}></Hija>
        </>
    )
}

function Hija({ datos }) {
    return (
        <Nieta datos={datos} />
    )
}

function Nieta({ datos }) {
    return (
        <p> Los datos son {datos.join(', ')}</p>
    )
}

export default Madre