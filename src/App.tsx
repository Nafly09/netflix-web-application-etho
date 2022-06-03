import { ThemeProvider } from "styled-components";
import theme from "./themes/main/theme";
import Form from "./screens/login/login.screen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Form />;
    </ThemeProvider>
  );
}

export default App;
