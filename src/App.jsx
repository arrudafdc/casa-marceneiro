import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaulTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste" element={<p>Teste</p>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
