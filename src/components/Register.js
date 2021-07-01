import React from 'react';
import Footer from './Footer.js';

const Register=()=>{
    return(
        <div>
            <form>
                <h1>ACCOUNT DETAILS</h1>
                <div className="form-group">
                    <label>Fullname</label>
                    <input type="text"/>
                </div>
                <div className="two-columns">
                    <div className="form-group">
                        <labe>Phone number</labe>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                    <labe>Alternative</labe>
                    <input type="text"/>
                </div>
                </div>
                <div className="form-group">
                    <labe>Email Address</labe>
                    <input type="text"/>
                </div>
                <div className="two-columns">
                    <div className="form-group">
                        <labe>Password</labe>
                        <input type="password"/>
                    </div>
                    <div className="form-group">
                    <labe>Confirm Password</labe>
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
                        <labe>Parish</labe>
                        <select>
                            <option>Parish</option>
                        </select>
                    </div>
                </div>
                <div className="two-columns">
                    <div className="form-group">
                        <labe>Sub-County</labe>
                        <select>
                            <option>Sub-County</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <labe>District</labe>
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
            <Footer/>
        </div>
    )
}
export default Register;