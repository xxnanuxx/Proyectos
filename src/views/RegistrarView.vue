<template>
<div class="container">
    <div class="col" style="margin-top:20px">
        <div class="row">
            <h4>REGISTRAR USUARIO</h4>
        </div>
        <div class="row" style="width:50%">
            <input placeholder="Nombre" type="search" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input placeholder="Apellido" type="search" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input placeholder="Correo Electronico" type="search" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <input placeholder="Contraseña" type="search" class="form-control">
        </div>
        <div class="row" style="margin-top:10px; width:50%">
            <button class="btn btn-outline-success" @click="redirigir" type="submit">CREAR CUENTA</button>
        </div>
    </div>
</div>
</template>