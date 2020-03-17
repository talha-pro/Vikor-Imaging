import React from 'react'
import { Storage } from 'aws-amplify'
import { getCurrentUser } from '../utils/auth'
import { userInfo } from 'os';
import { S3Album, S3Image } from 'aws-amplify-react'

class ListItems extends React.Component{
    constructor(props) {
        super(props);
          this.state = {
            requestingUser: getCurrentUser(),
            url: null
          }
          
          
    }

    render(){
        return(
            <div className="ListItems">
        <label>TEST</label>        
        {/* <S3Album
        level="public"
        path=""
        /> */}
        
        {/* <S3Image level="public" imgKey={'nullDJI0099.JPG'}></S3Image> */}
            </div>

        )
    }  
}
export default ListItems