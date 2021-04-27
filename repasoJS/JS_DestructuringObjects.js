const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  caracteristicas: ['peludo', 'negro']
}

console.log(mascota.caracteristicas[1])
console.log(mascota.nombre)

/*const nombreMascota = mascota.nombre
console.log(nombreMascota)

const {nombre} = mascota
console.log(nombre)*/

const {nombre, edad, vivo, caracteristicas} = mascota
console.log(nombre)
console.log(caracteristicas[0])


//https://wesbos.com/destructuring-objects