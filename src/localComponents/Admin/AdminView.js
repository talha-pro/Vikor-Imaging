import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import classNames from 'classnames'
import Header from '../../components/Header/Header'
import Footer from 'components/Footer/Footer.js'
import HeaderLinks from '../LandingPage/HeaderLinks'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import logo from '../../images/logo_name.png'
import { makeStyles } from '@material-ui/core/styles'
import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.js'
import Parallax from 'components/Parallax/Parallax.js'

// import CustomDropdown from 'components/CustomDropdown/CustomDropdown'

const useStyles = makeStyles(landingPageStyle)

const AdminView = ({ ...rest }) => {
  const classes = useStyles()
  return (
    <>
      <Header
        brand={<img src={logo} alt="Vikor Imaging" />}
        links={<HeaderLinks dropdownHoverColor="primary" />}
        // absolute
        {...rest}
      />
      <Parallax image={require('assets/img/bglake.jpg')} filter="dark">
        <div className={classes.container}>
          <h1 className={classes.title}>Admin Panel</h1>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <div className={classes.container}> */}
        <section className="admin">
          <Container fluid={true} className="admin__container">
            <Row className="admin__row--upper">
              <Col lg={3} xl={3} className="admin__column--left">
                <div className="admin__save-changes">
                  <div className="admin__changes-button">Save Changes</div>
                </div>
              </Col>
              <Col lg={6} xl={6} className="admin__column--middle">
                <div className="admin__dropdown--wrapper">
                  <div className="admin__dropdown--title">Owner</div>
                  <div className="admin__dropdown">Dropdown Here</div>
                </div>
                <div className="admin__dropdown--wrapper">
                  <div className="admin__dropdown--title">Property</div>
                  <div className="admin__dropdown">Dropdown Here</div>
                </div>
                <div className="admin__dropdown--wrapper">
                  <div className="admin__dropdown--title">Upload</div>
                  <div className="admin__dropdown">Dropdown Here</div>
                </div>
              </Col>
              <Col lg={3} xl={3} className="admin__column--right">
                <div className="admin__upload">
                  <div className="admin__upload-button">Upload</div>
                </div>
              </Col>
            </Row>
            <Row className="admin__row--lower">
              <Col className="admin__column__lower--left" lg={8} xl={8}>
                <div className="admin__gallery--wrapper">
                  Gallery Images Here
                </div>
              </Col>
              <Col className="admin__column__lower--right" lg={4} xl={4}>
                <div className="admin__property__form--wrapper">
                  <div className="admin__default-image">Default Image</div>
                  <form className="admin__form">
                    <input
                      className="admin__input"
                      placeholder="Title of Property"
                    ></input>
                    <input
                      className="admin__input"
                      placeholder="Owner of Property"
                    ></input>
                  </form>
                  <div className="admin__change-default--wrapper">
                    <div className="admin__default-button">
                      Change Default Image
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* </div> */}
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
              &copy; {1900 + new Date().getYear()}, made with{' '}
              <Favorite className={classes.icon} /> by{' '}
              <a href="/" target="_blank">
                Vikor Imaging
              </a>
              &nbsp; All Rights Reserved
            </div>
          </div>
        }
      />
    </>
  )
}

export default AdminView
