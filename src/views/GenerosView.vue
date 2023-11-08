<template>
    <div class="container mt-4">
        <h1>Generos</h1>
        <div class="card">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="generos in pelicula.genres"
            :key="pelicula.name">
            {{ pelicula.name }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import PelicService from '@/services/PelicService'

    export default {
        name: 'GenerosView',
        data(){
            return {
                pelicula:{},
            };
        },
        async created(){
            const peliName = this.$route.params.title;
            this.pelicula=await PelicService.getInfoMovie(peliName);
        },
    };
</script>