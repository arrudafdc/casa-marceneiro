import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaulTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter basename="/casa-marceneiro/">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
