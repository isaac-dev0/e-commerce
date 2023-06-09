import type { FindReviews } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Reviews from 'src/components/Review/Reviews'

export const QUERY = gql`
  query FindReviews {
    reviews {
      id
      title
      description
      rating
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No reviews yet. '}
      <Link to={routes.newReview()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ reviews }: CellSuccessProps<FindReviews>) => {
  return <Reviews reviews={reviews} />
}
