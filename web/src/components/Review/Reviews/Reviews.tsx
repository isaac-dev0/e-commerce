import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Review/ReviewsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteReviewMutationVariables, FindReviews } from 'types/graphql'

const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReviewMutation($id: Int!) {
    deleteReview(id: $id) {
      id
    }
  }
`

const ReviewsList = ({ reviews }: FindReviews) => {
  const [deleteReview] = useMutation(DELETE_REVIEW_MUTATION, {
    onCompleted: () => {
      toast.success('Review deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteReviewMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete review ' + id + '?')) {
      deleteReview({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Product id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{truncate(review.id)}</td>
              <td>{truncate(review.title)}</td>
              <td>{truncate(review.description)}</td>
              <td>{truncate(review.rating)}</td>
              <td>{truncate(review.productId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.review({ id: review.id })}
                    title={'Show review ' + review.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editReview({ id: review.id })}
                    title={'Edit review ' + review.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete review ' + review.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(review.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReviewsList
