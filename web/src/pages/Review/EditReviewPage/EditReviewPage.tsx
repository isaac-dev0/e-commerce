import EditReviewCell from 'src/components/Review/EditReviewCell'

type ReviewPageProps = {
  id: number
}

const EditReviewPage = ({ id }: ReviewPageProps) => {
  return <EditReviewCell id={id} />
}

export default EditReviewPage
