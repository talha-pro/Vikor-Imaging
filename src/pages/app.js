import React from 'react'
import { Router } from '@reach/router'
import Layout from '../localComponents/layout'
import Details from '../localComponents/Details'
import { Home } from '../localComponents/Home'
import { Login, Signup } from '../localComponents/Auth'
import { Admin } from '../localComponents/Admin'
import PrivateRoute from '../localComponents/PrivateRoute'
import PropertyDetails from '../localComponents/PropertyDetails'
import { LandingPage } from '../localComponents/LandingPage'
import Gallery from '../localComponents/StaticGallery/Gallery'
import Pricing from '../localComponents/Pricing/Pricing'

const App = () => (
  <Layout>
    <Router>
      <LandingPage path="/app/index" />
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/property" component={PropertyDetails} />
      <PrivateRoute path="/app/profile" component={Details} />
      <PrivateRoute path="/app/admin" component={Admin} />
      <Gallery path="/app/gallery" />
      <Pricing path="/app/pricing" />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </Layout>
)

export default App
