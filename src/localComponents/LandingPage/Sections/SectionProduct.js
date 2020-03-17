import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(productStyle)

export default function SectionProduct() {
  const classes = useStyles()
  return (
    <div className={classes.section} id="product">
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            The services we provide range from drone photography that captures
            the best features of your properties' exterior to professional
            interior photography to show the character of the home. We use a
            drone that features Hasselblad L1D-20c camera with a 20MP 1” CMOS
            Sensor and is capable of 4k video. Our camera we use for interior
            photography is a Canon EOS Rebel T7 with 24.1MP APS-C CMOS Sensor.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Aerial Photography"
              description="We present your homes in a way traditional photography just can't match. The home is more than just the structure and the property it's on. We can help you capture the whole of your listing as well as the neighborhood around it. This will give you client's a more complete view of everything the home has to offer."
              // icon={VerifiedUser}
              // iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Panoramas"
              description="Photos don't always capture the true essance of your listings. Sometimes a breathtaking view just can't be seen in a single frame and that's where panoramas fill in the gap. From the suburban neighborhood to the lakeside getaway we can show the whole 360 degree picture."
              // icon={VerifiedUser}
              // iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Interior Photography"
              description="All of our techs are professionaly trained in real estate applications. From wide angle to telephoto, we have the right lens for the job. Our techs will help to capture the hidden beauty of the homes that might be missed otherwise. Our packages simplify your photography needs from essentials to the unique."
              // icon={Fingerprint}
              // iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
