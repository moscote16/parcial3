<template>
  <nav>|
    <router-link to="/">Genero</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">

body {
  background-color: antiquewhite;
  // background-image: url('https://img.freepik.com/fotos-premium/concepto-accesorios-cine-sobre-fondo-madera-oscura_185193-61023.jpg?w=360');
  // background-repeat: no-repeat;
  // background-size: cover;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
