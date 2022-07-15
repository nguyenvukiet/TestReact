import React, {useState} from 'react'

import Grid from '../components/Grid'

import LoginForm from '../components/LoginForm'

const Login = () => {

  const adminUser = {
    email: 'admin@gmail.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    }else {
      console.log("Details do not match !");
      setError("Details do not match !");
    }
  }

  const Logout = () => {
    setUser({name:"", email:""});
  }



  return (
   <div ClassName="login" id="login">
      <div>
        {(user.email !== "") ? (
            <div className="welcome">
              <h2>Wecome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <LoginForm Login={Login} error={error} />
          )}
      </div>
      <div className="cookies">
        <Grid
                  col= {3}
                  mdCol = {3}
                  smCol = {3}
                  gap = {50}
          >
            <div>
              <a href="/">Privacy Notice</a>
            </div>
            <div>
              <a href="/">Cookies Notice</a>
            </div>
            <div>
              <a href="/">Cookies Settings</a>
            </div>
          </Grid>
      </div>
   </div>
  )
}

export default Login
