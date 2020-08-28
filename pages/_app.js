import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme,
  useTheme,
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
    primary: { 200: "#84d2f6", 400: "#386fa4" },
  },
};
const GlobalStyle = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html,
          body {
            color: #445566;
          }
          /* A elements that don't have a class get default styles */
          a:not([class]) {
            text-decoration-skip-ink: auto;
          }
          a {
            color: ${theme.colors.black};
            font-weight: ${theme.fontWeights.bold};
            text-decoration: none;
            position: relative;
          }
          a.link-social-media {
            color: inherit;
          }
          a:not(.link-social-media)::after {
            content: "";
            position: absolute;
            left: -0.1em;
            right: -0.1em;
            bottom: 0;
            height: 2px;
            background-color: ${theme.colors.primary[200]};
            z-index: -1;
            transition: transform 125ms ease-in-out;
            transform-origin: bottom;
          }

          a:hover::after,
          a:focus::after {
            transform: scaleY(2);
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
