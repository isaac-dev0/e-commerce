export const schema = gql`
  type Image {
    id: Int!
    url: String!
    product: Product!
    productId: Int!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    url: String!
    productId: Int!
  }

  input UpdateImageInput {
    url: String
    productId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
