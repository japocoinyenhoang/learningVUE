//https://v3.vuejs.org/guide/introduction.html
// https://bluuweb.github.io/vue-udemy/
//1. Añadir  <script src="https://unpkg.com/vue@next"></script> en el archivo HTML en el Head y añadir otro script al final del bosy de nuestro main.js con nuestro codigo vue


const app = Vue.createApp({       // solo podemos llamar a Vue si previamente hemos añadido el script  <script src="https://unpkg.com/vue@next"></script> 
  data() {                        // nuestros datos
      return {
          titulo: 'Hola mundo con Vue.js'
      }
  }
})



// necesario para montar los datos y poder pintarlos  // siempre despues del scripy de js
/*<script>
  const mountedApp = app.mount('#app');
</script>*/