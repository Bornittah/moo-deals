import React from 'react';
import {Link} from 'react-router-dom';

function CategorySideBar(){
    return(
        <div className="category-sidebar">
        <nav>
            <ul>
                <li><Link to="/beef-cattle">Beef Cattle</Link></li>
                <li><Link to="/diary-cattle">Diary Cattle</Link></li>
                <li><Link to="/calvies">Calvies</Link></li>
                <li><Link to="/bulls">Bulls</Link></li>
            </ul>
        </nav>
    </div>
    );
}
export default CategorySideBar;