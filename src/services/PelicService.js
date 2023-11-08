import axios from "axios"
export default{
    async getGenero(){
        return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.genres
        })
        
        .catch(error =>{
            console.log (error)
        })
    },  
    async getGenPeliculas(id){
        return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=492d218f089fd8c20e9c3a945b482a9f&language=esCO&with_genres=${id}`)
        .then(response =>{
            return response.data.results
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getInfoMovie(id){
        return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getCartelera(){
        return await axios.get('https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.results
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getPopulares(){
        return await axios.get('https://api.themoviedb.org/3/movie/popular?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.results
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getBestCalificadas(){
        return await axios.get('https://api.themoviedb.org/3/movie/top_rated/?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.results
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
}