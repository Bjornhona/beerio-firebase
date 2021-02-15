import React, { useState } from 'react';
import './Login.css';
import auth from '../../lib/auth-service';
import { Link, useHistory } from 'react-router-dom';
import { withAuth } from '../../lib/authContext';

const Login = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
    alert: ""
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = state;

    auth.login({ username, password })
    .then((user) => {
      props.setUser(user);
      history.push('/home'); 
    })
    .catch(error => {
      console.error('Error');
      const { data } = error.response;
      switch(data.error){
        case 'not-found':
          setState(prevState => ({ ...prevState, alert: '*Invalid username or password' }));
          break;
        case 'validation':
          setState(prevState => ({ ...prevState, alert: '*Username or password can´t be empty' }));
          break;
        default:
          setState(prevState => ({ ...prevState, alert: '' }));
      }   
    });
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="login-div">
      <span className="login-background"></span>
      <span className="light-overlay"></span>
      <span className="login-box">
        <h1>Beerio</h1>
        <h5>Welcome back, log in to enter the world of beers!</h5>
        <form onSubmit={handleFormSubmit} className="login-form">
          <input type="text" name="username" placeholder="Username" value={state.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
          <input type="submit" value="Log in" className="common-button login-button" />
          {/* { state.alert ? <div className="alert"><h5>{state.alert}</h5></div> : null} */}
          <div className={state.alert ? "alert" : "hiddenAlert"}><h5>{state.alert}</h5></div>
          <p className="login-footer">Don´t have an account yet? 
            <Link to={"/signup"} className="signup-text"> Sign up</Link>
          </p>
        </form>
      </span>
    </div>
  )
}

export default withAuth(Login);