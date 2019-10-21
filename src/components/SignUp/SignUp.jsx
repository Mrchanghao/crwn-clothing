import React, { Component } from 'react'
import './SignUp.scss'

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends Component {

  state = {
    displayName: '',
    password: '',
    email: '',
    confirmPassword: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {displayName, password, confirmPassword, email} = this.state;

    if(password !== confirmPassword) {
      alert("password doesn't match");
      return;
    };

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        password: '',
        email: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const {value, name} = e.target 

    this.setState({
      [name]: value
    })

  }


  render() {
    const {displayName, password, confirmPassword, email} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Don't you have an account?</h2>
        <span>Sign up with email and password</span>
        <form className='sign=up-form' onSubmit={this.handleSubmit}> 
          <FormInput name='displayName' type='text' 
            value={displayName}
            onChange={this.handleChange}
            label='Display name'
            required
          />
          <FormInput name='email' type='text' 
            value={email}
            onChange={this.handleChange}
            label='email'
            required
          />
          <FormInput name='password' type='password' 
            value={password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <FormInput name='confirmPassword' type='password' 
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirmPassword'
            required
          />

          <CustomButton type='submit'>
            Sign Up
          </CustomButton>
          
        </form>
      </div>
    )
  }
};


export default  SignUp;