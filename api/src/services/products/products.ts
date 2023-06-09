import type {
  QueryResolvers,
  MutationResolvers,
  ProductRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const products: QueryResolvers['products'] = () => {
  return db.product.findMany()
}

export const product: QueryResolvers['product'] = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  })
}

export const createProduct: MutationResolvers['createProduct'] = ({
  input,
}) => {
  return db.product.create({
    data: input,
  })
}

export const updateProduct: MutationResolvers['updateProduct'] = ({
  id,
  input,
}) => {
  return db.product.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct: MutationResolvers['deleteProduct'] = ({ id }) => {
  return db.product.delete({
    where: { id },
  })
}

export const Product: ProductRelationResolvers = {
  reviews: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).reviews()
  },
  categories: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).categories()
  },
  images: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).images()
  },
}
