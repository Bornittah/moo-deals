 import React from 'react';
 import {Link} from 'react-router-dom';

 const NavigationBar=()=>{
     return(
        <div className="top-bar">
            
                <div className="logo">
                    <h1>Moo Deals</h1>
                </div>
                <div className="search">
                    <input type="" placeholder="Search Cattle"/>
                </div>
                <div className="menu">
                    <Link to="/login"><a href="">Login</a></Link>/
                    <Link to="/register"><a href="">Register</a></Link>
                </div>
        </div>
     );
 }
 export default NavigationBar;