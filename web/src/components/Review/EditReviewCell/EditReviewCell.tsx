import type { EditReviewById, UpdateReviewInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReviewForm from 'src/components/Review/ReviewForm'

export const QUERY = gql`
  query EditReviewById($id: Int!) {
    review: review(id: $id) {
      id
      title
      description
      rating
      productId
    }
  }
`
const UPDATE_REVIEW_MUTATION = gql`
  mutation UpdateReviewMutation($id: Int!, $input: UpdateReviewInput!) {
    updateReview(id: $id, input: $input) {
      id
      title
      description
      rating
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ review }: CellSuccessProps<EditReviewById>) => {
  const [updateReview, { loading, error }] = useMutation(
    UPDATE_REVIEW_MUTATION,
    {
      onCompleted: () => {
        toast.success('Review updated')
        navigate(routes.reviews())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateReviewInput,
    id: EditReviewById['review']['id']
  ) => {
    updateReview({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Review {review?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ReviewForm
          review={review}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
