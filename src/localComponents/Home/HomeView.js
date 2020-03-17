/*eslint-disable*/
import React from 'react'
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
import HeaderLinks from 'components/Header/HeaderLinks.js'
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
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js'
import Admin from '../Admin'
import Masonry, { Tile } from './Masonry'

import Upload from '../Upload'

import { logout, getCurrentUser } from 'utils/auth'
import { Auth } from 'aws-amplify'

let images = []
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643]
for (let i = 0; i < imgId.length; i++) {
  const ih = 200 + Math.floor(Math.random() * 10) * 15
  images.push('https://unsplash.it/250/' + ih + '?image=' + imgId[i])
}

const useStyles = makeStyles(profilePageStyle)

export default function ProfilePage({ data }) {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })
  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  const user = getCurrentUser()

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
  return (
    <div>
      <Parallax
        //image={require('assets/img/examples/city.jpg')}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  {/* <img src={sampleImage} alt="..." className={imageClasses} /> */}
                  {/* <People classes={imageClasses} size={100} /> */}
                </div>
                <div className={classes.name}>
                  <h2 className={classes.title}>Hello {user.username}!</h2>
                </div>
              </div>
              <div className={classes.follow}>
                {/* <Tooltip
                  id="tooltip-top"
                  title="User settings"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="primary"
                    className={classes.followButton}
                  >
                    <SettingsIcon className={classes.followIcon} />
                  </Button>
                </Tooltip> */}
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.textCenter)}>
            <h4>Property List</h4>
          </div>
          {/* <Masonry brakePoints={[350, 500, 750]}>
            {data.map(item => { if(item.owner === user.username){
              
              return (
                <Link to="/app/property" state={{ item }} key={item.id}>
                  <div className="tile">
                    <img
                      width={250}
                      src={
                        item.photos.items.length
                          ? item.photos.items[0].fullsize
                          : images[0]
                      }
                    />
                    <h4>{item.address}</h4>
                  </div>
                </Link>
              )
            }
            })}
          </Masonry> */}
          <Clearfix />
        </div>
        <Link to="/app/admin">
          <a>Admin Panel</a>
        </Link>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="/" target="_blank" className={classes.block}>
                    <a>Home</a>
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Vikor Imaging
              <p
                onClick={() =>
                  Auth.signOut()
                    .then(logout(() => navigate('/')))
                    .catch(err => console.log('eror:', err))
                }
              >
                <a>Sign Out</a>
              </p>
            </div>
          </div>
        }
      />
    </div>
  )
}
