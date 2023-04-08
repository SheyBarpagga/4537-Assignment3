import React, { useEffect, useState } from 'react'
import Page from './Page'
import Pagination from './Pagination';
import axios from 'axios'
function App() {
  const [types, setTypes] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [original, setOriginal] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(10);
  const [typePoke, setTypePoke] = useState([])
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      .then(res => res.data)
      .then(res => {
        setPokemons(res)
        setOriginal(res)
      })
      .catch(err => console.log("err", err))
  }, [])

  const onTypeChange = t => {
    if(t.target.checked) {
      types.push(t.target.id)
      original.forEach(poke => {
        var type = poke.type.find(element => element.toLowerCase() === t.target.id)
        if(type != undefined) {
          typePoke.push(poke)
        }
      });
      setPokemons(typePoke)
    } else {
      
      types.splice(types.indexOf(t.target.id), 1)
      for(var x = 0; x < typePoke.length; x++) {
        if (typePoke[x].type.find(element => element.toLowerCase() === t.target.id) != undefined) {
          typePoke.splice(x, 1)
        }
      }

    }
    if(types.length < 1){
      window.location.reload();
      return;
    }
    console.log(typePoke)
    // console.log(t.target.checked)
    
    // console.log(types)
  }

  const indexOfLastRecord = currentPage * pokemonsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstRecord, indexOfLastRecord)
  const numberOfPages = Math.ceil(pokemons.length / pokemonsPerPage);

  return (
    <>
    <form>
      <input type="checkbox" name="type" value="Normal" id="normal" onChange={onTypeChange}></input>
      <label htmlFor="normal">Normal</label>

      <input type="checkbox" name="type" value="Fighting" id="fighting" onChange={onTypeChange}></input>
      <label htmlFor="fighting">Fighting</label>

      <input type="checkbox" name="type" value="Flying" id="flying"  onChange={onTypeChange}></input>
      <label htmlFor="flying">Flying</label>

      <input type="checkbox" name="type" value="Poison" id="poison"  onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="poison">Poison</label>

      <input type="checkbox" name="type" value="Ground" id="ground" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="ground">Ground</label>

      <input type="checkbox" name="type" value="Rock" id="rock" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="rock">Rock</label>

      <input type="checkbox" name="type" value="Bug" id="bug"  onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="bug">Bug</label>

      <input type="checkbox" name="type" value="Ghost" id="ghost" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="ghost">Ghost</label>

      <input type="checkbox" name="type" value="Steel" id="steel" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="steel">Steel</label>

      <input type="checkbox" name="type" value="Fire" id="fire" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="fire">Fire</label>

      <input type="checkbox" name="type" value="Water" id="water" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="water">Water</label>

      <input type="checkbox" name="type" value="Grass" id="grass" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="grass">Grass</label>

      <input type="checkbox" name="type" value="Electric" id="electric" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="electric">Electric</label>

      <input type="checkbox" name="type" value="Psychic" id="psychic" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="psychic">Psychic</label>
      
      <input type="checkbox" name="type" value="Ice" id="ice" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="ice">Ice</label>
      
      <input type="checkbox" name="type" value="Dragon" id="dragon" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="dragon">Dragon</label>
      
      <input type="checkbox" name="type" value="Dark" id="dark" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="dark">Dark</label>
      
      <input type="checkbox" name="type" value="Fairy" id="fairy" onChange={onTypeChange} defaultChecked={false}></input>
      <label htmlFor="fairy">Fairy</label>
    </form>
      < Page currentPokemons={currentPokemons} currentPage={currentPage} />
      < Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default App