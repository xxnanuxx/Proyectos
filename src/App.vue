<script>
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
             <li class="nav-item, position-absolute start-40" style="margin-left:50px">
              <input class="form-control mr-sm-2" type="search" placeholder="Ingrese el libro">
            </li>
             <li class="nav-item, position-absolute start-50" style="margin-left:5px">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </li>
             <li class="nav-item, position-absolute end-0" style="margin-left:50px">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Iniciar Sesion</button>
            </li>
          </ul>
        </div>
    </nav>
  <RouterView />
  </div>
</template>

<style>
</style>
