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
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/icons
import Select from '@material-ui/core/Select'
import Favorite from '@material-ui/icons/Favorite'
import logo from '../../images/logo_name.png'
import { makeStyles } from '@material-ui/core/styles'
import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.js'
import Parallax from 'components/Parallax/Parallax.js'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
// import CustomDropdown from 'components/CustomDropdown/CustomDropdown'

const useStyles = makeStyles(landingPageStyle)

const AdminView = ({ ...rest }) => {
  const [ownerName, setOwnerName] = React.useState()
  const [propertyName, setPropertyName] = React.useState()
  const [file, setFile] = React.useState()
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState([])

  const imageUpload = e => {
    var count = 0
    let images = []
    while (count < 2) {
      const reader = new FileReader()
      const file = e.target.files[count]
      // console.log(file, 'sss')
      reader.onloadend = () => {
        images[count] = reader.result
        setFile(file)
      }
      // setImagePreviewUrl([...imagePreviewUrl, reader.result])
      reader.readAsDataURL(file)
      count++
    }
    setImagePreviewUrl(images)
  }
  console.log(imagePreviewUrl, 'img')

  const classes = useStyles()
  return (
    <>
      {/* <Header
        brand={<img src={logo} alt="Vikor Imaging" />}
        links={<HeaderLinks dropdownHoverColor="primary" />}
        // absolute
        {...rest}
      /> */}
      <div className="parallax">
        <Parallax image={require('assets/img/bglake.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <h1 className="title">Admin Panel</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <section className="admin">
          <Container fluid={true} className="admin__container">
            <Row className="admin__row--upper">
              <Col sm={12} md={3} lg={3} xl={3} className="admin__column--left">
                <div className="admin__save-changes">
                  <div className="admin__changes-button">Save Changes</div>
                </div>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="admin__column--middle"
              >
                <div className="admin__dropdown--wrapper">
                  <div className="admin__dropdown--title">Owner</div>
                  <FormControl className="admin__dropdown--form-control">
                    <Select
                      className="admin__dropdown--select"
                      labelId="demo-simple-select-disabled-label"
                      id="demo-simple-select-disabled"
                      value={ownerName}
                      onChange={e => setOwnerName(e.target.value)}
                    >
                      <MenuItem value="isaac">Isaac</MenuItem>
                      <MenuItem value="lance">Lance</MenuItem>
                      <MenuItem value="chris">Chris</MenuItem>
                      <MenuItem value="aaron">Aaron</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="admin__dropdown--wrapper">
                  <div className="admin__dropdown--title">Property</div>
                  <FormControl className="admin__dropdown--form-control">
                    <Select
                      className="admin__dropdown--select"
                      labelId="demo-simple-select-disabled-label"
                      id="demo-simple-select-disabled"
                      value={propertyName}
                      onChange={e => setPropertyName(e.target.value)}
                    >
                      <MenuItem value="studio">Studio</MenuItem>
                      <MenuItem value="farm">Farm House</MenuItem>
                      <MenuItem value="shop">Shop</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="admin__dropdown--wrapper">
                  <div className="admin__dropdown--title">Select</div>
                  <input
                    className="admin__select-button"
                    type="file"
                    name="image"
                    multiple="multiple"
                    onChange={imageUpload}
                  />
                </div>
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className="admin__column--right"
              >
                <div className="admin__upload">
                  <div className="admin__upload-button">Upload</div>
                  <div className="admin__property-button">New Property</div>
                </div>
              </Col>
            </Row>
            <Row className="admin__row--lower">
              <Col
                className="admin__column__lower--left"
                sm={12}
                md={8}
                lg={8}
                xl={8}
              >
                <div className="admin__gallery--wrapper">
                  {imagePreviewUrl &&
                    imagePreviewUrl.length > 0 &&
                    imagePreviewUrl.map(img => {
                      return <img className="admin__gallery__image" src={img} />
                    })}
                </div>
              </Col>
              <Col
                className="admin__column__lower--right"
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                <div className="admin__property__form--wrapper">
                  <div className="admin__default-image">Default Image</div>
                  <form className="admin__form">
                    <input
                      className="admin__input"
                      placeholder="Owner of Property"
                    ></input>
                    <input
                      className="admin__input"
                      placeholder="Title of Property"
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
