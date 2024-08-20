import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/sections/Hero";

function App() {
  const Body = styled.div`
    background: ${({ theme }) => theme.bg};
    height: 90vh;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    color: ${({ theme }) => theme.text_primary};
  `;
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Body>
            <Hero />
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
