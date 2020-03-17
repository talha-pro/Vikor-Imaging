import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../localComponents/layout'
import 'assets/scss/material-kit-pro-react.scss?v=1.8.0'
import { LandingPage } from '../localComponents/LandingPage'


import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Header from '../components/Header/Header'
Amplify.configure(config)

const IndexPage = () => (
  
  <Layout>
    <LandingPage />
  </Layout>
)

export default IndexPage
