import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import creatHistory from 'history/createBrowserHistory' 
const MovieHeader = ({ movie }) => {
  const history = creatHistory();

  return (
    <div className="row">  
    <button onClick={() => history.goBack()} >Back
            <FontAwesomeIcon  icon={"arrow-circle-left"} size="1x" />
            </button>
      <div className="col-6 offset-3">
    
        <h2>
          {movie.title}
          {"  "}
          <a href={movie.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default MovieHeader;