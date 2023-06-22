<script>
import BooksTable from '../components/BooksTable.vue';

export default {
    
  data() {

    return {
      
      titulo: '',
      precio: '',
      imagen:'',
      books:  BooksTable.data().books
    };
  },
  methods: {
    agregarLibro() {

      const nuevoLibro ={
        titulo: '',
        precio: '',
        imagen: '',

      }
      this.books.push(nuevoLibro); // Agrega el nuevo libro a la lista books
       this.$router.push('/BooksTable');
    }





  }
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

        <div>
          <label for="imagen">Imagen:</label>
          <input type="text" id="imagen" v-model="imagen" placeholder="Ingrese la url de la imagen" />
        </div>
        <!-- Agrega más campos para otros datos del libro (por ejemplo, precio, descripción, etc.) -->
        <button @click="agregarLibro">Agregar</button>
      </form>
    </div>
  </template>