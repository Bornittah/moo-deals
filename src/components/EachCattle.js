import React from "react";
import images from '.././assets/images/index.js';
import PropTypes from 'prop-types';
import Footer from './Footer.js';

const EachCattle=()=>{
    return(
        <div className="catlle-display">
            <div className="row">
                <div className="column">
                    <div className="follow-pages">
                        <span>Home</span>/
                        <span>Cattle</span>/
                    </div>
                    <div className="images-section">
                        <img src={images.cattle1} alt=""/>
                    </div>
                </div>
                <div className="column">
                    <div className="cattle-details">
                        <h1>Cattle name</h1>
                        <div className="contact-seller">
                            <button>Call seller</button>
                            <button>Send email</button>
                        </div>
                        <div className="description">
                            <h1>Description</h1>
                            <p>
                            Bulls up to one year of age require an intensive feeding program to help assure fast growth, high post-weaning average daily gain, and heavy yearling weight.
                            </p>
                        </div>
                        <div className="details">
                        <h1>Details</h1>
                        <table>
                            <tr>
                                <td>Quantity:</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Each price:</td>
                                <td>UGX:800K</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>Ruti, Mbarara</td>
                            </tr>
                            <tr>
                                <td>Category:</td>
                                <td>Beef Cattle</td>
                            </tr>
                            <tr>
                                <td>Listing Date:</td>
                                <td>1st July 2021 12:00</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default EachCattle;