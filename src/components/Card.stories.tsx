import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './Card';

export default {
  title: "Components/Card",
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const usage = Template.bind({})
usage.args = {
  title: "Título",
  value: "R$ 5.000,00"
}

export const valueGreen = Template.bind({})
valueGreen.args = {
  title: "Título",
  value: "R$ 5.000,00",
  success: true
}
