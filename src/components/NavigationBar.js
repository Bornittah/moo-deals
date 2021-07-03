 import React from 'react';
 import {Link} from 'react-router-dom';

 const NavigationBar=()=>{
     return(
     
        <div className="top-bar">
            <div className="logo">
            <Link to={"/"} className="link">
                <h1>Moo Deals</h1>
            </Link>
               
            </div>
            <div className="search">
                <input type="" placeholder="Search Cattle"/>
            </div>
            <div className="menu">
                <Link to={"/login"}>Login</Link>/
                <Link to={"/register"}>Register</Link>
            </div>
        </div>
       
   
     );
 }
 export default NavigationBar;