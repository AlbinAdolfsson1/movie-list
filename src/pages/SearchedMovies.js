import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/layout'
import { MovieInfo } from '../components/movie-info/movieInfo'
import Pagination from '../components/pagination/pagination'
import axios from 'axios'
import { useParams } from 'react-router'

const SearchedMovies = () => {
    const { search } = useParams()
    const [searchList, setSearchList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [maxpage, setMaxPage] = useState(0)
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1b34b56c896270b1a9bdd7563b01f45d&language=en-US&query=${search}&page=${pageNumber}&include_adult=false`).then(res => {
            setSearchList(res.data.results)
            setMaxPage(res.data.total_pages)

            console.log(res.data)
        })
    }, [search, pageNumber] )
    return (
        <Layout>

            <div className="Movie-pages">
                <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPage={maxpage}/>
            </div>

            {searchList.map(searchedMovie => (
                <MovieInfo key={searchedMovie.id} release_date={searchedMovie.release_date} title={searchedMovie.title} backdrop_path={'https://image.tmdb.org/t/p/w500/' + searchedMovie.backdrop_path} poster_path={'https://image.tmdb.org/t/p/w500/' + searchedMovie.poster_path} vote_average={searchedMovie.vote_average} overview={searchedMovie.overview} id={searchedMovie.id} />
            ))}

            {pageNumber != maxpage &&(
                <div className="Movie-pages-bottom">
                    <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} maxPage={maxpage}/>
                </div>
            )}

        </Layout>
    )

}

export default SearchedMovies