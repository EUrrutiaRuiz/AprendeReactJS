import React from 'react'
import './App.css'
import ClassComponent from './components/Clase1/ClassComponent'
import FunctionalComponent from './components/Clase1/FunctionalComponent'
import ContadorFuncional from './components/Clase1/ContadorFuncional'
import ContadorClase from './components/Clase1/ContadorClase'
import ManejoEventos from './components/Clase1/ManejoEventos'
import Madre from './components/Clase1/PropsDrilling'
import Padre from './components/Clase1/EventBubbling'

function App() {
  return (
    <React.Fragment>
      <ClassComponent nombre={'Mundo'} />
      <FunctionalComponent nombre={'React'} />
      <ContadorFuncional />
      <ContadorClase />
      <ManejoEventos />

      <Madre datos={[1, 2, 3, 4]} />
      <Padre />
      <Padre ></Padre>
    </React.Fragment>
  )
}

export default App
