import { render, screen } from "utils/test-utils";

import Home from "./Home";
import { getIndicadores } from "services/Api";
jest.mock("services/Api", () => {
  const api = jest.requireActual("services/Api");
  return {
    ...api,
    getIndicadores: jest.fn(),
  };
});

test("Renderiza com o texto 'Simulador de Investimentos'", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Simulador de Investimentos/i);
  expect(linkElement).toBeInTheDocument();
});

test("Dispara a funcao getIndicadores ao renderizar", () => {
  render(<Home />);
  expect(getIndicadores).toBeCalledTimes(1);
});

