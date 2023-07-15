
import './App.css';
import { useState } from "react";
import ShowAnimal from "./ShowAnimal";

function getRandomAnimal(){
  const animals = ['bird','cat','cow','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)];
}

console.log(getRandomAnimal());

function App() {
  const [animals,setAnimals] = useState([]);

  const handelClick = () =>{
    setAnimals([...animals,getRandomAnimal()]);
    };

    const renderAnimals = animals.map((animal,index) =>{
      return <ShowAnimal type={animal} key={index} />;
    });

  return (
    <div className='app'>
        <button onClick={handelClick}>Add Animal</button>
        <div className='animal-list'>{renderAnimals}</div>
    </div>
  );
}
export default App;
