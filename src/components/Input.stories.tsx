import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    title: { control: "text" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const withCoinMask = Template.bind({});
withCoinMask.args = {
  title: "Titulo",
  name: "coin",
  maskType: "coin"
};

export const withIntegerMask = Template.bind({});
withIntegerMask.args = {
  title: "Titulo",
  name: "integer",
  maskType: "integer"
};

export const withPercentMask = Template.bind({});
withPercentMask.args = {
  title: "Titulo",
  name: "percent",
  maskType: "percent"
};

export const withErro = Template.bind({});
withErro.args = {
  title: "Titulo",
  name: "erro",
  maskType: "integer",
  erro: {
    hasErro: true,
    message: "Houve um erro",
  },
};
