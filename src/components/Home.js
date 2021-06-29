import PropTypes from 'prop-types';

const Home=({title})=>{
    return(
       <div className="home">
           <nav>
               <div className="sidebar">
                   <ul>
                       <li><a href="">Beef Cattle</a></li>
                       <li><a href="">Diary Cattle</a></li>
                       <li><a href="">Calves</a></li>
                   </ul>
               </div>
               <div className="text">
                   <h1></h1>
                   <p></p>
               </div>
               <div className="image">
                  <img src="" alt="image"/>
               </div>
           </nav>
       </div>
    );
}
Home.propTypes={
 title:'ONLINE CATTLE SELLING APP'
}
export default Home;