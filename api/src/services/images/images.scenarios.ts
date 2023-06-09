import type { Prisma, Image } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ImageCreateArgs>({
  image: {
    one: {
      data: {
        url: 'String',
        product: {
          create: {
            title: 'String',
            gender: 'String',
            price: 5359932.157466718,
            isFavourite: true,
          },
        },
      },
    },
    two: {
      data: {
        url: 'String',
        product: {
          create: {
            title: 'String',
            gender: 'String',
            price: 5709696.072947375,
            isFavourite: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Image, 'image'>
