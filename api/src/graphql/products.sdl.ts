export const schema = gql`
  type Product {
    id: Int!
    title: String!
    description: String
    size: String
    reviews: [Review]!
    categories: [Category]!
    gender: String!
    price: Float!
    isFavourite: Boolean!
    images: [Image]!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    description: String
    size: String
    gender: String!
    price: Float!
    isFavourite: Boolean!
  }

  input UpdateProductInput {
    title: String
    description: String
    size: String
    gender: String
    price: Float
    isFavourite: Boolean
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
