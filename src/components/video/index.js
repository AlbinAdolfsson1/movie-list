import React from 'react';
import ReactPlayer from 'react-player';

const Video = ( { movieData, movieCountry, movieGenres, movieTrailer } ) => {

    return (
        <div>
            <div className="video">
                {movieTrailer &&(
                    <ReactPlayer url={movieTrailer} width={900} height={500}/>
                )}

                <div className="Movie-details">
                    <h1 className="Details-title">{movieData.title}</h1>
                    <br></br>
                    <img src={'https://image.tmdb.org/t/p/w500/' + movieData.poster_path} className="Details-image"></img>
                    <p className="Details-desc">{movieData.overview}</p>
                </div>
                <div className="Details-holder">
                    <p className="Details-type">Release: {movieData.release_date}</p>
                    <p className="Details-type">Country: {movieCountry}</p>
                    <p className="Details-type">Genres: {movieGenres}</p>
                </div>

                <p className="Details-rating"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" className="Details-star"></img>{movieData.vote_average}/10</p>
            </div>
        </div>
    );
}

export default Video;