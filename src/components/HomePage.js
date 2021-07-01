import React from "react";
import Home from './Home.js';
import Cattles from './Cattles.js';
import EachCattle from './EachCattle.js';

const HomePage=()=>{
    return(
        <div>
            <h1>Cattle</h1>
            <Home/>
            <Cattles/>
        </div>
    )
}
export default HomePage;