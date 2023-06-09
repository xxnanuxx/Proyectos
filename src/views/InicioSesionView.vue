
<template>
<div class="container">
    <div class="col" style="margin-top:20px">
        <div class="row">
            <h4>INICIO DE SESION</h4>
        </div>
        <div class="row" style="width:50%">
            <input placeholder="Correo Electronico" type="search" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input placeholder="Constraseña" type="password" class="form-control">
        </div>
        <div class="row" style="margin-top:15px; width:50%">
            <p class="texto">¿No tiene cuenta creada?</p>
        </div>
        <div class="row" style="margin-top:-10px; width:50%">
            <button class="btn btn-outline-success" @click="redirigir" type="submit">CREAR CUENTA</button>
        </div>
    </div>
</div>
</template>


<style>
.texto {
  font-size:13px;
  color: darkgrey;
}
</style>

<script>
export default {
    methods:{
        redirigir(){
            this.$router.push("/Registrar")
        }
    }
}
</script>
