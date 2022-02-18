import { render, screen } from './utils/test-utils';
import App from './App';

test('renderiza com o texto "Simulador de Investimentos"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simulador de Investimentos/i);
  expect(linkElement).toBeInTheDocument();
});
