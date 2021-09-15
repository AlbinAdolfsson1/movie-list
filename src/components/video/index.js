import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

const Video = ( { movieData, movieCountry, movieGenres, movieTrailer, movieCompanies, movieStream } ) => {

    return (
        <div>

            <img src={'https://image.tmdb.org/t/p/w500/' + movieData. backdrop_path} alt="" className="Details-backdrop"></img>

            <div className="video">
                {movieTrailer &&(
                    <ReactPlayer url={movieTrailer} className="Video-player" width={900} height={500}/>
                )}
                
                {movieStream &&(
                    <a href={movieStream} className="Details-stream"><h1>Watch Movie</h1></a>
                )}

                <div className="Movie-details">
                    {movieData.title &&(
                        <h1 className="Details-title">{movieData.title}</h1>
                    )}
                    {!movieData.title &&(
                        <h1 className="Details-title">{movieData.name}</h1>
                    )}
                    <br></br>
                    {movieData.poster_path &&(
                        <img src={'https://image.tmdb.org/t/p/w500/' + movieData.poster_path} alt="" className="Details-image"></img>
                    )}
                    <p className="Details-desc">{movieData.overview}</p>
                </div>
                <div className="Details-holder">
                    <p className="Details-type">Release: {movieData.release_date}</p>
                    <p className="Details-type">Country: {movieCountry}</p>
                    <p className="Details-type">Genres: {movieGenres}</p>
                    <p className="Details-type">Companies: {movieCompanies}</p>
                </div>

                <p className="Details-rating"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" alt="" className="Details-star"></img>{movieData.vote_average}/10</p>
            </div>
        </div>
    );
}

export default Video;