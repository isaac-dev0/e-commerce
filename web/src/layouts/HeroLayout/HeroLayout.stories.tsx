import type { ComponentMeta, ComponentStory } from '@storybook/react'

import HeroLayout from './HeroLayout'

export const generated: ComponentStory<typeof HeroLayout> = (args) => {
  return <HeroLayout {...args} />
}

export default {
  title: 'Layouts/HeroLayout',
  component: HeroLayout,
} as ComponentMeta<typeof HeroLayout>
