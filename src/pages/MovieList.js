import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../components/video';
import cn from 'classnames';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
// import '../App.css';
import TabView from '../components/tab-view/index';
import Layout from '../components/Layout';
import { kebabCase } from 'lodash';

// till egen fil
export const MovieInfo = (props) => {
  const [desc, setDescription] = useState(false)

  const activateVideo = () => {

  //   setPageNumber(1)

  //   axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

  //     if (res.data.results[0]) {

  //       setCurrentVideo(
  //         'https://www.youtube.com/embed/' + res.data.results[0].key
  //       )

  //       setCurrentVideoTitle(
  //         res.data.results[0].name
  //       )

  //       setCurrentMovieID(
  //         props.id
  //       )

  //       setCurrentRelease(
  //         props.release_date
  //       )

  //       setCurrentTitle(
  //         props.title
  //       )

  //       setCurrentDescription(
  //         props.overview
  //       )

  //       setCurrentRating(
  //         props.vote_average.toFixed(1)
  //       )

  //       setCurrentImage(
  //         props.poster_path
  //       )

  //       setVideo(true)

  //       axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

  //         if (res.data.production_countries) {
  //           setCurrentCountry(
  //             res.data.production_countries[0].name
  //           )
  //         }

  //         setCurrentGenre(
  //           res.data.genres.map(({ name }) => ` ${name}`).join(',')
  //         )

  //       })

  //       window.scrollTo(0, 0)

  //     }
  //     else {
  //       setVideo((
  //         video = false
  //       ))
  //     }

  //   })

  //   console.log("opening");
  }


  return (
    <Link to={`/movie/${kebabCase(props.title)}`}>

      <ol className="Movie-list">
        <li className="Movie-list">

          <div className="Movie-background">

              <img src={props.poster_path} className="Movie-image" onMouseEnter={() => setDescription(true)} onMouseLeave={() => setDescription(false)} onClick={activateVideo} ></img>

            {desc && (
              <div className="Description-window">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="Movie-title"> {props.title} </h1>
                <p>{props.overview}</p>
              </div>
            )}

          </div>

          <div className="rating-background">

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" className="Star-icon"></img>
            <p className="Movie-rating">{props.vote_average.toFixed(1)}/10</p>

          </div>

          <div className="rate-background">
            <br></br>
          </div>

        </li>
      </ol>

    </Link>
  )
}

const MovieList = ({ listType }) => {
  const [currentMovieID, setCurrentMovieID] = useState()
  const [pageNumber, setPageNumber] = useState(1)

  let [movieList, setMovieList] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${listType}?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US&page=${pageNumber}`).then(res => {
      setMovieList(res.data.results)
    })
  }, [pageNumber])

  return (
    <Layout className="App">
      <div className="Movie-pages">
        <Link to='/popular/1'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>1</button>
        </Link>
        <Link to='/popular/2'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 2, })} onClick={() => setPageNumber(2)}>2</button>
        </Link>
        <Link to='/popular/3'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 3, })} onClick={() => setPageNumber(3)}>3</button>
        </Link>
        <Link to='/popular/4'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 4, })} onClick={() => setPageNumber(4)}>4</button>
        </Link>
        <Link to='/popular/5'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 5, })} onClick={() => setPageNumber(5)}>5</button>
        </Link>
      </div>

      <div className="movie-titles">
        {movieList.map(movie => (
          <MovieInfo key={movie.id} release_date={movie.release_date} title={movie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} id={movie.id} />
        ))}
      </div>

      <div className="Movie-pages-bottom">
        <Link to='/popular/1'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>1</button>
        </Link>
        <Link to='/popular/2'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 2, })} onClick={() => setPageNumber(2)}>2</button>
        </Link>
        <Link to='/popular/3'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 3, })} onClick={() => setPageNumber(3)}>3</button>
        </Link>
        <Link to='/popular/4'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 4, })} onClick={() => setPageNumber(4)}>4</button>
        </Link>
        <Link to='/popular/5'>
          <button className={cn('Page-button', { 'Page-button-active': pageNumber === 5, })} onClick={() => setPageNumber(5)}>5</button>
        </Link>
      </div>
    </Layout>
  );
}

export default MovieList