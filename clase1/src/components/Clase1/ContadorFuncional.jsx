import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react'

/*
El estado es una característica que permite a los componentes de
React mantener y manipular datos que pueden cambiar con el
tiempo. A diferencia de las props, que son inmutables y se pasan
de los componentes padres a los hijos, el estado es privado y
completamente controlado por el componente.
*/



function ContadorFuncional() {
    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)

    const [contadores, setContadores] = useState({
        contador1: 0,
        contador2: 0,
    })

    return (
        <div>
            <p>Has hecho click {contador} veces</p>
            <p>El mismo contador {contadores.contador2}</p>
            <button onClick={() => setContador(contador + 1)}>
                Haz click aqui
            </button>
        </div>
    )
}

export default ContadorFuncional