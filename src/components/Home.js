import PropTypes from 'prop-types';
import image from '.././assets/images/ankole-bg2.png'
const Home=()=>{
    return(
       <div className="home">
         
               <div className="sidebar">
                   <ul>
                       <li><a href="">Beef Cattle</a></li>
                       <li><a href="">Diary Cattle</a></li>
                       <li><a href="">Calves</a></li>
                   </ul>
               </div>
               <div className="text">
                   <h1>ONLINE CATTLE SELLING APP</h1>
                   <p>Making it easier  for buyers and sellers of cattle in the Uganda </p>
               </div>
               <div className="image">
                  <img src={image} alt="image"/>
               </div>
         
       </div>
    );
  
}

export default Home;