import React from 'react'
import { navigate } from '@reach/router'
import { setUser, isLoggedIn } from 'utils/auth'
import Error from 'localComponents/Error'
import { Auth } from 'aws-amplify'
import LoginComponent from './LoginComponent'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  login = async () => {
    const { username, password } = this.state
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      if(userInfo.username === 'admin'){
        navigate('/app/admin')
      }
      else{
        navigate('/app/home')
      }
          
    } catch (err) {
      this.setState({ error: err })
      console.log('error...: ', err)
    }
  }

  render() {
    if (Auth.currentAuthenticatedUser.username === 'admin')
    {
      if(isLoggedIn()) navigate('/app/admin')
    }
    else{
      if(isLoggedIn()) navigate('/app/home')
    }
      
    return (
      <>
        {this.state.error && <Error errorMessage={this.state.error} />}
        <LoginComponent
          data={this.state}
          handleUpdate={this.handleUpdate}
          action={this.login}
        />
      </>
    )
  }
}

export default Login
