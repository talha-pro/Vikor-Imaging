/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
export const onCreatePanoramic = /* GraphQL */ `
  subscription OnCreatePanoramic {
    onCreatePanoramic {
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
export const onUpdatePanoramic = /* GraphQL */ `
  subscription OnUpdatePanoramic {
    onUpdatePanoramic {
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
export const onDeletePanoramic = /* GraphQL */ `
  subscription OnDeletePanoramic {
    onDeletePanoramic {
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
