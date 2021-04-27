/*fetch
fetch('htpps://pokiapi.co/api/v2/pokemon/')
  .then (res => res.json())     
  .then( data => {console.log(data.result)  
  data.result.forEach(element => {  
    console.log(element.name)
  });
})
  .catch (error => console.log(error))  */


  //async
  const getPokemons = async () => {
    try {
      const res = await fetch('htpps://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      console.log(data.result)
    } catch(error) {
      console.log(error)
    }
  } 