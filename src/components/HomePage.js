import React from "react";
// import Home from './Home.js';
import CattleSection from './CattleSection.js';
import NavigationBar from './NavigationBar.js';
import Home from './Home.js';
import Footer from './Footer.js';

const HomePage=()=>{
    return(
        <div>
            <NavigationBar/>
            <Home/>
            <CattleSection/>
            <Footer/>
        </div>
    )
}
export default HomePage;