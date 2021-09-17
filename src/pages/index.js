import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Layout from '../components/layout/layout';
import { MovieInfo } from '../components/movie-info/movieInfo';



const IndexPage = () => {
  let [movieList, setMovieList] = useState([])
  let listType = 'movie'

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
      setMovieList(res.data.results)
    })
  }, [])

  return (
    <Layout className="App">
      <div>
        <div className="Trending">
          <h1>Trending Movies</h1>
        </div>

          <div className="Movie-titles">
            {movieList.map(movie => (
              <MovieInfo key={movie.id} listType={listType} release_date={movie.release_date} title={movie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} id={movie.id} />
            ))}
          </div>
      </div>
    </Layout>
    
  );
}

export default IndexPage
