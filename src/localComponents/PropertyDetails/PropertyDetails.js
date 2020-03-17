import React from 'react'
import { Location } from '@reach/router'
import Layout from 'localComponents/layout'
import Masonry, { Tile } from '../Home/Masonry'
import Clearfix from 'components/Clearfix/Clearfix.js'
import ImageGallery from 'react-image-gallery'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

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
    }
  })

  const panos = pano.map(item => {
    return {
      content: item.content,
      thumbnail: item.thumbnail,
    }
  })

  return (
    <Layout>
      <h1>Property Details:</h1>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
      />
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
    </Layout>
  )
}

export default function WithLocation() {
  return <Location>{props => <PropertyDetails {...props} />}</Location>
}
