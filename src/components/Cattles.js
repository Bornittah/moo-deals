import images from '.././assets/images/index.js';
import PropTypes from 'prop-types';

 const Cattles=()=>{
     return(
        <div className="cattle-section">
            <div className="head-section">
                <h1>Cattle for sale</h1>
                <select>
                    <option>Location</option>
                </select>
            </div>
            <div className="cattles-for-sale">
                <div classname="each-cattle">
                    <img src="" alt="cattle1"/>
                    <p>
                        <span>Name</span>
                        <span>Price</span>
                    </p>
                </div>
            </div>
        </div>
     )
 }
 export default Cattles