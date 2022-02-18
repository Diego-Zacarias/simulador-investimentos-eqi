import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CardGrid from "./CardGrid";

export default {
  title: "Components/CardGrid",
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) => (
  <CardGrid {...args} />
);

const list = [
  { title: "Valor Final Bruto", value: "R$ 15.509,27", success: false },
  { title: "Alíquota do IP", value: "20%", success: false },
  { title: "Valor Pago em IR", value: "R$ 1.509,27", success: false },
  { title: "Valor Final Líquido", value: "R$ 56.509,27", success: true },
  { title: "Valor Total Investido", value: "R$ 9.509,27", success: false },
  { title: "Ganho Líquido", value: "R$ 47.000,00", success: true },
];

export const usage = Template.bind({});
usage.args = {
  cardList: list,
};
