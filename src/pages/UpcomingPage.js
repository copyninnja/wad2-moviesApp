import React, { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import  AddToWatchListButton from '../components/buttons/addToWatchList'

const UpcomingPage = () => {

    const [movies, setMovies] = useState([]);
     useEffect(() => {
      getUpcomingMovies().then(movies => {
        setMovies(movies);
      });
    }, []);
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchListButton movie={movie} />;
          }}
        />      

    );
  };
  export default UpcomingPage;