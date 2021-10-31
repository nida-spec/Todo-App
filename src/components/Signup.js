import React from 'react'

function Signup() {
    return (
        <>
          <div className="container">
            <div className="main-card-signup">
                <h2>Sign up</h2>
                <form className="login-form">
                    <input type="text" placeholder="Enter Username" className="username-input"  required/>
                    <input type="email" placeholder="Enter Email" className="username-input"  required/>
                    <input type="password" placeholder="Enter Password" className="password-input" required/>
                    <input type="password" placeholder="Confirm Password" className="password-input" required/>
       
                <div className="login-btn">
                    <button type="submit" className="btn-login">Register</button>
                </div>
                </form>
                <div className="small">
                <span>Have an account? <a href="/login">Click here.</a></span>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Signup
