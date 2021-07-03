import PropTypes from 'prop-types';
import image from '.././assets/images/ankole-bg2.png'
const Home=()=>{
    return(
       <div className="home">
               <div className="sidebar">
                   <h3>Categories</h3>
                   <ul>
                       <li><a href="">Beef Cattle</a></li>
                       <li><a href="">Diary Cattle</a></li>
                       <li><a href="">Calves</a></li>
                   </ul>
                   {/* <h5>Cattle Gender</h5>
                   
                      <ul>
                        <li><label>Male<input type="checkbox"/></label></li>
                        <li><label>Female<input type="checkbox"/></label></li>
                      </ul> */}
               </div>
               <div className="text">
                   <h1>ONLINE CATTLE <br/> SELLING APP</h1>
                   <div class="desc ">
                        <p>Making it easier <br/> for buyers and sellers of cattle <br/>in the Uganda </p>
                   </div>
                  
               </div>
               <div className="image">
                  <img src={image} alt="image"/>
               </div>
         
       </div>
    );
  
}

export default Home;