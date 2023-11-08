<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-8">
                <h1 class="text-sucess text-center">
                    Cartelera
                </h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex flex-wrap">
                 <div class="d-flex col mb-4 mx-4" v-for="Cartelera in Carteleras" :key="Cartelera.id">
                    <div class="card">
                        <div class="card-image">
                            <img class="img" :src="`https://image.tmdb.org/t/p/w500`+Cartelera.poster_path" alt="">
                            <!-- {{ Cartelera.poster_path }} -->
                        </div>
                        <div class="category"> {{Cartelera.title}} </div>
                        <div class="heading"><strong>Popularidad: {{Cartelera.popularity}}</strong>
                            <div class="author">Fecha: <span class="name">{{Cartelera.release_date}}</span></div>
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
    name: 'CarteleraView',
    data() {
        return {
            Carteleras: []
        }
    },
    async created() {
        this.Carteleras = await PelicService.getCartelera()
        console.log(this.Carteleras)
    }
}
</script>

<style>
.card {
  width: 475px;
  height: 600px;
  background-color: #E0E0E0;
  /* background-color: black; */
  padding: .4em;
  border-radius: 6px;
}

.card:hover{
  transform: scale(0.98);
  box-shadow: rgb(0, 0, 0) 5px 10px 50px, rgb(0, 0, 0) -5px 0px 250px;
  color: beige;
}

.card-image {
  justify-items: center;
  background-color: rgb(236, 236, 236);
  width: 99%;
  height: 80%;
  border-radius: 6px 6px 0 0;
}

.img {
  width: 100%;
  height: 470px;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: 600;
  color: #1976D2;
  padding: 10px 7px 0;
}

strong {
  color: #009966;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  /* color: rgb(88, 87, 87); */
  color: #90A4AE;
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}

</style>