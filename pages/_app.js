import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "theme/assets/theme";
import CssReset from "theme/assets/css-reset";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
