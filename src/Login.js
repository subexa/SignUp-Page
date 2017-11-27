import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';

import './Login.css';

class Login extends Component {
  render() {
    return(
      <div>
        <Card className="login-container">
          <div className="header">
            Log in to FreightHub
          </div>
          <div className="subtitle">
            New to FreightHub? <a href="./SignUp" style={{color: "#00A5F5"}}> Sign Up </a>
          </div>
          <div>
            <TextField
              floatingLabelText="Email"
              fullWidth={true}
            />
            <TextField
              floatingLabelText="Password"
              fullWidth={true}
            />
          </div>
          <div className="footer-container">
            <div className="reset-password">
              Unable to log in? <br/>
              <a href="" style={{color: "#00A5F5"}}>Reset Password</a>
            </div>
            <div className="log-in">
              <RaisedButton 
                label="LOGIN" 
                primary={true}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;