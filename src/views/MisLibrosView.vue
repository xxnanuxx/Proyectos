<script>
import BooksTable from '../components/BooksTable.vue'   
import LibroView from './LibroView.vue';

export default{
    components:{
        BooksTable,LibroView
    },
    data(){
        return {
            booksData: [
                {id: 1, titulo: 'book1', precio:''},
                {id: 2, titulo: 'book2', precio:''},
                {id: 3, titulo: 'book3', precio:''},
                {id: 4, titulo: 'book4', precio:''},
                {id: 5, titulo: 'book5', precio:''},
            ],

            
        };
    },
    methods: {
    mostrarObjeto(libro) {
      this.$router.push({ name: 'LibroView', params: { id: libro.id } });
    },

},
};

    
    

</script>

<template>
     <div>
    <!-- Haz clic en el objeto para redirigir a ComponentB y pasar el objeto como parámetro de ruta -->
    <div v-for="libro in BooksTable" :key="libro.id" @click="mostrarObjeto(libro)">
      {{ libro.nombre }}
    </div>
  </div>

    
</template>