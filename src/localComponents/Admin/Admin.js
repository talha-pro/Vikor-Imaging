import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout'
import AdminView from './AdminView'
import Details from '../Details'
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

function DataFetcher() {
    return <Connect query={graphqlOperation(ListPropertys)}>
       {({ data, loading, errors }) => {
             if (loading) { return <div>Loading...</div>; }
             if (!data.listPropertys) return <AdminView />;
             return <AdminView data={data.listPropertys.items} />;
           }}
           
     </Connect>
   }


const Admin = () => {

// return <DataFetcher />
return <AdminView />


}

export default Admin 