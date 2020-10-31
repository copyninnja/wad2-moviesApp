import React, { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
const UpcomingPage = () => {
    const toDo = () => true;

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
          buttonHandler={toDo}
        />      

    );
  };
  export default UpcomingPage;