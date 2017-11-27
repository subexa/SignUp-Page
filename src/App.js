import React, { Component } from 'react';

import Login from './Login';
import SignUp from './SignUp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      invalidEmailError: "",
      firstNameList: [],
      lastNameList: [],
      emailAddressList: [],
      passwordList: [],
      confirmPasswordList: []
    }
  }

  getFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  getLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  getEmailAddress = (e) => {
    this.setState({
      emailAddress: e.target.value
    })
  }

  setInputPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  confirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  checkPassword = () => {
    if(this.state.password === this.state.confirmPassword) {
      if(this.state.password.length < 8) {
        this.setState({
          errorMessage: "Password should be 8 characters or long"
        })
      } else {
        this.setState({
          errorMessage: ""
        })
      }
    } else {
      this.setState({
        errorMessage: "Password Don't Match"
      })
    }
  }

  checkDetails = () => {    
    this.checkPassword();
    this.checkEmail();
    this.storeFirstNames();
    this.storeLastNames();
    this.storeEmailAddress();
    this.storePassword();
    this.storeConfirmPassword();
  }

  checkEmail = () => {
    var re = /\S+@\S+\.\S+/;
    const validity = re.test(this.state.emailAddress);
    if(validity === false) {
      this.setState({
        invalidEmailError: 'Please enter a valid Email Address'
      })
    } else {
      this.setState({
        invalidEmailError: ''
      })
    }
  }

  storeFirstNames = () => {
    this.setState({
      firstNameList: this.state.firstNameList.concat(this.state.firstName),
    }, () => this.setFirstNameList(this.state.firstNameList));
  }

  storeLastNames = () => {
    this.setState({
      lastNameList: this.state.lastNameList.concat(this.state.lastName),
    }, () => this.setLastNameList(this.state.lastNameList));
  }

  storeEmailAddress = () => {
    this.setState({
      emailAddressList: this.state.emailAddressList.concat(this.state.emailAddress),
    }, () => this.setEmailAddressList(this.state.emailAddressList));
  }

  storePassword = () => {
    this.setState({
      passwordList: this.state.passwordList.concat(this.state.password),
    }, () => this.setPasswordList(this.state.passwordList));
  }

  storeConfirmPassword = () => {
    this.setState({
      confirmPasswordList: this.state.confirmPasswordList.concat(this.state.confirmPassword),
    }, () => this.setConfirmPasswordList(this.state.confirmPasswordList));
  }

  setFirstNameList = (firstNameList) => {
    localStorage.setItem('firstNames', JSON.stringify(firstNameList))
  }

  setLastNameList = (lastNameList) => {
    localStorage.setItem('lastNames', JSON.stringify(lastNameList))
  }

  setEmailAddressList = (emailAddressList) => {
    localStorage.setItem('emailAddresses', JSON.stringify(emailAddressList))
  }

  setPasswordList = (passwordList) => {
    localStorage.setItem('passwords', JSON.stringify(passwordList))
  }

  setConfirmPasswordList = (confirmPasswordList) => {
    localStorage.setItem('confirmpasswords', JSON.stringify(confirmPasswordList))
  }

  componentDidMount() {
    const firstNames = JSON.parse(localStorage.getItem('firstNames'));
    const lastNames = JSON.parse(localStorage.getItem('lastNames'));
    const emailAddresses = JSON.parse(localStorage.getItem('emailAddresses'));
    const passwords = JSON.parse(localStorage.getItem('passwords'));
    const confirmpasswords = JSON.parse(localStorage.getItem('confirmpasswords'));

    if(firstNames === null) {
      this.setState({
        firstNameList: this.state.firstNameList
      })
    } else {
      this.setState({
        firstNameList: firstNames
      })
    }

    if(lastNames === null) {
      this.setState({
        lastNameList: this.state.lastNameList
      })
    } else {
      this.setState({
        lastNameList: lastNames
      })
    }

    if(emailAddresses === null) {
      this.setState({
        emailAddressList: this.state.emailAddressList
      })
    } else {
      this.setState({
        emailAddressList: emailAddresses
      })
    }

    if(passwords === null) {
      this.setState({
        passwordList: this.state.passwordList
      })
    } else {
      this.setState({
        passwordList: passwords
      })
    }  

    if(confirmpasswords === null) {
      this.setState({
        confirmPasswordList: this.state.confirmPasswordList
      })
    } else {
      this.setState({
        confirmPasswordList: confirmpasswords
      })
    }
  }

  render() {
    return (
      <div className="App">
        {/*<Login />*/}
        <SignUp 
          getFirstName={this.getFirstName}
          getLastName={this.getLastName}
          setInputPassword={this.setInputPassword}
          emailAddress={this.state.emailAddress}
          getEmailAddress={this.getEmailAddress}
          confirmPassword={this.confirmPassword}
          checkDetails={this.checkDetails}
          errorMessage={this.state.errorMessage}
          invalidEmailError={this.state.invalidEmailError}
        />
      </div>
    );
  }
}

export default App;
