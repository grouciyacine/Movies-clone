import React from "react";
import { OutlineButton } from "../componenent/button/Button";
import HeroSlide from "../componenent/hero-slide/HeroSlide";
import { Link } from "react-router-dom";
import MovieList from "../componenent/movie-list/MovieList";
import { category,movieType,tvType } from "../API/tmdbapi";
const Home=()=>{
    return(
        <>
      
            <HeroSlide/>
                <div className="container">
                    <div className="section mb-3">
                        <div className="section__header mb-2">
                            <h2>Trending Movies</h2>
                            
                                 <Link  to="/movie">
                                 <OutlineButton className="small" > view more</OutlineButton>
                                  </Link>
                            
                        </div>
                         <MovieList category={category.movie} type={movieType.popular} />
                    </div>
                
                    <div className="section mb-3">
                        <div className="section__header mb-2">
                            <h2>Top Rated Movies</h2>
                            
                                 <Link  to="/movie">
                                 <OutlineButton className="small" > view more</OutlineButton>
                                  </Link>
                            
                        </div>
                         <MovieList category={category.movie} type={movieType.top_rated} />
                    </div>
                    <div className="section mb-3">
                        <div className="section__header mb-2">
                            <h2>Trending TV</h2>
                            
                                 <Link  to="/tv">
                                 <OutlineButton className="small" > view more</OutlineButton>
                                  </Link>
                            
                        </div>
                         <MovieList category={category.tv} type={tvType.popular} />
                    </div>
                    <div className="section mb-3">
                        <div className="section__header mb-2">
                            <h2>Top Rated tv</h2>
                            
                                 <Link  to="/movie">
                                 <OutlineButton className="small" > view more</OutlineButton>
                                  </Link>
                            
                        </div>
                         <MovieList category={category.tv} type={tvType.top_rated}  />
                         
                    </div>
                </div>
            
        </>
    );
}
export default Home