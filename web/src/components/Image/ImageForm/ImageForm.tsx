import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditImageById, UpdateImageInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormImage = NonNullable<EditImageById['image']>

interface ImageFormProps {
  image?: EditImageById['image']
  onSave: (data: UpdateImageInput, id?: FormImage['id']) => void
  error: RWGqlError
  loading: boolean
}

const ImageForm = (props: ImageFormProps) => {
  const onSubmit = (data: FormImage) => {
    props.onSave(data, props?.image?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormImage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.image?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>

        <NumberField
          name="productId"
          defaultValue={props.image?.productId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="productId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
