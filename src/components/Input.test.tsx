import { render, screen } from "utils/test-utils";

import Input from "./Input";

test('Renderiza com o titulo "Input"', () => {
  render(<Input title="Input" name="input" maskType="integer" />);
  const linkElement = screen.getByText(/Input/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renderiza com a mensagen de erro "Houve um erro"', () => {
  render(
    <Input
      title="Input"
      name="input"
      erro={{ hasErro: true, message: "Houve um erro" }}
      maskType="integer"
    />
  );
  const linkElement = screen.getByText(/Houve um erro/i);
  expect(linkElement).toBeInTheDocument();
});
