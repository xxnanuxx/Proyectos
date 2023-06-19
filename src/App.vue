<script>
import { RouterLink, RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";

export default {
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions, isLoginn } = store
    return { store, isLogin, user, hasPermissions, isLoginn };
  }
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="navbar-brand">
                <img src="/src/assets/logo.svg" width="30" height="30">
              </a>
            </li>
             <li class="nav-item" style="margin-left:50px">
              <input class="form-control" type="search" placeholder="Ingrese el libro">
            </li>
            <li class="nav-item" style="margin-left:5px">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </li>
            <li class="nav-item" style="margin-left:5px">
              <RouterLink to="/AgregarLibro">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Agregar Libro</button>
              </RouterLink>
            </li>
             <li class="nav-item, position-absolute end-0" style="margin-left:50px">
              <RouterLink to="/InicioSesion">
                <button v-if="!isLogin" class="btn btn-outline-success my-2 my-sm-0" type="submit">Iniciar Sesion</button>
              </RouterLink>
              <button v-if="isLogin" @click="logout" class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerrar Sesion</button>
            </li>
          </ul>
        </div>
    </nav>
  <RouterView />
  </div>
</template>

<style>
</style>
