import React from "react";

/*

Los componentes de clase son definidos utilizando la sintaxis de
clase de ES6. Un componente de clase debe incluir al menos un
método, llamado render(), que devuelve JSX.

Los componentes de clase tienen algunas características que no es-
tán disponibles en los componentes funcionales, como los métodos

del ciclo de vida y el estado local. Sin embargo, con la introducción
de los Hooks en la versión de React número 16.8, ahora puedes
usar el estado y otros aspectos de React sin escribir una clase.

*/

class ClassComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <h1>Hola, {this.props.nombre}</h1>
    }

}

export default ClassComponent