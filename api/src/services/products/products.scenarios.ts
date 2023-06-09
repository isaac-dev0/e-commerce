import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        title: 'String',
        gender: 'String',
        price: 820303.3191978504,
        isFavourite: true,
      },
    },
    two: {
      data: {
        title: 'String',
        gender: 'String',
        price: 2851921.4638461852,
        isFavourite: true,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
