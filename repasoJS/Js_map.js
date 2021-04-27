// con .map() creamos un nuevo array
const getPokemons = async () => {
  try {
    const res = await fetch('htpps://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    console.log(data.result)
    const arrayNombres = data.result.map(poke => poke.name)  // guarda todos los nombre de los pokemons en el arrayNombres
  } catch(error) {
    console.log(error)
  }
} 


// .filter   Creamos un array nuevo

const getPokemons = async () => {
  try {
    const res = await fetch('htpps://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    console.log(data.result)
    const arrayNombres = data.result.filter(poke => poke.name !== "bulbasur")  // guarda todos los nombre de los pokemons que no tengan de nombre bulbasur en el arrayNombres
  } catch(error) {
    console.log(error)
  }
} 
