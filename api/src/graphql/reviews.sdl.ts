export const schema = gql`
  type Review {
    id: Int!
    title: String!
    description: String
    rating: Int!
    product: Product!
    productId: Int!
  }

  type Query {
    reviews: [Review!]! @requireAuth
    review(id: Int!): Review @requireAuth
  }

  input CreateReviewInput {
    title: String!
    description: String
    rating: Int!
    productId: Int!
  }

  input UpdateReviewInput {
    title: String
    description: String
    rating: Int
    productId: Int
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review! @requireAuth
    updateReview(id: Int!, input: UpdateReviewInput!): Review! @requireAuth
    deleteReview(id: Int!): Review! @requireAuth
  }
`
