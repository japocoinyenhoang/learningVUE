
//Funcion normal
function nombreDeLaFuncion () {
  console.log("HOla")
}
mombreDeLaFuncion()   "Hola"

// funcion flecha
const nombreDeLaFuncionFlecha = () => console.log("Hola")
nombreDeLaFuncionFlecha()


//con parametros
function sumar (num1, num2) {
  console.log(num1 + num2)
}
sumar(10, 20)    //30

// funcion flecha
const sumarDos = (num1, num2) =>  console.log(num1 + num2)
sumarDos(10, 50)    //60

const unParametro= num1 => console.log(num1)
unParametro(10)       //10



// o lo que es lo mismo
const sumarDos = num1 => num1
console.log(sumarDos(10))


const sumar = (num1, num2) => {
  return 'la suma es: ' + (num1 + num2)
}
let resultado = sumar(10, 20)
console.log(resultado)

const sumar2 = (num1, num2) => 'la suma es: ' + (num1 + num2)
let resultado2 = sumar(10, 20)
console.log(resultado2)


const sumarSiNoLePasasParametro = (num1 = 10) => 'la suma es: ' + (num1 + 20)
let resultadoSinPasarParametro = sumarSiNoLePasasParametro()
console.log(resultadoSinPasarParametro)     //30


//#Template String (alt + 96)
// template string
const numero = (num) => 'el numero es: ' + num 
const resultadoNumero = numero(10)
console.log(resultadoNumero) 

const numeroConTemplateString = (num) => `el numero es: ${num}` 
const resultadoConTemplateString = numeroConTemplateString(10)
console.log(resultadoConTemplateString)

const numeroTemplate = (num1, num2) => {
  return `el numero es: ${num1 + num2}` 
}
const resultadoConTemplateString2 = numeroTemplate(10,20)
console.log(resultadoConTemplateString2)