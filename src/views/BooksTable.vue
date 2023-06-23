<script>
import axios from "axios"
import { RouterLink, RouterView } from "vue-router";

export default {
  components:{
        RouterLink,RouterView
    },
  data() {
     return {
        books: []
     };
  },
  mounted() {
    this.cargarLista()
  },
  methods: {
    cargarLista(){
        axios.get("http://localhost:8080/libro").then(response => {
          this.books = response.data.result;
        }).catch(error => {
          console.error(error);
        })
    }
  }

 };

</script>

<template>

    <div class="container"> 
        <div class="row" v-for="libro in books" :key="libro.id" >
            <div class=" conteiner">
                <div class="row">
                    <router-link :to= "{name: 'Libro', params: {id: libro.id} }">  
                        <img :src="libro.imagen" class="imagen-vista" />
                    </router-link>
                </div>
                <div class="col" style="margin-top: 10px;">{{ libro.titulo }}</div>
                <div class="col">${{ libro.precio }}</div>
            </div>
        </div>
    </div> 

 </template>
 
<style>
.imagen-vista {
  width: 100px;
  height: auto;
}
</style> 
