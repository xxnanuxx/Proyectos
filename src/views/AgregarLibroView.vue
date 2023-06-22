<script>
import axios from "axios"

export default {
    
  data() {

    return {
      libro:{},
      categoria: '',
      options: [
        { value: '1', label: 'Accion' },
        { value: '2', label: 'Terror' },
        { value: '3', label: 'Comics' }
      ]
    };
  },
  methods: {
    async agregarLibro() {
      const libro = {...this.libro}
      try {
        console.log(this.libro);
        await axios.post("http://localhost:8080/libro", libro)
        this.$router.push('/BooksTable');
      } catch (error) {
        console.log(error);
        alert("Error de conexion")
      }
    }
  }
};
</script>

<template>
<div class="container">
    <div class="col" style="margin-top:20px">
        <div class="row">
            <h4>AGREGAR LIBRO</h4>
        </div>
        <div class="row" style="width:50%">
            <input type="text" v-model="libro.titulo" placeholder="Ingrese el título del libro" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input type="text" v-model="libro.autor" placeholder="Ingrese el autor del libro" class="form-control">
        </div>
         <div class="row" style="margin-top:10px; width:50%">
            <input type="text" v-model="libro.stock" placeholder="Ingrese el stcock del libro" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input type="text" v-model="libro.precio" placeholder="Ingrese el precio del libro" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input type="text" v-model="libro.imagen" placeholder="Ingrese la url de la imagen" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:25%">
            <select v-model="libro.categoria">
                <option v-for="option in options" :value="option.value" :key="option.value">
                  {{ option.label }}
                </option>
            </select>
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <button class="btn btn-outline-success" @click="agregarLibro" type="submit">AGREGAR LIBRO</button>
        </div>
    </div>
</div>

</template>