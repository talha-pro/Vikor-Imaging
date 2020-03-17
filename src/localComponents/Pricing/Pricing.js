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

const useStyles = makeStyles(landingPageStyle)

const Pricing = ({ ...rest }) => {
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
          <h1 className={classes.title}>Vikor Imaging Pricing.</h1>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <section className="pricing">
            <Container className="pricing__container">
              <Row className="pricing__row--heading">
                <div className="pricing__heading--wrapper">
                  <div className="pricing__heading">Basic</div>
                </div>
              </Row>
              <Row className="pricing__row--content">
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="pricing__column--services"
                >
                  <div className="pricing__column--services--heading">
                    Services
                  </div>
                  <hr></hr>
                  <div className="pricing__column--services--item">
                    Interior
                  </div>
                  <div className="pricing__column--services--item">Aerial</div>
                  <div className="pricing__column--services--item">
                    Panorama
                  </div>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={6}
                  xl={6}
                  className="pricing__column--content"
                >
                  <div className="pricing__column--content--heading">
                    Content
                  </div>
                  <hr></hr>
                  <div className="pricing__column--content--item">
                    <div>5 rooms or less</div>
                    {/* <div>Per additional room</div> */}
                  </div>

                  <div className="pricing__column--content--item">
                    1 Drone Photograph
                  </div>
                  <div className="pricing__column--content--item">
                    1 Panorama
                  </div>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="pricing__column--price"
                >
                  <div className="pricing__column--price--heading">Price</div>
                  <hr></hr>
                  <div className="pricing__column--price--item">
                    <div>
                      <span className="pricing__dollar">$</span> 175
                    </div>
                    {/* <span className="pricing__dollar">$</span> 25 */}
                  </div>

                  {/* <div className="pricing__column--price--item">$25</div> */}
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 75
                  </div>
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 75
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className="pricing__container">
              <Row className="pricing__row--heading">
                <div className="pricing__heading--wrapper">
                  <div className="pricing__heading">Packages</div>
                </div>
              </Row>
              <Row className="pricing__row--content">
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="pricing__column--services"
                >
                  <div className="pricing__column--services--heading">
                    Services
                  </div>
                  <hr></hr>
                  <div className="pricing__column--services--item">Coach</div>
                  <div className="pricing__column--services--item">Economy</div>
                  <div className="pricing__column--services--item">
                    Business
                  </div>
                  <div className="pricing__column--services--item">
                    First Class
                  </div>
                  <div className="pricing__column--services--item">
                    Chartered Flight
                  </div>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={6}
                  xl={6}
                  className="pricing__column--content"
                >
                  <div className="pricing__column--content--heading">
                    Content
                  </div>
                  <hr></hr>
                  <div className="pricing__column--content--item">
                    <div>1 Panoramas and 3 aerial Images</div>
                    {/* <div>Per additional room</div> */}
                  </div>

                  <div className="pricing__column--content--item">
                    3 Panoramas and 5 aerial Images
                  </div>
                  <div className="pricing__column--content--item">
                    Coach with Interior
                  </div>
                  <div className="pricing__column--content--item">
                    Economy with Unlimited Interior
                  </div>
                  <div className="pricing__column--content--item">
                    Chartered Flight 3D Tour , Unlimited Interior
                  </div>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="pricing__column--price"
                >
                  <div className="pricing__column--price--heading">Price</div>
                  <hr></hr>

                  {/* <div className="pricing__column--price--item">$25</div> */}
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 200
                  </div>
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 250
                  </div>
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 300
                  </div>
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 400
                  </div>
                  <div className="pricing__column--price--item">
                    <span className="pricing__dollar">$</span> 600
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className="pricing__container">
              <Row className="pricing__row--heading">
                <div className="pricing__heading--wrapper">
                  <div className="pricing__heading">IT Support</div>
                </div>
              </Row>
              <Row className="pricing__row--content">
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="pricing__column--services"
                >
                  <div className="pricing__column--services--heading">
                    Services
                  </div>
                  <hr></hr>
                  <div className="pricing__column--services--item">
                    Integrated
                  </div>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={6}
                  xl={6}
                  className="pricing__column--content"
                >
                  <div className="pricing__column--content--heading">
                    Content
                  </div>
                  <hr></hr>
                  <div className="pricing__column--content--item">
                    <div>Integrate the products into your website</div>
                    {/* <div>Per additional room</div> */}
                  </div>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="pricing__column--price"
                >
                  <div className="pricing__column--price--heading">Price</div>
                  <hr></hr>

                  {/* <div className="pricing__column--price--item">$25</div> */}
                  <div className="pricing__column--price--item--wrapper">
                    <div className="pricing__column--price--item--content">
                      <div className="pricing__column--price--item">
                        <span className="pricing__dollar">$</span> 150{' '}
                        <span className="pricing__text">Setup</span>
                      </div>
                      <div className="pricing__column--price--item">
                        <span className="pricing__dollar">$</span> 40
                        <span className="pricing__text"> Hosting / Month</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
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

export default Pricing
