import React,{useState,useEffect} from "react";
import PropTypes  from "prop-types";

import './lovielist.scss'
import { SwiperSlide , Swiper } from "swiper/react";
import { Link } from "react-router-dom";

import Button from "../button/Button";
import tmdbapi, {category} from "../../API/tmdbapi";
import MovieCard from "../movie-card/MovieCard";

import apiconfig from "../../API/apiconfig";
const MovieList=props =>{
    const[items,setItems]=useState([]);
    useEffect(()=>{
        const getList=async ()=>{
            let response=null;
            const params={};

            if(props.type !=='similar'){
                switch(props.category){
                    case category.movie:
                        response=await tmdbapi.getMoviesList(props.type,{params});
                        break;
                        default:
                            response=await tmdbapi.getTvList(props.type,{params});
                }
            }else{
                response=await tmdbapi.similar(props.category,props.id);

            }
            setItems(response.results)
              console.log(response.results)
        } 
            
        
        getList();
    },[]);
    return (
        
       <div className="movie-list">
            <Swiper grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}>
                {
                    items.map((item,i)=>(
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        

    )
}
MovieList.propTypes={
    category:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired

}
export default MovieList