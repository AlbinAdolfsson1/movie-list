import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { element } from 'prop-types';
import ReactPlayer from 'react-player';

let currentTitle = `The Movie List`;

const title = <h1 className="App-title">{currentTitle}</h1>;

const App = () => {
  const [popular, setPopular] = useState(false)
  const [topMovies, setTopmovies] = useState(false)
  const [upcomingMovies, setUpcomingMovies] = useState(true)
  const [similarMovies, setSimilarMovies] = useState([])
  let [video, setVideo] = useState(false)
  let [currentList, setList] = useState([])
  let [currentVideo, setCurrentVideo] = useState('')
  let [currentVideoTitle, setCurrentVideoTitle] = useState('')
  let [currentMovieID, setCurrentMovieID] = useState()

  const ActivatePopular = () => {
    setPopular((
      popular, true
    ))

    setTopmovies((
      topMovies, false
    ))

    setUpcomingMovies((
      upcomingMovies, false
    ))

    setVideo((
      video = false
    ))
  }

  const ActivateTopMovies = () => {
    setTopmovies((
      topMovies, true
    ))

    setUpcomingMovies((
      upcomingMovies, false
    ))

    setPopular((
      popular, false
    ))

    setVideo((
      video = false
    ))
  }

  const ActivateUpcoming = () => {
    setUpcomingMovies((
      upcomingMovies, true
    ))

    setTopmovies((
      topMovies, false
    ))

    setPopular((
      popular, false
    ))

    setVideo((
      video = false
    ))
  }

  useEffect(() => {

    if (popular)
    {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1b34b56c896270b1a9bdd7563b01f45d').then(res => {

      setList(
        res.data.results
      )

      })
    }
    else if (topMovies)
    {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=1b34b56c896270b1a9bdd7563b01f45d').then(res => {

      setList(
        res.data.results
      )

      console.log(res.data)
    
      })
    }
    else if (upcomingMovies)
    {
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1b34b56c896270b1a9bdd7563b01f45d').then(res => {

      setList(
        res.data.results
      )

      console.log(res.data)
    
      })
    }
    
    if (video)
    {
      axios.get(`https://api.themoviedb.org/3/movie/${currentMovieID}/similar?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

        setList(
          res.data.results
        )

        console.log(res.data)
    
      })
    }

    console.log(similarMovies)

  }, [popular, topMovies, upcomingMovies, similarMovies, currentMovieID] )

  const MovieInfo = (props) => {
    const [desc, setDescription] = useState(false)

    const activateVideo = () => {

        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

        if (res.data.results[0])
        {
          setCurrentMovieID (
            props.id
          )

          setCurrentVideo(
            'https://www.youtube.com/embed/' + res.data.results[0].key
          )

          setCurrentVideoTitle(
            res.data.results[0].name
          )

          console.log(res.data.results)

          setVideo(true)

          setUpcomingMovies((
            upcomingMovies, false
          ))
      
          setTopmovies((
            topMovies, false
          ))
      
          setPopular((
            popular, false
          ))

          console.log(currentVideo)

          window.scrollTo(0,0)
        }
        else
        {
          setVideo((
            video = false
          ))
        }

        })


    }

    if (props.id != currentMovieID)
    {
      return (
        <div>
  
          <ol className="Movie-list">
            <li className="Movie-list">
  
            <div className="Movie-background">
  
              <img src={props.poster_path} className="Movie-image" onMouseEnter={() => setDescription(true)} onMouseLeave={() => setDescription(false)} onClick={activateVideo} ></img>
  
              {desc &&(
                <div className="Description-window">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="Movie-title"> {props.title} </h1>
                <p>{props.overview}</p>
              </div>
              )}
  
            </div>
  
            <div className="rating-background">
  
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" className="Star-icon"></img>
              <p className="Movie-rating">{props.vote_average}/10</p>
  
            </div>
  
            <div className="rate-background">
              <br></br>
            </div>
  
          </li>
          </ol>
  
        </div>
      )
    }
    else
    {
      return (
        <div>
          
        </div>
      )
    }
  }

  console.log(currentVideo)

  return (
    <div className="App">
      <header className="App-header">
        <ol className="Categorie-list">
          <li className="Title">
            {title}
          </li>

          <li className="Categorie-list">
            <button onClick={ActivatePopular}>

              Popular

            </button>
          </li>
          <li className="Categorie-list">
            <button onClick={ActivateTopMovies}>

              Top Movies

            </button>
          </li>
          <li className="Categorie-list">
            <button onClick={ActivateUpcoming}>

              Upcoming

            </button>
          </li>
        </ol>

      </header>

      {video &&(
        <div className="video">
          <h1 className="video-title">{currentVideoTitle}</h1>
        <ReactPlayer url={currentVideo} width={900} height={500}/>
        </div>
      )}

      <div className="movie-titles">
          {currentList.map((list) => {
            return (
              <MovieInfo title={list.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + list.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + list.poster_path} vote_average={list.vote_average} overview={list.overview} id={list.id}/>
            );
          })}
      </div>

    </div>
    
  );
}

export default App;
