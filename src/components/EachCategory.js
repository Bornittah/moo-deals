import React from 'react';
import Sidebar from './CategorySideBar.js';
import CategoryContent from './CategoryContent';

function EachCategory(){
    return(
        <div class="container">
            <Sidebar/>
            <CategoryContent/>
        </div>
    );
}
export default EachCategory;