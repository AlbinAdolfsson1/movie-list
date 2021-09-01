import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Video = (props) => {

    const [pageNumber, setPageNumber] = useState(1)


    return (
        <div>
            <div className="video">
                <ReactPlayer url={props.currentVideo} width={900} height={500}/>

                <div className="Movie-details">
                    <h1 className="Details-title">{props.currrentTitle}</h1>
                    <br></br>
                    <img src={props.currentImage} className="Details-image"></img>
                    <p className="Details-desc">{props.currrentDescription}</p>
                </div>
                <div className="Details-holder">
                    <p className="Details-type">Release: {props.currentRelease}</p>
                    <p className="Details-type">Country: {props.currentCountry}</p>
                    <p className="Details-type">Genres: {props.currentGenre}</p>
                </div>

                <p className="Details-rating"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" className="Details-star"></img>{props.currrentRating}/10</p>
            </div>
        </div>
    );
}

export default Video;