import React from "react";
import './footer.scss';
import {Link} from 'react-router-dom'
import bg from '../../assets/R.jpg';
import logo from '../../assets/logo1.png';
const Footer=()=>{
    return(
        <div className="footer" style={{backgroundImage:` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg})`}}>
            <div className="footer__content container">
           <div className="footer__content__logo">
           <div className="logo">
                <img src={logo} alt="" />
                <Link to="/">tMovies</Link>
            </div>
           </div>
           <div className="footer__content__menus">
           <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About Us</Link>
            </div>
            <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FaQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Prevacy policy</Link>
            </div>
            <div className="footer__content__menu">
            <Link to="/">You must watch </Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
            
            </div>
           </div>
            </div>
            Footer
        </div>
    )
}
export default Footer