import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const {value, name} = e.target 

    this.setState({
      [name]: value
    })

  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.error(error);
    }

    
  }

  render() {
    const {email, password} = this.state
    return (
      <div className='sign-in'>
        <h2>I aready have account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label={'email'}
            handleChange={this.handleChange}
            type="email" name='email' required value={email}/>
          {/* <label htmlFor="email">EMAIL</label> */}
          <FormInput 
            label={'password'}
            handleChange={this.handleChange}
            type="password" name='password' required value={password} />
          {/* <label htmlFor="password">Password</label> */}
          <div className='buttons'>
            <CustomButton type='submit'>
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
            {/* <input type="submit" value='submit form'/> */}
          </div>
          
        </form>

      </div>
    )
  }
}

export default SignIn