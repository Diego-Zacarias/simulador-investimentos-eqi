import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const usage = Template.bind({}); 
usage.args = {
  children: <p>Botão</p>,
}

export const outlined = Template.bind({}); 
outlined.args = {
  children: <p>Botão</p>,
  variant: "outlined"
}

export const disabled = Template.bind({}); 
disabled.args = {
  children: <p>Botão</p>,
  disabled: true
}