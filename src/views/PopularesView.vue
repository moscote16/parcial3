<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-8 mb-5">
                <h1 class="text-sucess text-center">
                    Populares
                </h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex flex-wrap">
                 <div class="d-flex col mb-5 mx-6" v-for="Populares in Populare" :key="Populares.id">
                    <div class="card">
                        <div class="card-image">
                            <img class="img" :src="`https://image.tmdb.org/t/p/w500`+Populares.poster_path" alt="">
                            <!-- {{ Cartelera.poster_path }} -->
                        </div>
                        <div class="category"> {{Populares.title}} </div>
                        <div class="heading"><strong>Popularidad: {{Populares.popularity}}</strong>
                            <div class="author">Fecha: <span class="name">{{Populares.release_date}}</span></div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import PelicService from '@/services/PelicService'

export default {
    name: 'PopularesView',
    data() {
        return {
            Populare: []
        }
    },
    async created() {
        this.Populare = await PelicService.getPopulares()
        console.log(this.Populare)
    }
}
</script>