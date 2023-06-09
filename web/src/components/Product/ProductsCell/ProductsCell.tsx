import type { FindProducts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Products from 'src/components/Product/Products'

export const QUERY = gql`
  query FindProducts {
    products {
      id
      title
      description
      size
      gender
      price
      isFavourite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <Link to={routes.newProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ products }: CellSuccessProps<FindProducts>) => {
  return <Products products={products} />
}
