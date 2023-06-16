
<template>
<div class="container">
    <div class="col" style="margin-top:20px">
        <div class="row">
            <h4>INICIO DE SESION</h4>
        </div>
        <div class="row" style="width:50%">
            <input v-model="usuario.email" placeholder="Correo Electronico" type="email" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input v-model="usuario.contraseña" placeholder="Constraseña" type="password" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <button class="btn btn-outline-success" @click="loguin" type="submit">INICIAR SESION</button>
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
import { useLoginStore } from "../stores/login.js";
export default {
    data(){
        return {
            usuario: {email: '', contraseña: ''}
        }
    },
    setup() {
        const store = useLoginStore();
        const { login } = store;
        return { login };
    },
    methods:{
        redirigir(){
            this.$router.push("/Registrar")
        },
        loguin(){
            //conexion con la api
            this.login();
            this.$router.push("/");
        }
    },
}
</script>
