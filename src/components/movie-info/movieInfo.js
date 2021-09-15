import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';

export const MovieInfo = (props) => {
    const [desc, setDescription] = useState(false)
  
    return (
        <Link to={`/movie/${kebabCase(props.id)}/${kebabCase(props.title)}`}>
  
          <ol className="Movie-list"> 
            <li className="Movie-list">
  
            <div className="Movie-background">
              
                  <img src={props.poster_path} className="Movie-image" onMouseEnter={() => setDescription(true)} onMouseLeave={() => setDescription(false)} ></img>
  
                {desc &&(
                  <div className="Description-window">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h1 className="Movie-title">{props.title} </h1>
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