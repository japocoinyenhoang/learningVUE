// fetch
// peticiones a la API, cosumir API 
fetch('htpps://pokieapi.com/api/v2/pokemon/')
  .then (res => res.json())     //con then va a esperar una promesa, los datos y la informacion o respuesta "res" de la url la queremos en formato JSON
  .then( data => {console.log(data.result)  //data es el objeto que se nos ha devuelto
  data.result.forEach(element => {  
    console.log(element.name)
  });
})
  .catch (error => console.log(error))   // con el catch capturamos posibles errores,  en este caso, su no hay datos en esa Api