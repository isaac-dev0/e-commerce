import type { FindReviewById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Review from 'src/components/Review/Review'

export const QUERY = gql`
  query FindReviewById($id: Int!) {
    review: review(id: $id) {
      id
      title
      description
      rating
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Review not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ review }: CellSuccessProps<FindReviewById>) => {
  return <Review review={review} />
}
