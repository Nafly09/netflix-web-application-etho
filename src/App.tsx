import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { GlobalStyles } from "./themes/main/global-styles";
import theme from "./themes/main/theme";
import Form from "./screens/login/login.screen";
import store from "./store/store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Form />;
      </ThemeProvider>
    </Provider>
  );
}

export default App;
