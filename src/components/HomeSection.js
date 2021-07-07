import PropTypes from 'prop-types';
import image from '.././assets/images/ankole-bg2.png';
import {Link} from 'react-router-dom';

const HomeSection=()=>{
    return(
       <div className="home">
               <div className="sidebar">
                   <h3>Categories</h3>
                   <ul>
                       <li>
                           <Link to="/cattle-category">Beef Cattle</Link>
                       </li>
                       <li>
                           <Link to="/cattle-category">Beef Cattle</Link>
                       </li>
                       <li>
                           <Link to="/cattle-category">Beef Cattle</Link>
                       </li>
                   </ul>
               </div>
               <div className="text">
                   <h1>ONLINE CATTLE <br/> SELLING APP</h1>
                   <div className="desc ">
                        <p>Making it easier <br/> for buyers and sellers of cattle <br/>in the Uganda </p>
                   </div>
                  
               </div>
               <div className="image">
                  <img src={image} alt="image"/>
               </div>
         
       </div>
    );
  
}

export default HomeSection;