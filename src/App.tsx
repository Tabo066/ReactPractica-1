import { CardBody } from '../src/components/Card';
import {Card} from '../src/components/Card';
import List from './components/List.tsx';
import Button from './components/Button/Index.tsx';
import './App.css';
import { useState } from 'react';


function App() {
const [isLoading, setIsloading] = useState(false);
const handleClick = ()=> setIsloading(!isLoading);
const [data, setData] = useState(['uno', 'dos', 'tres']) ;
const addMinion = ()=> setData([...data, 'minion']);
const delMinion = ()=> setData(data.slice(0, -1)) ;

  const list = ['uno', 'dos', 'tres']
  const handleSelect = (elemento: string) =>{
console.log(elemento)
  };
  const contenido = list.length ? (<List data={list} onSelect={handleSelect}></List>) : ('sin elementos');
  return(
  <div>
<Card>
<CardBody title= 'hola mundo' text= 'el texto esta'/>
<Button isLoading={isLoading} onClick={handleClick} >Click para Cargar</Button>
  {contenido}
</Card>
  <Card>
<Button onClick={addMinion} isLoading={false} >Agregar minion</Button>
<Button onClick={delMinion} isLoading={false} >Borrar minion</Button>
  <List data={data}></List>
  </Card>
</div>
  );
}

export default App
