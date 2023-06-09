import type { Prisma, Review } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ReviewCreateArgs>({
  review: {
    one: {
      data: {
        title: 'String',
        rating: 6885501,
        product: {
          create: {
            title: 'String',
            gender: 'String',
            price: 5573926.811056353,
            isFavourite: true,
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        rating: 1965010,
        product: {
          create: {
            title: 'String',
            gender: 'String',
            price: 970374.9492260516,
            isFavourite: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Review, 'review'>
