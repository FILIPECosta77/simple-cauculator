import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./css/theme";
import Home from "./components/home";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
