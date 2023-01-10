import React,{useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import './moviegrid.scss';
import MovieCard from '../movie-card/MovieCard'

import tmdbapi, { category, movieType, tvType } from "../../API/tmdbapi";
import Button, { OutlineButton } from "../button/Button";

import Input from "../input/Input"
import { useCallback } from "react";
 
const MovieGrid=props=>{
    const [items,setItems]=useState([])
    const [page,setPage]=useState(1)
    const [totalPage,setTotalPage]=useState(0);
    const {keyword}=useParams()
    useEffect(()=>{
       const getList=async()=>{

        let response=null;
        if(keyword===undefined){
            const params={};
        switch(props.category){
case category.movie:
    response =await tmdbapi.getMoviesList(movieType.upcoming,{params});
    break;
    default:
        response=await tmdbapi.getTvList(tvType.popular,{params})
        }
        }else{
            const params={
                query:keyword
            }
            response =await tmdbapi.search(props.category,{params});
        }
        setItems(response.results)
        setTotalPage(response.totalPage)
       } 
       getList()
    },[props.category,keyword]);





  








const loadmore=async ()=>{
     let response=null;
        if(keyword===undefined){
            const params={
                page:page +1
            };
        switch(props.category){
case category.movie:
    response =await tmdbapi.getMoviesList(movieType.upcoming,{params});
    break;
    default:
        response=await tmdbapi.getTvList(tvType.popular,{params})
        }
        }else{
            const params={
                page:page+1,
                query:keyword
            }
            response =await tmdbapi.search(props.category,{params});
        }
        setItems([... items,...response.results])
        setPage(page+1)
}
    return(
<>
<div className="section mb-3">
<MovieSearch category={props.category} keyword={keyword}/>
</div>
<div className="movie-grid">
{
    items.map((item,i)=><MovieCard category={props.category} item={item} key={i}/>)
}
</div>




 {
  //page<totalPage ? (
<div className="move-grid__loadmore">
    <OutlineButton className="small1"  onClick={loadmore}>Load more</OutlineButton>
</div>
   //):null
 }   

</>

    );

    


}
const MovieSearch=props=>{
    const history =useHistory();
    const [keyword,setKeyword]=useState(props.keyword ? props.keyword:'');
    const goTosearch=useCallback(
        ()=>{
            if(keyword.trim().length>0){
                history.push(`${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword,props.category,history]
    );
    useEffect(()=>{
        const enterEvent=(e)=>{
            e.preventDefault();
            if(e.keyCode===13){
                goTosearch();
            }
        }
        document.addEventListener('keyup',enterEvent);
        return()=>{
            document.removeEventListener('keyup',enterEvent);
        };
    },[keyword,goTosearch]);
    return(
       <div className="movie-search">
       
            <Input             
            type="text"
            placeholder="Enter a Keyword"
            value={keyword}
            onChange={(e)=>setKeyword(e.target.value)} />
            <Button className="smal" onClick={goTosearch}> Searche</Button>
        </div>
    )
}
export default MovieGrid;