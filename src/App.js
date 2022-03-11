import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>App File</ThemeProvider>
    </>
  );
}

export default App;
