import { render, screen, fireEvent } from "utils/test-utils";

import SelectButton from "./SelectButton";

const options = ["option 1", "option 2", "option 3"];

test('Renderiza com o titulo "Titulo"', () => {
  render(
    <SelectButton title="Titulo" options={options} selected={"option 1"} />
  );
  const linkElement = screen.getByText(/Titulo/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renderiza com 3 options", () => {
  render(
    <SelectButton title="Titulo" options={options} selected={"option 1"} />
  );
  const linkElement = screen.getAllByRole("button");
  expect(linkElement).toHaveLength(3);
});

const handleSelect = jest.fn();

test("Dispara o evento ao clicar em uma option não selecionada", async () => {
  render(
    <SelectButton
      title="Titulo"
      options={options}
      selected={"option 1"}
      handleSelect={handleSelect}
    />
  );
  await fireEvent.click(screen.getByText("option 2"));

  expect(handleSelect).toBeCalled();
  expect(handleSelect).toBeCalledTimes(1);
});
test("Não dispara o evento ao clicar em uma option selecionada", async () => {
  const handleSelect = jest.fn();

  render(
    <SelectButton
      title="Titulo"
      options={options}
      selected={"option 1"}
      handleSelect={handleSelect}
    />
  );
  await fireEvent.click(screen.getByText("option 1"));

  expect(handleSelect).not.toBeCalled();
  expect(handleSelect).toBeCalledTimes(0);
});
