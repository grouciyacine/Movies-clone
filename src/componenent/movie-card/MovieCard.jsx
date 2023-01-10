import React from "react";

import "./move-card.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { category } from "../../API/tmdbapi";
import apiconfig from "../../API/apiconfig";

const MovieCard =props=>{
   const item=props.item;
   const link='/'+category[props.category]+'/'+item.id;
   const bg= apiconfig.w500Image(item.poster_path || item.backdrop_path)

   
    return(
        <Link to={link}>
        <div className="movie-card" style={{backgroundImage:`url(${bg})`}}>
      <Button>
        <i className="bx bx-play"></i>
      </Button>
        </div>
        <h3>{item.title || item.className || item.name} </h3>
        </Link>
    )
}
export default MovieCard