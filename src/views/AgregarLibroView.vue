<script>
import AgregarLibroView from '../views/AgregarLibroView.vue'

export default {
    components:{
        AgregarLibroView
    },
  data() {
    return {
      titulo: '',
      precio: '',
      imagen:'',
    };
  },
  methods: {
    agregarLibro() {
      // Aquí puedes realizar la lógica para agregar el libro utilizando los datos ingresados en los campos
      // Por ejemplo, puedes enviar una solicitud a una API para agregar el libro a la biblioteca
      // Luego, puedes redirigir a la vista de la biblioteca para mostrar la lista actualizada de libros
      this.$router.push('/');
    },
  },
};
</script>

<template>
    <div>
      <h2>Agregar Libro</h2>
      <!-- Agrega los campos para ingresar los datos del libro -->
      <form>
        <div>
          <label for="titulo">Título:</label>
          <input type="text" id="titulo" v-model="titulo" placeholder="Ingrese el título del libro" />
        </div>
        <div>
          <label for="precio">Precio:</label>
          <input type="text" id="precio" v-model="precio" placeholder="Ingrese el precio del libro" />
        </div>
        <!-- Agrega más campos para otros datos del libro (por ejemplo, precio, descripción, etc.) -->
        <button @click="agregarLibro">Agregar</button>
      </form>
    </div>
  </template>