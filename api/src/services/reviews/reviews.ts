import type {
  QueryResolvers,
  MutationResolvers,
  ReviewRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const reviews: QueryResolvers['reviews'] = () => {
  return db.review.findMany()
}

export const review: QueryResolvers['review'] = ({ id }) => {
  return db.review.findUnique({
    where: { id },
  })
}

export const createReview: MutationResolvers['createReview'] = ({ input }) => {
  return db.review.create({
    data: input,
  })
}

export const updateReview: MutationResolvers['updateReview'] = ({
  id,
  input,
}) => {
  return db.review.update({
    data: input,
    where: { id },
  })
}

export const deleteReview: MutationResolvers['deleteReview'] = ({ id }) => {
  return db.review.delete({
    where: { id },
  })
}

export const Review: ReviewRelationResolvers = {
  product: (_obj, { root }) => {
    return db.review.findUnique({ where: { id: root?.id } }).product()
  },
}
