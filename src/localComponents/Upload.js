import React from 'react'
import { Storage } from 'aws-amplify'
import { getCurrentUser } from '../utils/auth'
import { userInfo } from 'os';

class Upload extends React.Component {

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null,
            targetuser: null
          }
          
          
    }

    
   

    onChangeHandler= e => {
        this.setState({
            selectedFile: e.target.files,
            loaded: e.target.files.length,
        })
        
    }

    onTargetUserHandler= e => {
        this.setState({
            targetuser: e.target.value
        })
    }

    onClickHandler = async () => {
        
        const customprefix = {
            public: 'images/',
            private: 'images/',
            protected: 'images/'
        };

        for(var x=0; x<this.state.selectedFile.length; x++){
            
            try{
                const flense = (this.state.selectedFile[x].name.replace('_',''));
                const filename = (`${this.state.targetuser}${flense}`).toLowerCase();
                const file = this.state.selectedFile[x];
                Storage.put(filename, file, {
                    contentType: 'image/jpg',
                    customprefix: customprefix,

                })
                console.log(`FILE UPLOADED ${filename}`)
                console.log(file)
            }
            catch(err){
                console.log(err);
            }
            
        }

        
    }

    render() {
        return (

            
                
            <div>

            <div>
                <label >Username:</label>
                <input onChange={(e) => this.onTargetUserHandler(e)} type="text"></input>
                
            </div>

            <div>
            <button 
                type="button"
                class="btn btn-success btn-block"
                onClick={this.onClickHandler}>Upload
            </button>
            <input
                multiple
                type="file" accept='image/jpg'
                onChange={(e) => this.onChangeHandler(e)}
            />
            </div> 

            </div>
        )
    }
  }

  export default Upload