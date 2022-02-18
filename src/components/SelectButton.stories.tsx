import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectButton from './SelectButton';

export default {
  title: "Components/SelectButton",
  component: SelectButton,
  argTypes: {
    title: { control: 'text' }
  }
} as ComponentMeta<typeof SelectButton>

const Template: ComponentStory<typeof SelectButton> = (args) => <SelectButton {...args} />

export const usage = Template.bind({});
usage.args = {
  title: 'Titulo',
  options: ["Option 1", "Option 2", "Option 3"],
}