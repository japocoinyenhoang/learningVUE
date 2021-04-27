const app = Vue.createApp({
  data() {
      return {
          titulo: 'Hola mundo con Vue.js', 
          cantidad : 0, 
          enlace: 'https://google.es', 
          estado: false, 
          servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
          desactivar: false
      }
  }, 
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100
      this.desactivar = false
    },
    disminuirSaldo() {
      if (this.cantidad === 0) {
          alert('llegaste al final')
          this.desactivar = true
          return
      }
      this.cantidad = this.cantidad - 100
    }
  }
})

