import './App.css';
import roblox from "../src/imagenes/roblox.png";
import Boton from "../src/componentes/botones";
import Pantalla from './componentes/pantalla';
import Clear from './componentes/clear';
import { useState } from 'react';
import {evaluate} from "mathjs";

function App() {

const [input, setInput] = useState(' ');
const agregarInput = val =>{
  setInput(input + val);
};
const calcularResultado =() =>{
  if (input) {
    setInput(evaluate(input));
  }else{
    alert("ingresa un valor valido")
  }
  

}


  return (
    <div className="App">
<div className='logo-contenedor'>
<img src={roblox} className='logofc' alt='logo de freecodecamp'/>
</div>
<div className='contenedor-calculadora'>
  <Pantalla input={input}/>
<div className='fila'>
  <Boton manejarClick={agregarInput}>1</Boton>
  <Boton manejarClick={agregarInput}>2</Boton>
  <Boton manejarClick={agregarInput}>3</Boton>
  <Boton manejarClick={agregarInput}>+</Boton>
</div>
<div className='fila'>
<Boton manejarClick={agregarInput}>4</Boton>
  <Boton manejarClick={agregarInput}>5</Boton>
  <Boton manejarClick={agregarInput}>6</Boton>
  <Boton manejarClick={agregarInput}>-</Boton>
</div>
<div className='fila'>
<Boton manejarClick={agregarInput}>7</Boton>
  <Boton manejarClick={agregarInput}>8</Boton>
  <Boton manejarClick={agregarInput}>9</Boton>
  <Boton manejarClick={agregarInput}>*</Boton>
</div>
<div className='fila'>
<Boton manejarClick={calcularResultado}>=</Boton>
  <Boton manejarClick={agregarInput}>0</Boton>
  <Boton manejarClick={agregarInput}>.</Boton>
  <Boton manejarClick={agregarInput}>/</Boton>
</div>
<div className='fila'>
<Clear manejarClear={()=> setInput('')}>Clear</Clear>
</div>
</div>
    </div>
  );
}

export default App;
