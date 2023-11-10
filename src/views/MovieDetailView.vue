<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-9 col-md-8 mb-4">
        <h1>{{ GPelicula.title }}</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-sm-6">
        <div class="card-image">
          <img
            class="img"
            v-if="GPelicula.poster_path"
            :src="`https://image.tmdb.org/t/p/w500` + GPelicula.poster_path"
            alt=""
          />
          <div class="author">
            Fecha: <span class="name">{{ GPelicula.release_date }}</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
         <router-link :to="{ name: 'Descripcion', params: { id: GPelicula.id } }">  
          <button>Descripcion</button>
        </router-link>
        <router-link :to="{ name: 'Generos', params: { id: GPelicula.id } }">   <!--:to="{ name: 'Generos', params: { id: GPelicula.id } }" -->
          <button>Generos</button>
        </router-link>
        <router-link :to="{ name: 'Productora', params: { id: GPelicula.id } }">
          <button>Productoras</button>
        </router-link>
        <router-link :to="{ name: 'Trailer', params: { id: GPelicula.id } }">
          <button>Trailer</button>
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script lang="js">
import PelicService from '@/services/PelicService'

export default {
    name: 'MovieDetailView',
    data() {
        return {
            GPelicula: {}
        };
    },
    async created() {
        const peliculaId = this.$route.params.id;
        this.GPelicula = await PelicService.getInfoMovie(peliculaId);
        // var Imagen = this.GPelicula.poster_path
        console.log(this.GPelicula)
    }
}
</script>
