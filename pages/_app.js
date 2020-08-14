import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: "IBM Plex Mono",
  },
  colors: {
    ...theme.colors,
    screencase: "#b6b6b6",
  },
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
