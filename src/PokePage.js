import React from 'react'
import Pokemon from './Pokemon'
function PokemonPage({ poke }) {
  return (
    <div>
      <h1>
        {poke.name.english}
      </h1>
      
      <div className="pokemon">
        <>{
          poke.base.forEach(element => {
            return(<>
            <p>{element}</p>
            <br/>
            </>)
          })
        }</>
      </div>
    </div>
  )
}

export default PokemonPage