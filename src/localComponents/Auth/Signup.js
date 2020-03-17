/*eslint-disable*/
import React, { useState } from 'react'
// @material-ui/core material
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline'
import Code from '@material-ui/icons/Code'
import Group from '@material-ui/icons/Group'
import Face from '@material-ui/icons/Face'
import Email from '@material-ui/icons/Email'
import Check from '@material-ui/icons/Check'
import Person from '@material-ui/icons/Person'
// import Favorite from '@material-ui/icons/Favorite'
// core material
import Header from 'components/Header/Header.js'
// import HeaderLinks from 'components/Header/HeaderLinks.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import CustomInput from 'components/CustomInput/CustomInput.js'

import signupPageStyle from 'assets/jss/material-kit-pro-react/views/signupPageStyle.js'

import image from 'assets/img/bg7.jpg'

const useStyles = makeStyles(signupPageStyle)

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = useState([1])

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  const classes = useStyles()

  return (
    <div>
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
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Vikor Imaging Logo</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Content 1"
                        description="purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc"
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Content 2"
                        description="purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc"
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Content 3"
                        description="purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc"
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      <div className={classes.textCenter}>
                        <h3 className={classes.socialTitle}>Register</h3>
                      </div>
                      <form className={classes.form}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'First Name',
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Email',
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: 'Password...',
                          }}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot,
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span>
                              I agree to the{' '}
                              <a href="#pablo">terms and conditions</a>.
                            </span>
                          }
                        />
                        <div className={classes.textCenter}>
                          <Button round color="primary">
                            Sign Up
                          </Button>
                        </div>
                        <Divider style={{ margin: '1em' }} />
                        <div className={classes.textCenter}>
                          <h5>Already have an account?</h5>
                        </div>
                        <div className={classes.textCenter}>
                          <Link to="/app/loginpage">
                            <Button round color="success">
                              Login
                            </Button>
                          </Link>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , Vikor Imaging, All Rights
                Reserved
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
