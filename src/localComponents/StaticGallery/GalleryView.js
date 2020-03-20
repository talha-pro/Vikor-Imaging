/*eslint-disable*/

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderLinks from '../LandingPage/HeaderLinks'

// @material-ui/icons

import logo from '../../images/logo_name.png'
import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.js'

import { Link } from 'gatsby'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Add from '@material-ui/icons/Add'
import SettingsIcon from '@material-ui/icons/Settings'
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

// import NavPills from "components/NavPills/NavPills.js";
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import Badge from 'components/Badge/Badge.js'
import Muted from 'components/Typography/Muted.js'
import Parallax from 'components/Parallax/Parallax.js'
import Clearfix from 'components/Clearfix/Clearfix.js'
import Button from 'components/CustomButtons/Button.js'
import sampleImage from 'assets/img/faces/christian.jpg'
import { navigate } from '@reach/router'
import Divider from '@material-ui/core/Divider'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js'

import ImageGallery from 'react-image-gallery'

import Masonry, { Tile } from '../Home/Masonry'

import Upload from '../Upload'

// for (let i = 0; i < imgId.length; i++) {
//   const ih = 200 + Math.floor(Math.random() * 10) * 15

//   images.push((imgId[i] + '.JPG').toString())

//   console.log(images);
// }

const useStyles = makeStyles(landingPageStyle)

export default function GalleryView({ ...rest }) {
  const images = [
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/1.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/1_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/2.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/2_tn.jpg',
    },

    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/3.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/3_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/4.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/4_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/5.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/5_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/6.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/6_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/7.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/7_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/8.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/8_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/11.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/11_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/13.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/13_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/14.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/14_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/15.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery/15_tn.jpg',
    },
  ]

  const images2 = [
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/1.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/1_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/2.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/2_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/3.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/3_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/4.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/4_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/5.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/5_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/6.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/6_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/7.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/7_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/8.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/8_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/9.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/9_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/11.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/11_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/12.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/12_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/13.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery2/13_tn.jpg',
    },
  ]

  const images3 = [
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/2.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/2_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/3.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/3_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/4.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/4_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/5.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/5_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/7.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/7_tn.jpg',
    },
    {
      original:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/8.jpg',
      thumbnail:
        'https://fileshare-vikor.s3.us-east-2.amazonaws.com/gallery3/8_tn.jpg',
    },
  ]

  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.inlineBlock
  )

  return (
    <>
      <Header
        brand={<img src={logo} alt="Vikor Imaging" />}
        links={<HeaderLinks dropdownHoverColor="primary" />}
        // absolute
        {...rest}
      />
      <div className="parallax">
        <Parallax image={require('assets/img/bglake.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <h1 className="title">Gallery</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <div className={classes.container}> */}
        <h3>Virtual Tour with Floorplan Navigation</h3>
        <Container justify="center">
          <GridItem xs={2} sm={2} md={2}>
            <div class="col">
              <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/iguide/index.html">
                Click Here!
              </a>
            </div>
          </GridItem>

          <h3>Sample Property Images</h3>
        </Container>

        <Container>
          {/* <Row> */}
          <ImageGallery
            additionalClass="image-gallery"
            items={images.map(image => {
              return {
                original: image.original,
                thumbnail: image.thumbnail,
                originalClass: 'original',
                thumbnailClass: 'thumbnail',
              }
            })}
            preventDefaultTouchmoveEvent={true}
            // showNav={true}
            disableKeyDown={true}
            showFullscreenButton={false}
            showPlayButton={false}
            renderLeftNav={(onClick, disabled) => {
              return (
                <div
                  className="nav-arrow-left"
                  // disabled={disabled}
                  onClick={onClick}
                >
                  &lsaquo;
                </div>
              )
            }}
            renderRightNav={(onClick, disabled) => {
              return (
                <div
                  className="nav-arrow-right"
                  // disabled={disabled}
                  onClick={onClick}
                >
                  &rsaquo;
                </div>
              )
            }}

            // disableThumbnailScroll={true}
            // showBullets={true}
          />
          {/* </Row> */}
        </Container>
        <Container>
          <ImageGallery
            items={images2}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            additionalClass="image-gallery"
            // showBullets={true}
          />
        </Container>

        {/* 
        <Container>
          <ImageGallery
            items={images3}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            additionalClass="image-gallery"
            // showBullets={true}
          />
        </Container> */}

        <h3>Sample Panoramic Resources</h3>

        <Container>
          {/* <GridContainer justify="center"> */}
          {/* <GridItem xs={2} sm={2} md={2}> */}

          <div class="col">
            <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P1/index.html">
              <img
                src={
                  'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/1.jpg'
                }
              />
            </a>
          </div>
          {/* </GridItem> */}
          {/* <GridItem xs={2} sm={2} md={2}> */}
          <div class="col">
            <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P2/index.html">
              <img
                src={
                  'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/2f.jpg'
                }
              />
            </a>
          </div>
          {/* </GridItem> */}

          {/* <GridItem xs={2} sm={2} md={2}> */}
          <div class="col">
            <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P3/index.html">
              <img
                src={
                  'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/3tf.jpg'
                }
              />
            </a>
          </div>
          {/* </GridItem> */}
          {/* <GridItem xs={2} sm={2} md={2}> */}
          <div class="col">
            <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P4/index.html">
              <img
                src={
                  'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/4tn.jpg'
                }
              />
            </a>
          </div>
          {/* </GridItem> */}
          {/* </GridContainer> */}
          {/* </div> */}
        </Container>
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

    // <div>
    //   <h3>Virtual Tour with Floorplan Navigation</h3>
    //   <Container justify="center">
    //     {/* <GridItem xs={2} sm={2} md={2}> */}
    //     <div class="col">
    //       <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/iguide/index.html">
    //         Click Here!
    //       </a>
    //     </div>
    //     {/* </GridItem> */}

    //     <h3>Sample Property Images</h3>
    //   </Container>

    //   {/* <ImageGallery
    //     items={images}
    //     showFullscreenButton={false}
    //     showPlayButton={true}
    //     showNav={false}
    //     originalClass="orignal"
    //   /> */}

    //   {/* <ImageGallery
    //     items={images2}
    //     showFullscreenButton={false}
    //     showPlayButton={false}
    //     showNav={false}
    //   /> */}
    //   <Container>
    //     <ImageGallery
    //       items={images3}
    //       showFullscreenButton={false}
    //       showPlayButton={false}
    //       showNav={false}
    //       additionalClass="image-gallery"
    //       showBullets={true}
    //     />
    //   </Container>

    //   <h3>Sample Panoramic Resources</h3>

    //   <GridContainer justify="center">
    //     <GridItem xs={2} sm={2} md={2}>
    //       <div class="col">
    //         <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P1/index.html">
    //           <img
    //             src={
    //               'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/1.jpg'
    //             }
    //           />
    //         </a>
    //       </div>
    //     </GridItem>
    //     <GridItem xs={2} sm={2} md={2}>
    //       <div class="col">
    //         <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P2/index.html">
    //           <img
    //             src={
    //               'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/2f.jpg'
    //             }
    //           />
    //         </a>
    //       </div>
    //     </GridItem>

    //     <GridItem xs={2} sm={2} md={2}>
    //       <div class="col">
    //         <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P3/index.html">
    //           <img
    //             src={
    //               'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/3tf.jpg'
    //             }
    //           />
    //         </a>
    //       </div>
    //     </GridItem>
    //     <GridItem xs={2} sm={2} md={2}>
    //       <div class="col">
    //         <a href="https://fileshare-vikor.s3.us-east-2.amazonaws.com/P4/index.html">
    //           <img
    //             src={
    //               'https://fileshare-vikor.s3.us-east-2.amazonaws.com/thumbs/4tn.jpg'
    //             }
    //           />
    //         </a>
    //       </div>
    //     </GridItem>
    //   </GridContainer>

    //   <Footer
    //     content={
    //       <div>
    //         <div className={classes.left}>
    //           <List className={classes.list}>
    //             <ListItem className={classes.inlineBlock}>
    //               <a href="/" target="_blank" className={classes.block}>
    //                 Home
    //               </a>
    //             </ListItem>
    //           </List>
    //         </div>
    //         <div className={classes.right}>Vikor Imaging</div>
    //       </div>
    //     }
    //   />
    // </div>
  )
}
