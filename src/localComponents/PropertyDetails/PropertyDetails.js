import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import HeaderLinks from '../LandingPage/HeaderLinks'

import { Location } from '@reach/router'
import ImageGallery from 'react-image-gallery'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.js'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import Parallax from 'components/Parallax/Parallax.js'

const useStyles = makeStyles(landingPageStyle)

function PropertyDetails(props) {
  let pa = []
  let pano = []
  pa = props.location.state.item.photos.items
  pano = props.location.state.item.panoramics.items
  console.log(props.location.state.item)
  const images = pa.map(item => {
    return {
      original: item.fullsize,
      thumbnail: item.thumbnail,
      originalClass: 'original',
      thumbnailClass: 'thumbnail',
    }
  })

  const panos = pano.map(item => {
    return {
      content: item.content,
      thumbnail: item.thumbnail,
    }
  })

  const classes = useStyles()

  return (
    <>
      <div className="parallax">
        <Parallax image={require('assets/img/bglake.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <h1 className="title">Property Details</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container className="property-details__container">
          <ImageGallery
            additionalClass="image-gallery"
            items={images}
            preventDefaultTouchmoveEvent={true}
            disableKeyDown={true}
            showFullscreenButton={false}
            showPlayButton={false}
            renderLeftNav={onClick => {
              return (
                <div className="nav-arrow-left" onClick={onClick}>
                  &lsaquo;
                </div>
              )
            }}
            renderRightNav={onClick => {
              return (
                <div className="nav-arrow-right" onClick={onClick}>
                  &rsaquo;
                </div>
              )
            }}
          />
        </Container>
        <h3>Panoramic Assets:</h3>
        <GridContainer justify="center">
          {panos.map((value, index) => {
            return (
              <GridItem xs={2} sm={2} md={2}>
                <div class="col">
                  <a href={value.content}>
                    <img src={value.thumbnail} />
                  </a>
                </div>
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    </>
  )
}

export default function WithLocation() {
  return <Location>{props => <PropertyDetails {...props} />}</Location>
}
