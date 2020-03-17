/*eslint-disable*/
import React from 'react'
// @material-ui/core material
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import Face from '@material-ui/icons/FaceOutlined'
// core material
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import CustomInput from 'components/CustomInput/CustomInput.js'

//login style from material components
import loginPageStyle from 'assets/jss/material-kit-pro-react/views/loginPageStyle.js'

//background image
import image from 'assets/img/loginbackround.jpg'
import logo from '../../../images/header_logo.png'
// i will comeback
const primaryColor = '#ca9932'
const secondary = '#4A4F55'

const useStyles = makeStyles(loginPageStyle)

/**
 * Login UI Component
 * Takes 3 props,
 * data - the state from parent,
 * handleUpdate  - on change handler,
 * action - function that executed while pressing submi.,
 */
export default function LoginComponent({ data, handleUpdate, action }) {
  const classes = useStyles()

  const { username, password, error } = data

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand={<img src={logo} alt="Vikor Imaging Portal" height={70} />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Welcome!</h4>
                  </CardHeader>
                  <CardBody signup>
                    <CustomInput
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: username,
                        onChange: handleUpdate,
                        name: 'username',
                        placeholder: 'Username',
                        type: 'text',
                        startAdornment: (
                          <InputAdornment position="start">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: password,
                        onChange: handleUpdate,
                        name: 'password',
                        placeholder: 'Password',
                        type: 'password',
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off',
                      }}
                    />
                  </CardBody>
                  <div className={`${classes.textCenter} ${classes.loginBtn}`}>
                    <Button round color="primary" onClick={action} fullWidth>
                      Login
                    </Button>
                  </div>
                  <div
                    className={`${classes.textCenter}`}
                    style={{ marginBottom: '1em' }}
                  >
                    <Button simple color="success" fullWidth>
                      Forgot Password?
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , All Rights Reserved,
                Vikor Imaging
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
