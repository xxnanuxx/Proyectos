<script>
import BooksTable from '../components/BooksTable.vue';

  
export default {
  
  // props: ['id']
  data() {
    return {
      books : BooksTable.data().books
    };
  },
  computed: {
    objeto() {
      const objetoId = parseInt(this.$route.params.id);
      
      return this.books.find(objeto => objeto.id === objetoId);
    },
  },

};



</script>


<template>
   <h2>Libro</h2>
   
    <!-- Muestra los detalles del objeto
    ACÁ VA TODO DE V-IF Y COSAS PARA ADMI Y PERSONA!!!!!!!!!!! -->
  
    <!-- <h4> Titulo: </h4> <input type ="text" :value="objeto.titulo" @input="titulo = event.target.value"  > -->
  
    <div class="conteiner">

      <div class="col" >

      <div class="col" style="margin-left: 350px; margin-top:200px ;">
      <div class="row" >
      <p> {{ objeto.titulo }}</p>
      </div>

     

     <div class="row">
      <p>Precio: {{ objeto.precio }}</p>
      </div>
    </div>

      <div class="col">
       <div class="row">
      <img :src="objeto.imagen" alt="Imagen del objeto"  style="width: 45%;"/>
      </div>

      </div>
    </div>
      
</div>

</template>


<style>

.conteiner{
  background-color: beige;

}

.imagen{
  width: 70%;
  margin-right: 20%;
  height: auto; 
  margin-left: 10%;
  text-align: left;
  font-size: 10%;
  float: left;  
  height: 200px; 
  margin-right: 10px;
}

.titulo{
  flex: 5%;
  text-align: right;
  margin-right:30%;
   font-size: 150%; 
}







</style>

<!-- <div>
  <h1>Componente de destino</h1>
  <div>{{ objeto }}</div>

   <p>ID recibido: {{ libro}}</p> 

</div> -->