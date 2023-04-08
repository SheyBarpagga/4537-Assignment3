import React from 'react'
import PokemonPage from './PokePage'
function Pokemon({ pokemon }) {
  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }
  const sendPoke = event => {
    console.log(pokemon)
    document.body.innerHTML = ''
    document.write(`
      <div>
        <img id={pokemon.id} src='https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png' />
        <h4>${pokemon.name["english"]}</h4>
        <p>HP: ${pokemon.base["HP"]}</p>
        <p>Attack: ${pokemon.base["Attack"]}</p>
        <p>Type: ${pokemon.type}</p>
      </div>
      <button onClick='refresh()'>Home</button>
      <script>
        function refresh() {
          window.location.reload()
        }
      </script>
    `)
  }
  return (
    <>
      <img id={pokemon.id} onClick={(p) => sendPoke(p)} src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} />
    </>
  )
}

export default Pokemon