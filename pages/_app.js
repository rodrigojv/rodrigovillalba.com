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
      <style jsx global>
        {`
          @font-face {
            font-family: "IBM Plex Mono";
            src: url("/fonts/IBMPlexMono-Regular.ttf");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          /* IBM PlexMono italic */

          @font-face {
            font-family: "IBM Plex Mono";
            src: url("/fonts/IBMPlexMono-Italic.ttf");
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }

          /* IBM PlexMono bold */

          @font-face {
            font-family: "IBM Plex Mono";
            src: url("/fonts/IBMPlexMono-Bold.ttf");
            font-weight: 700;
            font-style: normal;
            font-display: fallback;
          }
          html,
          body {
            color: #445566;
          }
        `}
      </style>
    </ThemeProvider>
  );
};

export default App;
