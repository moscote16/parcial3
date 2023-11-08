<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9 col-md-8 mb-4">
                <h1>Detalles de la Pelicula</h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9 col-md-8 mb-4">
                <div class="card-image">
                    <h1>Detalle</h1>
                    <img class="img" src="/" alt="">
                </div>
            </div>
        </div>
    </div>
    <router-view/>
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
        console.log(this.GPelicula)
    }
}
</script>