
import React from "react";
import {Link} from 'react-router-dom';
import images from '../assets/images/index.js';
import PropTypes from 'prop-types';

 const CattleSection=()=>{
     return(
        <div className="cattle-section">
            <div className="head-section">
                <h1>Cattle for sale</h1>
                <select>
                    <option> Filter by Location</option>
                </select>
            </div>
            <div className="cattles-for-sale">
            
                <div className="each-cattle">
                <Link to="/cattle-for-sale">
                    <img src={images.cattle1} alt="cattle1"/>
                        <div className="title-price">
                                <div id="cattle-name"><span>Cattle 1</span></div>
                                <div id="cattle-price">UGX:<span >800,000</span></div>
                        </div>
                </Link>
                </div>
              <div className="each-cattle">
              <Link to="/cattle-for-sale">
                    <img src={images.cattle2} alt="cattle1"/>
                        <div className="title-price">
                                <div id="cattle-name"><span>Cattle 1</span></div>
                                <div id="cattle-price">UGX:<span >800,000</span></div>
                        </div>
                </Link>
                </div>
                <div className="each-cattle">
                <Link to="/cattle-for-sale">
                    <img src={images.cattle3} alt="cattle1"/>
                        <div className="title-price">
                                <div id="cattle-name"><span>Cattle 1</span></div>
                                <div id="cattle-price">UGX:<span >800,000</span></div>
                        </div>
                     </Link>
                </div>
                <div className="each-cattle">
                <Link to="/cattle-for-sale">
                    <img src={images.cattle4} alt="cattle1"/>
                        <div className="title-price">
                                <div id="cattle-name"><span>Cattle 1</span></div>
                                <div id="cattle-price">UGX:<span >800,000</span></div>
                        </div>
                     </Link>
                </div> 
            </div>
        </div>
     )
 }
 export default CattleSection