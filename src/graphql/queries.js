/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      name
      address
      owner
      photos {
        items {
          id
          title
          fullsize
          thumbnail
        }
        nextToken
      }
      panoramics {
        items {
          id
          content
          fullsize
          thumbnail
        }
        nextToken
      }
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        owner
        photos {
          nextToken
        }
        panoramics {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      title
      property {
        id
        name
        address
        owner
        photos {
          nextToken
        }
        panoramics {
          nextToken
        }
      }
      fullsize
      thumbnail
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        property {
          id
          name
          address
          owner
        }
        fullsize
        thumbnail
      }
      nextToken
    }
  }
`;
export const getPanoramic = /* GraphQL */ `
  query GetPanoramic($id: ID!) {
    getPanoramic(id: $id) {
      id
      content
      property {
        id
        name
        address
        owner
        photos {
          nextToken
        }
        panoramics {
          nextToken
        }
      }
      fullsize
      thumbnail
    }
  }
`;
export const listPanoramics = /* GraphQL */ `
  query ListPanoramics(
    $filter: ModelPanoramicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPanoramics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        property {
          id
          name
          address
          owner
        }
        fullsize
        thumbnail
      }
      nextToken
    }
  }
`;
