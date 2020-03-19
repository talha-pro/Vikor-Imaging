import AWS from 'aws-sdk'
import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import workStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js'

const useStyles = makeStyles(workStyle)

export default function SectionWork() {
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [message, setMessage] = React.useState()
  const classes = useStyles()
  const submit = () => {
    alert('submit')
    const params = {
      Destination: {
        ToAddresses: ['salman292013@gmail.com'],
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Website Enquiry',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'adasdasdas asdasd adasdsad',
          },
        },
      },
      Source: 'salman292013@gmail.com',
    }
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
