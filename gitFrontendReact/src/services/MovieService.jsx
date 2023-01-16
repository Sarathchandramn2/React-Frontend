import axios from "axios";
export function getMovie(){
    return axios.get('http://127.0.0.1:8000/movies/')
    .then(response => response.data)
    .catch(err => console.log('Error: ', err))
}


export function addMovie(movie){
    return axios.post('http://127.0.0.1:8000/movies/' , {
        MovieName:movie.MovieName.value,
        MovieGenre:movie.MovieGenre.value,
        Director:movie.Director.value,
        Language:movie.Language.value
        })
    .then(response => response.data)
    .catch(err => console.log('Error: ', err))
}


export function updateMovie(movie , movieId){
    console.log(movie,movieId)
    return axios.put('http://127.0.0.1:8000/movies/' + movieId+'/', {
        
        MovieName:movie.MovieName,
        MovieGenre:movie.MovieGenre,
        Director:movie.Director,
        Language:movie.Language,
        })
    .then(response => response.data)
    .catch(err => console.log('Error: ', err))
}


export function deleteMovie(movieId){
    return axios.delete('http://127.0.0.1:8000/movies/' + movieId+ '/',
    {
        method:'Delete',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    })
    .then(response => response.data)
    .catch(err => console.log('Error: ', err))
}
