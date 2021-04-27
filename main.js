const app = Vue.createApp({
  data() {
      return {
          titulo: 'Hola mundo con Vue.js', 
          cantidad : 300, 
          enlace: 'https://google.es', 
          estado: false, 
          servicios: ['transferencias', 'pagos', 'giros', 'cheques']
      }
  }
})

