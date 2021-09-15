import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../components/layout/layout';
import Pagination from '../components/pagination/pagination';
import { MovieInfo } from '../components/movie-info/movieInfo';

const MovieList = ({ listType }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [maxpage, setMaxPage] = useState(1)

    let [movieList, setMovieList] = useState([])

      useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${listType}?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US&page=${pageNumber}`).then(res => {
          setMovieList(res.data.results)
          setMaxPage(res.data.total_pages)
        })
          
      }, [pageNumber])

      return (
        <Layout className="App">

          <div className="Movie-pages">
            <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPage={maxpage}/>
          </div>

          <div className="Movie-titles">
              {movieList.map(movie => (
                <MovieInfo key={movie.id} release_date={movie.release_date} title={movie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} id={movie.id} />
              ))}
          </div>

          {pageNumber !== maxpage &&(
            <div className="Movie-pages-bottom">
              <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPage={maxpage}/>
            </div>
          )}

        </Layout>
      );

    }


export default MovieList