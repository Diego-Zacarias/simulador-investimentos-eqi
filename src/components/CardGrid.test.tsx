import { render, screen } from "utils/test-utils";

import CardGrid from "./CardGrid";

const list = [
  { title: "Valor Final Bruto", value: "R$ 15.509,27", success: false },
  { title: "Alíquota do IP", value: "20%", success: false },
  { title: "Valor Pago em IR", value: "R$ 1.509,27", success: false },
  { title: "Valor Final Líquido", value: "R$ 56.509,27", success: true },
  { title: "Valor Total Investido", value: "R$ 9.509,27", success: false },
  { title: "Ganho Líquido", value: "R$ 47.000,00", success: true },
];


test('Renderiza 6 cards', () => {
  render(<CardGrid cardList={list} />);
  const linkElement = screen.getAllByRole("heading");
  expect(linkElement).toHaveLength(6);
})