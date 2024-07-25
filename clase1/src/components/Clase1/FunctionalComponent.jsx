import React from "react";

/*
Los componentes funcionales son simplemente funciones de JavaS-
cript que aceptan props como argumento y devuelven JSX.

Los componentes funcionales son más simples y fáciles de entender
que los componentes de clase. No necesitas entender la sintaxis de
clase de JavaScript o cómo funciona this en JavaScript para usar
componentes funcionales. Además, los componentes funcionales te
permiten usar Hooks, haciendo más sencillo y potente la forma de
reutilizar la lógica del estado entre los componentes.
*/

/*
Las propiedades, o props, son una forma de pasar datos de los
componentes padres a los componentes hijos.
En otras palabras, las props son como los argumentos de una
función en JavaScript. Son inmutables, lo que significa que un
componente no puede cambiar sus props.
*/

/*
Asi se ven los props

props = {
    att1: valor1,
    att2: valor2,
}
*/

function FunctionalComponent({ nombre = "JavaScript" }) {
    return <h1>Hola, {nombre}</h1>
}

export default FunctionalComponent