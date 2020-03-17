/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import { Link } from 'gatsby'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.js'
import { navigate } from '@reach/router'
const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = (e, target) => {
    var isMobile = navigator.userAgent.match(
      /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
    )
    if (isMobile) {
      // if we are on mobile device the scroll into view will be managed by the browser
    } else {
      e.preventDefault()
      var targetScroll = document.getElementById(target)
      scrollGo(document.documentElement, targetScroll.offsetTop, 300)
    }
  }
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function() {
      currentTime += increment
      var val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }
  var onClickSections = {}

  const { dropdownHoverColor } = props
  const classes = useStyles()
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          onClick={e => navigate('/app/pricing')}
          // onClick={e => smoothScroll(e, '')}
          color="transparent"
        >
          Pricing
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          // onClick={e => smoothScroll(e, 'team')}
          color="transparent"
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          onClick={e => navigate('/app/gallery')}
          color="transparent"
        >
          Gallery
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={e => smoothScroll(e, 'work')}
          color="transparent"
        >
          About us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/app/login">
          <Button
            color={'primary'}
            target="_blank"
            className={classes.navButton}
            round
          >
            Sign In
          </Button>
        </Link>
      </ListItem>
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary',
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
}
