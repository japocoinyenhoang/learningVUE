//VAR, LET, CONST

var edad = 10           //NO RECOMENTABLE, MEJOR NO USAR
var edad = 20
console.log(edad) // 20

let edad = 10
let edad = 20
console.log(edad) // error, no se piede volver a declarar en el mismo scope

const edad = 10
const edad = 20 // SyntaxError

const edad = 10
edad = 20 // Error: "edad" is read-only  una constante no puede ni ser redeclarada ni cambiar su valor.

// en scope diferentes si se puede
var edad = 10
if(true){
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20    VAR coge el ultimo valor sin tener en cuenta el scope

let edad = 10
    if(true){
        let edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10

const edad = 10
    if(true){
        const edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10


// con ARRAYS

var edades = [10,20,30]
var edades = [10,20,30,40]
console.log(edades)

let edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)

const edades = [10,20,30]
edades = [10,20,30,40]   // error pero se lo podemos añadir con un push 

const arrayNumero = [10, 20, 30]
arrayNumero.push(40)
console.log(arrayNumero)  // [10, 20, 30, 40]



//con objetos
const persona = {
  nombre: 'Pepita',
  edad: 20
}
console.log(persona)    //{nombre: "Pepita", edad: 20}
persona.edad = 21
persona.pais = 'España'

console.log(persona)  //{nombre: "Pepita", edad: 21, pais: "España"}

