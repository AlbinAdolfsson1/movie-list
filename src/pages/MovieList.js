import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../components/layout/layout';
import Pagination from '../components/pagination/pagination';
import { MovieInfo } from '../components/movie-info/movieInfo';
import ListType from '../components/ListType/list-type';

const MovieList = ({ categorieType }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [listType, setListType] = useState('movie')
    const [maxpage, setMaxPage] = useState(1)
    let [movieList, setMovieList] = useState([])
    let [scrollList, setScrollList] = useState([])

      useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/${listType}/${categorieType}?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US&page=${pageNumber}`).then(res => {
          setMovieList(res.data.results)
          setMaxPage(res.data.total_pages)
        })

        axios.get(`https://api.themoviedb.org/3/trending/${listType}/week?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US&page=1`).then(res => {
          setScrollList(res.data.results)
        })
          
      }, [pageNumber, listType])

      const PrevScroll = () => {
        document.getElementById("sidescroll").scrollTo(document.getElementById("sidescroll").scrollLeft - 300, 0)
      }

      const NextScroll = () => {
        document.getElementById("sidescroll").scrollTo( document.getElementById("sidescroll").scrollLeft + 300, 0)
      }

      return (
        <Layout className="App">

          <div className="Movie-titles">
            <h1 className="Scroll-title">Trending Now</h1>
            <div id="sidescroll" className="Sidescroll">
              <button className="prevScroll" onClick={PrevScroll}>‹</button>
                {scrollList.map(scrollmovie => (
                    <MovieInfo key={scrollmovie.id} categorieType={categorieType} listType={listType} release_date={scrollmovie.release_date} title={scrollmovie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + scrollmovie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + scrollmovie.poster_path} vote_average={scrollmovie.vote_average} overview={scrollmovie.overview} id={scrollmovie.id} />
                ))}
                <button className="nextScroll" onClick={NextScroll}>›</button>
            </div>

            <div className="Movie-pages">
              <Pagination key={pageNumber} setPageNumber={setPageNumber} pageNumber={pageNumber} maxPage={maxpage}/>
            </div>

            {categorieType !== 'upcoming' &&(
            <div className="List-type">
              <ListType setListType={setListType} listType={listType} setPageNumber={setPageNumber}/>
            </div>
            )}

              {movieList.map(movie => (
                <MovieInfo key={movie.id} categorieType={categorieType} listType={listType} release_date={movie.release_date} title={movie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} id={movie.id} />
              ))}
          </div>

          {pageNumber !== maxpage &&(
            <div className="Movie-pages-bottom">
              <Pagination key={pageNumber} setPageNumber={setPageNumber} pageNumber={pageNumber} maxPage={maxpage}/>
            </div> 
          )}

        </Layout>
      );

    }


export default MovieList