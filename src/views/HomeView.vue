

<template>
          <h4>Libros</h4>
          
      

  <main>    
  <BooksTable>
  </BooksTable>
  </main> 



</template>     

<style src="./estilos.css"></style>


<script >
import axios from "axios"
import BooksTable from './BooksTable.vue';

export default {
components: {
BooksTable
},
}
</script>


