import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import Muted from 'components/Typography/Muted.js'
import Button from 'components/CustomButtons/Button.js'

import cardProfile1Square from 'assets/img/faces/lanceheadshot.jpg'
import cardProfile2Square from 'assets/img/faces/isaacheadshot.jpg'
import cardProfile4Square from 'assets/img/faces/aaronheadshot.jpg'
import cardProfile6Square from 'assets/img/faces/chrisheadshot.jpg'

import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js'
import teamStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js'

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: 'center',
  },
}

const useStyles = makeStyles(style)

export default function SectionTeam() {
  const classes = useStyles()
  return (
    <div className={classes.section} id="team">
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile1Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile1Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Lance Kellar</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>CEO</h6>
                    </Muted>
                    <p className={classes.description}>
                    Lance graduated from IU’s O'neill School of Public and Environmental Affairs,
                     specializing in public finance and international development.
                      He has started a few service companies and has been active in technology startups for many years.
                       Lance has a passionate interest in the ability of technology to change the way we interact with the world.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile6Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile6Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Chris Dzierba</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>HEAD OF SALES</h6>
                    </Muted>
                    <p className={classes.description}>
                    Chris is a second generation realtor with over a decade of experience serving the local area. The firm that holds his license, Dzierba Real Estate, has done the same for over 30 years. He knows the importance of trust, whether it be with a first time homebuyer or an agent who knows he'll help to ensure a smooth transaction. Chris is here to ensure you get the right package that will help reduce listings times, get an accepted offer closer to list price, and all at an affordable amount.

                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile4Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile4Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Aaron Clausman</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>LEAD TECHNICIAN</h6>
                    </Muted>
                    <p className={classes.description}>
                    Aaron is a licensed remote pilot and photographer for Vikor Imaging. Having worked with digital media production, 2D artwork, 3D modeling and everything in between since he was young, it’s no unfamiliar arena for him. When he isn’t creating on the computer or capturing shots on the field, he enjoys playing piano, spending time with family and friends and helping a neighbor in need when the occasion arises. He is currently honing his photography technique and growing his other skillsets.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile2Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile2Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Isaac Clausman</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>CTO</h6>
                    </Muted>
                    <p className={classes.description}>
                    Isaac is a lifelong enthusiast of technology, software development, and virtual reality. With over 10 years of combined experience in I.T services and support, He now serves as Vikor’s Chief Technical Officer ensuring our content delivery systems are streamlined and cost effective.
In his free time, you can often find him elbow deep in a new 3D printer project or embedded hardware platform.  

                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
