import React,{useState,useEffect} from "react";
//import {useparams}from 'react-router-dom'
import tmdbapi from "../../API/tmdbapi";
import apiconfig from "../../API/apiconfig";
import {useParams} from 'react-router';
const CastList=props=>{
    const {category}=useParams();
    const [casts,setCasts]=useState([]);

    useEffect(()=>{
     const getcredits=async()=>{
        const res=await tmdbapi.credits(category,props.id)
        setCasts(res.cast.slice(0,5));
     }
     getcredits();
    },[category,props.id])
    return(
        <div className="casts">
{
    casts.map((item,i)=>(
        <div key={i} className="casts__item">
            <div className="casts__item__img" style={{backgroundImage:`url(${apiconfig.
                w500Image(item.profile_path)})`}}></div>
                <p className="casts__item__name">{item.name}</p>
            </div>
    ))
}
        </div>
    );
}
export default CastList