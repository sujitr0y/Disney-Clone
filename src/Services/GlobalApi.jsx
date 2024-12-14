import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '770783db8417fffdabe6fa92715b9e4d'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=770783db8417fffdabe6fa92715b9e4d'

//https://api.themoviedb.org/3/trending/all/day?api_key=770783db8417fffdabe6fa92715b9e4d
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+'&with_genres='+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}