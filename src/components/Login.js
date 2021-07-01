import React from 'react';
import Footer from './Footer.js';
const Login=()=>{
    return(
        <div className="">
            <form>
                <h1>SIGN IN</h1>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="text"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div className="action-links">
                    <input type="submit" value="Sign in"/>
                    <label>I forgot password</label>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
export default Login;