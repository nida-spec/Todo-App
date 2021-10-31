import React, {useState} from 'react'
import './App.css';
import Container from './components/Container';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup';



function App() {
  const userAuth={
    username: "Test",
    password: "user123"
}

const [user, setUser]= useState({username:""})
const [error, setError]= useState("")

const loginFunc=(details)=>{
  console.log(details)
  if(details.username === userAuth.username && details.password === userAuth.password){
      console.log("logged in")
      setUser({
          username: details.name
      })
  }
  else{
      console.log("invalid username and password")
      setError("Invalid username/password")
    
  }

}
  return (
    <>
    {(user.username !== "") ? (
      <Container/>
    ):(
      <Login loginFunc={loginFunc} error={error} />
    )}
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/main" component={Container}/>
        <Route exact path="/signup" component={Signup}/>
        
        
        </Switch>
        </Router>
              

    </>
  );
}

export default App;
