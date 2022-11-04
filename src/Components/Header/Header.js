import React from "react";
import "./Header.css"
import {Link } from "react-router-dom"
const Header =() =>{
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to ="/"><img className="header__icon" src = "https://cdn.vox-cdn.com/thumbor/Osw_p9952-bjsAVucboh05RbHD0=/0x0:2040x1360/1820x1024/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66952568/jbareham_200318_1006_movie_night_0001.0.jpg"></img></Link>
                <Link to ="/Movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to ="/Movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to ="/Movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>

            </div>


        </div>

    )

}
export default Header
