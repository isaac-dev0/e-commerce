import type { EditImageById, UpdateImageInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImageForm from 'src/components/Image/ImageForm'

export const QUERY = gql`
  query EditImageById($id: Int!) {
    image: image(id: $id) {
      id
      url
      productId
    }
  }
`
const UPDATE_IMAGE_MUTATION = gql`
  mutation UpdateImageMutation($id: Int!, $input: UpdateImageInput!) {
    updateImage(id: $id, input: $input) {
      id
      url
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ image }: CellSuccessProps<EditImageById>) => {
  const [updateImage, { loading, error }] = useMutation(UPDATE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image updated')
      navigate(routes.images())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateImageInput,
    id: EditImageById['image']['id']
  ) => {
    updateImage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Image {image?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImageForm
          image={image}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
