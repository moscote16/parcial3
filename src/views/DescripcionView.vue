<template>
    <div class="container mt-4">
      <h1>Descripcion</h1>
        <p>{{ pelicula.overview }}</p>
    </div>
  </template>
  
  <script>
  import PelicService from "@/services/PelicService";
  
  export default {
    name: "DescripcionView",
    data() {
      return {
        pelicula: {},
      };
    },
    async created() {
      const pelisid = this.$route.params.id;
      this.pelicula = await PelicService.getInfoMovie(pelisid);
    },
  };
  </script>
  