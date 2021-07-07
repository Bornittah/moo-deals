import React from 'react';
import Footer from './Footer.js';

const Register=()=>{
    return(
        <div>
       
        <div className="account-form">
            <form >
                <h1>ACCOUNT DETAILS</h1>
                <div className="form-group">
                    <label>Fullname</label>
                    <input type="text"/>
                </div>
                <div className="two-columns">
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                    <label>Alternative</label>
                    <input type="text"/>
                </div>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="text"/>
                </div>
                <div className="two-columns">
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password"/>
                </div>
                </div>
                <div><p>Location Details</p></div>
                <div className="two-columns">
                    <div className="form-group">
                        <labe>Village</labe>
                        <select>
                            <option>Village</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Parish</label>
                        <select>
                            <option>Parish</option>
                        </select>
                    </div>
                </div>
                <div className="two-columns">
                    <div className="form-group">
                        <label>Sub-County</label>
                        <select>
                            <option>Sub-County</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>District</label>
                        <select>
                            <option>District</option>
                        </select>
                    </div>
                </div>
                <div className="action-links">
                    <div className="check">
                        <input type="check" checked="checked"/>
                        <span>I have read Terms & Conditions</span>
                    </div>
                    <input type="submit" value="Register"/>
                   
                </div>
            </form>
           
        </div>
        <Footer/> 
        </div>
    )
}
export default Register;