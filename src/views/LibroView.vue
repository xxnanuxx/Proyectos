<script>
import BooksTable from './BooksTable.vue';
import axios from 'axios'
  
export default {

  data() {
    return {
      book: {}
    };
  },
  mounted() {
    this.objeto()
  },
  methods:{
    objeto() {
      const objetoId = parseInt(this.$route.params.id);
      axios.get("http://localhost:8080/libro" + "/" + objetoId).then(response => {
          this.book = response.data.result;
          console.log(response.data.result);
        }).catch(error => {
          console.error(error);
      })
    },  
  },

};
</script>


<template>
  <div class="conteiner">

    <div class="col" >

      <div class="col" style="margin-left: 60px; margin-top:50px">
        
        <div class="row" >
          <p> {{ book.titulo }}</p>
        </div>

        <div class="row">
          <p> $ {{ book.precio }}</p>
        </div>
      </div>

      <div class="col">
        <div class="row">
          <img :src="book.imagen" alt="Imagen del objeto"  style="width: 20%; margin-left: 25px;"/>
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

