/*eslint-disable*/ import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import HeaderLinks from './HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'

import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.js'
import logo from '../../images/logo_name.png'

// Sections for this page
import SectionProduct from './Sections/SectionProduct.js'
import SectionTeam from './Sections/SectionTeam.js'
import SectionWork from './Sections/SectionWork.js'

const useStyles = makeStyles(landingPageStyle)

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })
  const classes = useStyles()
  return (
    <div>
      <Header
        color="white"
        brand={<img src={logo} alt="Vikor Imaging" />}
        links={<HeaderLinks dropdownHoverColor="primary" />}
        absolute
        {...rest}
      />
      <Parallax image={require('assets/img/bglake.jpg')} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>
                Bringing out the best in your listings
              </h1>
              <h4>
                Your job isn't easy, having your properties look great should
                be. We serve the real estate professional. Our company provides
                high quality imaging services, specalizing in aerial
                photography. Aaron, our lead technician, is FAA certified,
                insured, and professionally trained in photography. We have
                experience in residential real estate and damage assessment.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <GridContainer justify="center">
            <img
              align="middle"
              src="https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/anotherdivider.jpg"
            ></img>
          </GridContainer>
          <SectionTeam />

          <SectionWork />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Privacy Policy
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{' '}
              <Favorite className={classes.icon} /> by{' '}
              <a href="/" target="_blank">
                Vikor Imaging
              </a>
              &nbsp;All Rights Reserved
            </div>
          </div>
        }
      />
    </div>
  )
}
