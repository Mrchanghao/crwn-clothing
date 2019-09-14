import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChnage = this.handleChnage.bind(this);
  }

  handleChnage = (e) => {
    const {value, name} = e.target 

    this.setState({
      [name]: value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
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
            handleChange={this.handleChnage}
            type="email" name='email' required value={email}/>
          {/* <label htmlFor="email">EMAIL</label> */}
          <FormInput 
            label={'password'}
            handleChange={this.handleChnage}
            type="password" name='password' required value={password} />
          {/* <label htmlFor="password">Password</label> */}
          <CustomButton type='submit'>
            Sign In
          </CustomButton>
          {/* <input type="submit" value='submit form'/> */}
        </form>

      </div>
    )
  }
}

export default SignIn