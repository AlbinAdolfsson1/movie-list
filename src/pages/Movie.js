import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';


import Layout from '../components/layout/layout'
import Video from '../components/video'
import { MovieInfo } from '../components/movie-info/movieInfo'

const Movie = () => {
    const { movie } = useParams()
    const [movieData, setMovieData] = useState([])
    const [movieList, setMovieList] = useState([])
    const [movieCountry, setMovieCountry] = useState('')
    const [movieGenres, setMovieGenres] = useState('')
    const [movieVideo, setCurrentMovieVideo] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
            setMovieData(res.data)
            setMovieCountry(res.data.production_countries[0].name)
            setMovieGenres(res.data.genres.map(({name}) => ` ${name}`).join(','))
        })

        axios.get(`https://api.themoviedb.org/3/movie/${movie}/videos?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
            if (res.data.results[0]){
                setCurrentMovieVideo('https://www.youtube.com/embed/' + res.data.results[0].key)
            }
            else{

            }
        })

        axios.get(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
          setMovieList(res.data.results)
        })

        window.scrollTo(0, 0)

        console.log(movie)
    }, [movie])

    return (
        <Layout>
            <Video movieData={movieData} movieCountry={movieCountry} movieGenres={movieGenres} movieTrailer={movieVideo}/>

            {movieList.map(movie => (
                <MovieInfo key={movie.id} release_date={movie.release_date} title={movie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} id={movie.id} />
            ))}
        </Layout>
    )
}

export default Movie
