import ThemeProvider from './styles/ThemeProvider';
import GlobalSttyle from './styles/GlobalStyle';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalSttyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
