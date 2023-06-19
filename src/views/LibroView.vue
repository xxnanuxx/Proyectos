<script>
 import MisLibrosView from '../views/MisLibrosView.vue'
 
export default {
  // props: ['id']
  data() {
    return {
      objeto: {},
    };
  },
  created() {
    const objetoId = this.$route.params.id;
    this.objeto = { id: objetoId, nombre: 'Objeto', precio: 9.99 };
}

};



</script>


<template>
   <h2>Componente B</h2>
    <!-- Muestra los detalles del objeto -->
    <div>
      <h3>{{ MisLibrosView.nombre }}</h3>
      <p>Precio: {{ MisLibrosView.precio }}</p>
    </div>
</template>

<style>


</style>

<!-- <div>
  <h1>Componente de destino</h1>
  <div>{{ objeto }}</div>

   <p>ID recibido: {{ libro}}</p> 

</div> -->