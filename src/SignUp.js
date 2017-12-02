import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './SignUp.css';

class SignUp extends Component {
  render() {
  const errorMessage = this.props.errorMessage;
  const invalidEmailError = this.props.invalidEmailError;
    return(
        <Card className="container">
          <CardTitle
            title="Create New Account"
            className="title"
          />
          <div>
            <TextField
              floatingLabelText="First Name"
              onChange={this.props.getFirstName}              
            />
          </div>
          <div>
            <TextField
              floatingLabelText="Last Name"
              onChange={this.props.getLastName}
            />
          </div>
          <div>
            <TextField
              floatingLabelText="Email Address"
              onChange={this.props.getEmailAddress}
              errorText={invalidEmailError}
            />
          </div>
          <div>
            <TextField
              floatingLabelText="Password"
              type="password"
              onChange={this.props.setInputPassword}
            />
          </div>
          <div>
            <TextField
              floatingLabelText="Confirm Password"
              type="password"
              onChange={this.props.confirmPassword}
              errorText={errorMessage}
            />
          </div>
          <RaisedButton 
            label="SignUp" 
            primary={true} 
            fullWidth={true} 
            className="signup-button" 
            onClick={this.props.checkDetails}
          />
        </Card>
    );
  }
}

export default SignUp;