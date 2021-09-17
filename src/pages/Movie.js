import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../components/layout/layout'
import Video from '../components/video'
import { MovieInfo } from '../components/movie-info/movieInfo'
import Reviews from '../components/reviews/reviews'

const Movie = () => {
    const { movie } = useParams()
    const { listType } = useParams()
    const [movieData, setMovieData] = useState([])
    const [movieList, setMovieList] = useState([])
    const [reviews, setReviews] = useState([])
    const [movieCompanies, setMovieCampany] = useState('')
    const [movieCountry, setMovieCountry] = useState('')
    const [movieGenres, setMovieGenres] = useState('')
    const [movieVideo, setCurrentMovieVideo] = useState('')
    const [movieStream, setMovieStream] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${listType}/${movie}?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
            setMovieData(res.data)
            if (res.data.production_countries[0]) setMovieCountry(res.data.production_countries[0].name)
            setMovieGenres(res.data.genres.map(({name}) => ` ${name}`).join(','))
            setMovieCampany(res.data.production_companies.map(({name}) => ` ${name}`).join(','))
            setMovieStream(res.data.homepage)
        })

        axios.get(`https://api.themoviedb.org/3/${listType}/${movie}/videos?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
            if (res.data.results[0]) setCurrentMovieVideo('https://www.youtube.com/embed/' + res.data.results[0].key)
        })

        axios.get(`https://api.themoviedb.org/3/${listType}/${movie}/similar?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
          setMovieList(res.data.results)
        })

        axios.get(`https://api.themoviedb.org/3/${listType}/${movie}/reviews?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US`).then(res => {
            setReviews(res.data.results)
        })

        window.scrollTo(0, 0)
        
    }, [movie])

    return (
        <Layout>
            <div className="Movie-backdrop">
                <Video movieData={movieData} movieStream={movieStream} movieCountry={movieCountry} movieGenres={movieGenres} movieTrailer={movieVideo} movieCompanies={movieCompanies}/>

                {movieList.map(movie => (
                    <MovieInfo key={movie.id} listType={listType} release_date={movie.release_date} title={movie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} id={movie.id} />
                ))}

                {reviews.map(review => (
                    <Reviews key={review.id} id={review.id} author={review.author} author_path={review.author_details.avatar_path} rating={review.author_details.rating} content={review.content} posted={review.created_at}/>
                ))}

            </div>
        </Layout>
    )
}

export default Movie
