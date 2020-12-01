import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";

const TemplateMoviePage = ({ movie, children }) => {
  const style ={
    bgd:{
        color: 'rgba(0,0,0,.70)',
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        backgroundSize: '100%,100%',
    }
  }

  return (
    <>
 <div style={style.bgd}> 
      <MovieHeader movie={movie} />
      <div className="row" >
        <div className="col-3">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={movie.title}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
      </div>
    </>
  );
};

export default TemplateMoviePage;