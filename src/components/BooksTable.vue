<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components:{
        RouterLink,RouterView
    },
  data() {
     return {
       books: [
         { id: 1, titulo: 'Los Vengadores', precio: ' 1000', imagen: 'https://www.themoviedb.org/t/p/original/cWNIua1iPA4kGyQxJGvnx7UIzoT.jpg'},
         { id: 2, titulo: 'El camino del artista', precio: ' 2000' , imagen: 'https://1.bp.blogspot.com/-Oaem1y0W24Q/YK0QNBR8q0I/AAAAAAAAG2k/1JIa6cAmkWU9BnSK83Qa8VLQvJwH3qD_ACLcBGAsYHQ/s894/el%2Bcamino%2Bdel%2Bartista.jpg' },
         { id: 3, titulo: 'We Will Always Have Summer', precio: ' 3000' , imagen: 'https://m.media-amazon.com/images/I/71Yikzkkk4L.jpg' },
         { id: 4, titulo: 'Lo Bueno De Tener Un Mal Día', precio: ' 4000' , imagen: 'https://hips.hearstapps.com/hmg-prod/images/lo-bueno-de-tener-un-mal-dia-1658939477.jpg'},

         { id: 5, titulo: '1984', precio: '50000' , imagen: 'https://hips.hearstapps.com/hmg-prod/images/lo-bueno-de-tener-un-mal-dia-1658939477.jpg'},
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
      <router-link :to= "{name: 'Libro', params: {id: libro.id} }">  
      <img :src="libro.imagen" class="imagen-libro" />
    </router-link>
    </div>
    <div class="col">{{ libro.titulo }}</div>
    <div class="col">{{ libro.precio }}</div>
  </div>
  </div>
</div> 

 </template>

<!-- <style>
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
} -->
<style>
.imagen-libro {
  width: 100px;
  height: auto;
}
</style> 


