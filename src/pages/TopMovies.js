import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../components/video';
import cn from 'classnames';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const TopMovies = () => {
    const [currentMovieID, setCurrentMovieID] = useState()
    const [pageNumber, setPageNumber] = useState(1)
    const [maxPage, setMaxPage] = useState(0)

    let [movieList, setMovieList] = useState([])
    let [video, setVideo] = useState(false)
    let [currentVideo, setCurrentVideo] = useState('')
    let [currentVideoTitle, setCurrentVideoTitle] = useState('')

    let [currrentTitle, setCurrentTitle] = useState('')
    let [currrentDescription, setCurrentDescription] = useState('')
    let [currrentRating, setCurrentRating] = useState('')
    let [currentImage, setCurrentImage] = useState('')
    let [currentRelease, setCurrentRelease] = useState('')
    let [currentCountry, setCurrentCountry] = useState('')
    let [currentGenre, setCurrentGenre] = useState('') 

    useEffect(() => {

        if (video) {

            if (pageNumber == 1)
            {
                axios.get(`https://api.themoviedb.org/3/movie/${currentMovieID}/recommendations?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

                setMovieList(
                res.data.results
                )
            
                })
            }
            else if (pageNumber == 2) 
            {
                axios.get(`https://api.themoviedb.org/3/movie/${currentMovieID}/similar?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

                setMovieList(
                res.data.results
                )
            
                })
            }

        }
        else {

            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US&page=${pageNumber}`).then(res => {

            setMovieList(
                res.data.results
                
            )

            setMaxPage(
              res.data.total_pages
            )
            
            })

        }
        
    }, [pageNumber, currentMovieID] )

    const MovieInfo = (props) => {
        const [desc, setDescription] = useState(false)

        const activateVideo = () => {

            setPageNumber(1)

            axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {
    
            if (res.data.results[0])
            {

                setCurrentVideo(
                'https://www.youtube.com/embed/' + res.data.results[0].key
                )

                setCurrentVideoTitle(
                res.data.results[0].name
                )

                setCurrentMovieID (
                props.id
                )

                setCurrentRelease(
                props.release_date
                )

                setCurrentTitle(
                props.title
                )

                setCurrentDescription(
                props.overview
                )

                setCurrentRating(
                props.vote_average.toFixed(1)
                )
                
                setCurrentImage(
                props.poster_path
                )

                setVideo(true)

                axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=1b34b56c896270b1a9bdd7563b01f45d`).then(res => {

                if (res.data.production_countries[0])
                {
                    setCurrentCountry(
                        res.data.production_countries[0].name
                    )
                }

                setCurrentGenre(
                    res.data.genres.map(({name}) => ` ${name}`).join(',')
                )

                })

                window.scrollTo(0,0)

            }
            else
            {
                setVideo((
                    video = false
                ))
            }

            })

            console.log("opening");
        }
    
        if (props.id != currentMovieID)
        {
          return (
            <div>
      
              <ol className="Movie-list">
                <li className="Movie-list">
      
                <div className="Movie-background">

                <Link to='/'>
                  <img src={props.poster_path} className="Movie-image" onMouseEnter={() => setDescription(true)} onMouseLeave={() => setDescription(false)} onClick={activateVideo} ></img>
                </Link>
      
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
                  <p className="Movie-rating">{props.vote_average.toFixed(1)}/10</p>
      
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

    return (
    <div className="App">

        {!video &&(
            <div className="Movie-pages">
              <Link to='/topMovies/1'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>1</button>
              </Link>
              <Link to='/topMovies/2'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 2, })} onClick={() => setPageNumber(2)}>2</button>
              </Link>
              <Link to='/topMovies/3'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 3, })} onClick={() => setPageNumber(3)}>3</button>
              </Link>
              <Link to='/topMovies/4'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 4, })} onClick={() => setPageNumber(4)}>4</button>
              </Link>
              <Link to='/topMovies/5'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 5, })} onClick={() => setPageNumber(5)}>5</button>
              </Link>
            </div>
        )}

        {video &&(
            <div>
                <Video currentVideo={currentVideo} currrentTitle={currrentTitle} currentImage={currentImage} currrentDescription={currrentDescription} currentRelease={currentRelease} currentCountry={currentCountry} currentGenre={currentGenre} currrentRating={currrentRating} />

                <div className="Movie-related">
                    <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>Similar Movies</button>
                    <button className={cn('Page-button', {'Page-button-active': pageNumber === 2, })} onClick={() => setPageNumber(2)}>Recommendations</button>
                </div>
            </div>
        )}

        <div className="movie-titles">
            {movieList.map((list) => {
            return (
                <MovieInfo release_date={list.release_date} title={list.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + list.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + list.poster_path} vote_average={list.vote_average} overview={list.overview} id={list.id}/>
            );
            })}
        </div>

        {!video &&(
            <div className="Movie-pages-bottom">
              <Link to='/topMovies/1'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 1, })} onClick={() => setPageNumber(1)}>1</button>
              </Link>
              <Link to='/topMovies/2'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 2, })} onClick={() => setPageNumber(2)}>2</button>
              </Link>
              <Link to='/topMovies/3'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 3, })} onClick={() => setPageNumber(3)}>3</button>
              </Link>
              <Link to='/topMovies/4'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 4, })} onClick={() => setPageNumber(4)}>4</button>
              </Link>
              <Link to='/topMovies/5'>
                <button className={cn('Page-button', {'Page-button-active': pageNumber === 5, })} onClick={() => setPageNumber(5)}>5</button>
              </Link>
            </div>
        )}

    </div>
    
    );
}




export default TopMovies