import  Axios  from 'axios';
import './App.css';
import React,{useState} from 'react';



function App() {

  const [name,setName] = useState({})
  const [pokemonChosen , setPokemonChosen] = useState(false)
  // const [poka,pokaname] = useState({
  //        names: "" ,
  //        species :"",
  //        img:"",
  //        hp: "",
  //        attack: "",
  //        defence:"",
  //        type:""
  // })

  const searchPoke = () =>
  {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((e)=>
    {
      setName({
        names: name ,
         species : e.data.species.names ,
         img: e.data.sprites.front_default,
         hp: e.data.stats[0].base_stat,
         attack: e.data.stats[1].base_stat,
         defence: e.data.stats[2].base_stat,
         type:e.data.types[0].type.name
        })
        setPokemonChosen(true)
    })
  }


  return (
    <div>

    <div className='info'>
     
    <h1> Pokemon Database</h1>

    <input type='text' name="search" placeholder='Search your Pokemon' onChange={(e) =>
     setName(e.target.value)} />

    <button onClick={searchPoke}>Let's Go</button>

    </div>
    <div className='display'>
         {!pokemonChosen ? (
          <h1>Type the name of pokamon 👁️</h1>) : (
            <>
            <h1>{name.names}</h1>
            <img src={name.img} alt=""/>
            {/* <h3>Species : {name.species}</h3> */}
            <h3>HP : {name.hp}</h3>
            <h3>Attack : {name.attack}</h3>
            <h3>Defence : {name.defence}</h3>
            <h3>Type : {name.type}</h3>
            </>
            )} 
    </div>
    </div>
  );
}

export default App;
