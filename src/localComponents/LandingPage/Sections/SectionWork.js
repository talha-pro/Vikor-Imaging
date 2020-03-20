import AWS from 'aws-sdk'
import React, { useEffect } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import workStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js'

const useStyles = makeStyles(workStyle)

export default function SectionWork() {
  const [fire, setFire] = React.useState(null)
  // useEffect(() => {
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyBkdSktw-ORhHkPdDyptnHfyvHdNsN3Uys',
  //     authDomain: 'vikor-ce726.firebaseapp.com',
  //     databaseURL: 'https://vikor-ce726.firebaseio.com',
  //     projectId: 'vikor-ce726',
  //     storageBucket: 'vikor-ce726.appspot.com',
  //     messagingSenderId: '1010018308111',
  //     appId: '1:1010018308111:web:37c880f06aad7cf4e1937a',
  //     measurementId: 'G-HZBFL0F4LD',
  //   }
  //   if (!fire) {
  //     setFire(firebase.initializeApp(firebaseConfig))
  //   }
  // })
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [message, setMessage] = React.useState()
  const classes = useStyles()
  const submit = () => {
    axios.post('http://localhost:3000/email', {
      subject: name + ' ' + email,
      body: message,
    })
  }
  return (
    <div className={classes.section} id="work">
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>Contact Us</h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: name,
                    onChange: e => {
                      setName(e.target.value)
                    },
                    name: 'name',
                    type: 'text',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: email,
                    onChange: e => {
                      setEmail(e.target.value)
                    },
                    name: 'email',
                    type: 'text',
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  value: message,
                  onChange: e => {
                    setMessage(e.target.value)
                  },
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem
                xs={12}
                sm={4}
                md={4}
                className={classes.mrAuto + ' ' + classes.mlAuto}
              >
                <Button onClick={submit} color="primary">
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  )
}
