<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9 col-md-8 mb-4">
                <h1>Peliculas de </h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex flex-wrap">
                 <div class="d-flex col mb-5 mx-6" v-for="Pelicula in Peliculas" :key="Pelicula.id">
                   <!-- <router-link :to="{name:'Detail-Movie',params:{id:Pelicula.id}}" > -->
                    <router-link :to="{ path: '/MovieDetail/'+Pelicula.id}">
                    <div class="card">
                        <div class="card-image">
                            <img class="img" :src="`https://image.tmdb.org/t/p/w500`+Pelicula.poster_path" alt="">
                        </div>
                        <div class="category"> {{Pelicula.title}} </div>
                        <div class="heading"><strong>Popularidad: {{Pelicula.vote_average}}%</strong>
                            <div class="author">Fecha: <span class="name">{{Pelicula.release_date}}</span></div>
                        </div>
                      </div>
                    </router-link>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import PelicService from '@/services/PelicService';

export default {
    name: 'PelisGeneroView',
    data() {
      return {
        Peliculas:[]
      };
    },
    async created() {
      const Generoid = this.$route.params.id;
      this.Peliculas = await PelicService.getGenPeliculas(Generoid)
      console.log(this.Peliculas);
    },
}
</script>