import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
import Upload from './Upload'
import ListItems from './ListItems'
import { SignOut } from 'aws-amplify-react'



const Home = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  var adminloggedin = true; 
  if(user.username !== 'iclausman')
  {
    adminloggedin = false;
  }
  
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <ListItems />
      <Link to="/app/home">Home </Link>
      
      {adminloggedin ? <Upload/> : null}
      <SignOut /> 
    </div>

    
  )
}

export default Home