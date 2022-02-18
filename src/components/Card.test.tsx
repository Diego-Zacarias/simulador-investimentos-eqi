import { render, screen } from "../utils/test-utils";

import Card from "./Card";

test('Renderiza com o título "Título', () => {
  render(<Card title="Título" value="" />);
  const linkElement = screen.getByText(/Título/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renderiza com a prop success true", () => {
  const { asFragment } = render(<Card title="" value="value" success={true} />);
  expect(asFragment()).toMatchSnapshot();
});
