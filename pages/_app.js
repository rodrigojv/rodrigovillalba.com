import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: '"IBM Plex Mono", monospace',
  },
  colors: {
    ...theme.colors,
    screencase: "#b6b6b6",
  },
};
const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html,
          body {
            color: #445566;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
