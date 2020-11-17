import React, {
    useState,
    useEffect,
    useContext
} from "react";
import Karousel from "../components/Carousel";
import Header from "../components/headerMovieList";
import {getRequstToken,postLogin,postAuthentication} from '../api/tmdb-api';
import {MoviesContext} from '../contexts/moviesContext'

const TopRatePage = () => {
    let request_token=null;
    const[session_id,setSession_id]=useState(null)

    useEffect(() => {
        getRequstToken().then(function onFulfilled(value) {
          console.log("request_token is", JSON.stringify(value));
          request_token=value;
          postLogin(value).then(
            function onFulfilled(value) {
              console.log("request_token is", value);
              postAuthentication(request_token).then(function onFulfilled(value) {
                console.log("sessionid is", value);
                setSession_id(value);
              }).catch(function onRejected(error) {
                console.log("error", error);
              })
            }
          )
    
        });
    },[]);
    const context = useContext(MoviesContext);

    const movies = context.TopRate;

    console.log("session-id is",session_id);

    return ( 
        <>
        <Header title="TopRateMovie" numMovies={movies.length} />
       <Karousel movies={movies} session_id={session_id}/>
      </>
    );
};

export default TopRatePage;