import { render, screen, fireEvent } from "../utils/test-utils";

import Button from "./Button";

test('renderiza com o testo "Click aqui"', () => {
  render(
    <Button variant="default">
      <p>Click aqui</p>
    </Button>
  );
  const linkElement = screen.getByText(/Click aqui/i);
  expect(linkElement).toBeInTheDocument();
});

test("Disparar evento ao clicar", async () => {
  const handleClick = jest.fn();
  render(
    <Button variant="default" handleClick={handleClick}>
      <p>Click aqui</p>
    </Button>
  );
  await fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toBeCalled();
});

test.each([["default"], ["outlined"]])("renderiza com a variante %s", 
  (variant: any) => {
    const { asFragment } = render(
      <Button variant={variant}>
        <p>Button</p>
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
});
