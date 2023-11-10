<template>
    <div class="container mt-4">
      <h1>Productora</h1>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="Productora in pelicula.production_companies"
            :key="Productora.id">
            <img
            v-if="Productora.logo_path"
            :src="`https://image.tmdb.org/t/p/w500` + Productora.logo_path"
            alt=""
          />
            {{ Productora.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import PelicService from "@/services/PelicService";
  
  export default {
    name: "ProductoraView",
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
  