### ¿Qué es Vue?
Vue es un framework progresivo para construir interfaces de usuario.
Diseñado para ser adoptado gradualmente.
Podemos crear SPA single web application.
https://v3.vuejs.org/guide/introduction.html
https://bluuweb.github.io/vue-udemy/

#### Instalación
De manera sencilla comenzaremos con el CDN: https://v3.vuejs.org/guide/installation.html#cdn
<script src="https://unpkg.com/vue@next"></script>

1. Añadir  <script src="https://unpkg.com/vue@next"></script> en el archivo HTML en el Head y añadir otro script al final del body de nuestro main.js.   <script src ="main.js"></script>

2. Crear otro Script seguido del del archivo js con el siguente código
necesario para montar los datos y poder pintarlos  // siempre despues del scripy de js
<script>
  const mountedApp = app.mount('#app');
</script>

3. En nuestro main.js empezar a poner codigo vue
// solo podemos llamar a Vue si previamente hemos añadido el script 
const app = Vue.createApp({        <script src="https://unpkg.com/vue@next"></script> 
  data() {                        // nuestros datos
      return {
          titulo: 'Hola mundo con Vue.js'
      }
  }
})

4. usar nuestro codigo vue dentro del contenedor con id= app


# Llaves dobles  {{ }}
Nos permite escribir expresiones de JS, osea ejecutar Javascript dentro de nuestro HTML.
Si cambiamos el valor, se actualiza automáticamente el DOM.
          const app = Vue.createApp({
              data() {
                  return {
                      cuenta: 'Corriente'
                  }
              }
          })
Ejemplo:

                  <h2>Saldo disponible: {{ cantidad > 1 ? cantidad : 'Sin saldo' }}</h2>
                  const app = Vue.createApp({
                      data() {
                          return {
                              cuenta: 'Vista',
                              cantidad: 0
                          }
                      }
                  })


# v-bind   ejemplo  <a href="{{enlaceYoutube}}">
Para crear vínculos reactivos entre nuestros datos y los "atributos de HTML" utilizamos una directiva de Vue llamada v-bind

        const app = Vue.createApp({
            data() {
                return {
                    cuenta: 'Vista',
                    cantidad: 0,
                    enlaceYoutube: 'https://youtube.com/bluuweb',
                }
            }
        })
  <a href="{{enlaceYoutube}}">Youtube</a>       😖 Para que nuestro ejemplo funcione tenemos que utilizar v-bind
  <a v-bind:href="enlaceYoutube">Youtube</a>    😍 Abreviado
  <a :href="enlaceYoutube">Youtube</a>          También puedes utilizar v-bindpor ejemplo en:

  <img :src="enlaceImagen" :alt="descripcion">
  <p :class="claseCss">Lorem ipsum dolor sit.</p>
  <p :style="propiedadCss">Lorem ipsum dolor sit.</p>



# v-if v-else   <h2 v-if="estado">
Existen directivas especiales para trabajar con datos condicionales, por ejemplo:
      return {
          cuenta: 'Vista',
          cantidad: 0,
          estado: true,
          enlaceYoutube: 'https://youtube.com/bluuweb',
          enlaceImagen: 'assets/escritorio.jpg',
          descripcion: 'Descripción de un escritorio'
      }
  Ahora pasemos este ejercicio a directivas de Vue:

  <h2>Saldo disponible: {{ cantidad > 1 ? cantidad : 'Sin saldo' }}</h2>
  Podemos hacer lo siguiente:
  <h2 v-if="cantidad > 100">Cantidad: {{cantidad}}</h2>
  <h2 v-else-if="cantidad <= 100 && cantidad > 0"> Cantidad: <span style="color:red">{{cantidad}}</span></h2>
  <h2 v-else>Sin cantidad: {{cantidad}}</h2>

  <h2 v-if="estado">Cuenta activada</h2>
  <h2 v-else>Cuenta desactivada</h2>


# v-for   v-for="(item, index) in servicios" :key="index">
Podemos recorrer array y array de objetos con directivas de Vue: v-for

      data() {
          return {
              cuenta: 'Vista',
              cantidad: 200,
              estado: true,
              servicios: ['Transferencias', 'Pagos', 'Giros']
          }
      }
  <hr>
  <h2>Servicios disponibles:</h2>
  <ul>
      <li v-for="item in servicios">{{item}}</li>
  </ul>
  #key
  Siempre que trabajemos con v-for, Vue nos pedirá que estos elementos tengan una llave única, podemos agregar por ahora un index.

  <ul>
      <li v-for="(item, index) in servicios" :key="index">
          {{index + 1}} - {{item}}
      </li>
  </ul>


# v-on:click [Eventos]     @onclick
Agreguemos un evento que nos permita modificar la cantidad o saldo de nuestra cuenta:

<button v-on:click="agregarSaldo">Agregar Saldo</button>
Abreviado:
<button @click="agregarSaldo">Agregar Saldo</button>
const app = Vue.createApp({
    data() {
        return {
            cuenta: 'Vista',
            cantidad: 200,
            estado: true,
            servicios: ['Transferencias', 'Pagos', 'Giros'],
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        }
    }
})

# Class dinámico
<!-- operador ternario -->
<h2 
    class="bg-dark"
    :class="[cantidad > 100 ? 'text-success' : 'text-danger']"
    :style="{'font-size': '50px'}"
>
    Cantidad: {{cantidad}}
</h2>


#Computed
Las propiedades computadas nos sirven para generar calculos en nuestros componentes, por ejemplo no se recomienda colocar demasiada lógica en nuestras plantillas HTML, ya que dificulta la interpretación de nuestros componentes.

:class="[cantidad > 100 ? 'text-success' : 'text-danger']"
computed: {
    colorCantidad() {
        return this.cantidad > 100 ? 'text-success' : 'text-danger'
    }
}
:class="colorCantidad"
#Componentes
Son instancias reutilizables, así podemos ir estructurando la lógica de nuestro proyecto en diferentes secciones o partes.

WARNING

Es muy importante el orden en este ejemplo, ya que por ahora estamos conociendo los fundamentos, posteriormente veremos ejemplos más avanzados.
Nombre del componente en minúsculas y separados de guión medio para evitar errores.
/*html*/ Extensión de VSC: es6-string-html
// components/Footer.js
app.component('footer-banco', {
    template: 
        /*html*/`
        <div>
            <h3>Pie de página, año 2020</h3>
        </div>
        `
})
<hr>
<footer-banco />
<footer-banco />
<footer-banco />
<footer-banco />

<script src="main.js"></script>
<script src="components/Footer.js"></script>
<script>
    const mountedApp = app.mount('#app');
</script>
#Props
Si quisieramos enviar información desde nuestro componente padre a nuestro nuevo componente, podemos utilizar los props

app.component('footer-banco', {
    props: ['cantidad'],
    template: 
        /*html*/`
        <div>
            <h3>Pie de página, año 2020 - cantidad: {{cantidad}}</h3>
        </div>
        `
})
<footer-banco cantidad="mil pesos" />
Cantidad dinámica con v-bind:

<footer-banco :cantidad="cantidad" />
Más de un props:

props: ['cantidad', 'texto'],
<footer-banco :cantidad="cantidad" texto="Pie de página" />
Tipo de dato:

props: {
    cantidad: Number,
    texto: String
},
Documentación oficial:

props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
CamelCase

Dentro del objeto props podemos agregar palabras compuestas con camelCase pero en el llamado de nuestro componente tiene que ir separado de un guión.

props: {
    cantidad: Number,
    textoFooter: String,
}
<footer-banco :cantidad="cantidad" texto-footer="Pie de página" />
#Props Default
Podemos establecer un valor predeterminado en caso que el componente no reciba el props en cuestión.

props: {
    texto: String,
    desactivar: {
        type: Boolean,
        default: false
    }
}






