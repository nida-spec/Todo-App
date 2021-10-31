import React, { useState } from 'react'

const Login=({loginFunc, error})=> {
  
    const [details, setDetails]= useState({username:"", password:""})

    const handleSubmit=(e)=>{
        e.preventDefault()
        loginFunc(details)
    }
    return (
        <>
          <div className="container">
            <div className="main-card-login">
                <h2>Log in</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Username" id="username" className="username-input" 
                    onChange={e => setDetails({...details, username: e.target.value})} value={details.username} required/>
                   
                    <input type="password" placeholder="Enter Password" id="password" className="password-input" 
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required/>
       
                <div className="login-btn">
                    <button type="submit" className="btn-login">Login</button>
                </div>
                </form>
                <div className="small">
                <span>Don't have an account? <a href="/signup">Click here.</a></span>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Login