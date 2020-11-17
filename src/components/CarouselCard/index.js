import React from "react";
import { Link } from "react-router-dom";
import Rank from '../rate';

import "./card.css";

const CarouselCard = ({movie,session_id}) => {

    return (
<div>
      <h2>
        <span>
        <Link to={`/movies/${movie.id}`}>
        <img
          className="abc "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <Rank movie={movie} session_id={session_id}/>
        </span>       
        </h2>

    </div>



    )

}
export default CarouselCard;
