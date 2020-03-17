import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout'
import HomeView from './HomeView'
import { Connect } from 'aws-amplify-react'
import { graphqlOperation } from 'aws-amplify';


const ListPropertys = `
query listProperties {
    listPropertys {
      items {
        address
        name
        id
        owner
        photos {
          items {
            id
            thumbnail
            fullsize
            property {
              id
            }
          }
        }
        panoramics {
          items {
            content
            thumbnail
          }
        }
      }
    }
}
`

function PropertyLoader() {
 return <Connect query={graphqlOperation(ListPropertys)}>
    {({ data, loading, errors }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.listPropertys) return;
          return <Layout><HomeView data={data.listPropertys.items} /></Layout>;
        }}
        
  </Connect>
}

const Home = () => {
  
   return <PropertyLoader />

}

export default Home
