import React from "react";
// import Home from './Home.js';
import CattleSection from './CattleSection.js';
import NavigationBar from './NavigationBar.js';
import HomeSection from './HomeSection.js';
import Footer from './Footer.js';

const HomePage=()=>{
    return(
        <div>
           
            <HomeSection/>
            <CattleSection/>
            <Footer/>
        </div>
    )
}
export default HomePage;