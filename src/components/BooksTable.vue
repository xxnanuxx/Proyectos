<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
     return {
       books: [
         { id: 1, titulo: 'Los Vengadores', precio: ' 1000', imagen: 'https://www.themoviedb.org/t/p/original/cWNIua1iPA4kGyQxJGvnx7UIzoT.jpg'},
         { id: 2, titulo: 'Book 2', precio: ' 2000' , imagen: 'imagen' },
         { id: 3, titulo: 'Book 3', precio: ' 3000' , imagen: 'imagen' },
         { id: 4, titulo: 'Book 4', precio: ' 4000' , imagen: 'imagen'},

         { id: 5, titulo: 'Book 5', precio: '50000' , imagen: 'imagen'},
       ],
     };
  },
 };

</script>

<template>
  <div class="container"> 
      <div class="row" v-for="libro in books" :key="libro.id" >
        <div class=" conteiner">
        <div class="row">
          <RouterLink to= "{name '/Libro', params: {libro.id} }"> 
          <img :src="libro.imagen" class="imagen-libro" />
        </RouterLink>
        </div>
        <div class="col">{{ libro.titulo }}</div>
        <div class="col">{{ libro.precio }}</div>
      </div>
      </div>
   
    </div>

</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.table {
  width: 80%;
}

.row {
  display: flex;
  align-items: center;
}

.header {
  font-weight: bold;
}

.col {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
}

.imagen-libro {
  width: 100px;
  height: auto;
}
</style>


  
