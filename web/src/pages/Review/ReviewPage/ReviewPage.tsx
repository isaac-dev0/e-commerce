import ReviewCell from 'src/components/Review/ReviewCell'

type ReviewPageProps = {
  id: number
}

const ReviewPage = ({ id }: ReviewPageProps) => {
  return <ReviewCell id={id} />
}

export default ReviewPage
