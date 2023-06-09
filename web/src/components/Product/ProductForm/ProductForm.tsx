import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditProductById, UpdateProductInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormProduct = NonNullable<EditProductById['product']>

interface ProductFormProps {
  product?: EditProductById['product']
  onSave: (data: UpdateProductInput, id?: FormProduct['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProductForm = (props: ProductFormProps) => {
  const onSubmit = (data: FormProduct) => {
    props.onSave(data, props?.product?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProduct> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.product?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.product?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <TextField
          name="size"
          defaultValue={props.product?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>

        <TextField
          name="gender"
          defaultValue={props.product?.gender}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="gender" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.product?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="isFavourite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is favourite
        </Label>

        <CheckboxField
          name="isFavourite"
          defaultChecked={props.product?.isFavourite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isFavourite" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProductForm
