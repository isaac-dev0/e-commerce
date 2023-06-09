import type { Prisma, Category } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: {
    one: { data: { title: 'String451130' } },
    two: { data: { title: 'String8669955' } },
  },
})

export type StandardScenario = ScenarioData<Category, 'category'>
