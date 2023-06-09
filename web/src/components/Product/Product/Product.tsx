import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

import type {
  DeleteProductMutationVariables,
  FindProductById,
} from 'types/graphql'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

interface Props {
  product: NonNullable<FindProductById['product']>
}

const Product = ({ product }: Props) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted')
      navigate(routes.products())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Product {product.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{product.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{product.description}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{product.size}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{product.gender}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{product.price}</td>
            </tr>
            <tr>
              <th>Is favourite</th>
              <td>{checkboxInputTag(product.isFavourite)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProduct({ id: product.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(product.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Product
