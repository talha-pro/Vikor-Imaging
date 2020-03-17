/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
export const createPanoramic = /* GraphQL */ `
  mutation CreatePanoramic(
    $input: CreatePanoramicInput!
    $condition: ModelPanoramicConditionInput
  ) {
    createPanoramic(input: $input, condition: $condition) {
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
export const updatePanoramic = /* GraphQL */ `
  mutation UpdatePanoramic(
    $input: UpdatePanoramicInput!
    $condition: ModelPanoramicConditionInput
  ) {
    updatePanoramic(input: $input, condition: $condition) {
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
export const deletePanoramic = /* GraphQL */ `
  mutation DeletePanoramic(
    $input: DeletePanoramicInput!
    $condition: ModelPanoramicConditionInput
  ) {
    deletePanoramic(input: $input, condition: $condition) {
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
