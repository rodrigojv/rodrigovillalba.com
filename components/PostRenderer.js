/* eslint-disable react/display-name */
import ChakraUIRenderer, { defaults } from "chakra-ui-markdown-renderer";
import { Text, useTheme, ListItem, Box } from "@chakra-ui/react";
import Code from "./Code";

const newTheme = {
  ...defaults,
  code: ({ language, value }) => {
    return <Code language={language} value={value} />;
  },
  blockquote: (props) => {
    const { children } = props;
    const theme = useTheme();

    return (
      <Box
        as="blockquote"
        my={6}
        px={6}
        borderLeftWidth={4}
        borderLeftStyle="solid"
        borderLeftColor={theme.colors.primary[200]}
      >
        {children}
      </Box>
    );
  },
  listItem: (props) => {
    // eslint-disable-next-line react/prop-types
    return <ListItem style={{ marginTop: "1rem" }}>{props.children}</ListItem>;
  },
  paragraph: (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    return <Text my={6}>{children}</Text>;
  },
};
export default ChakraUIRenderer(newTheme);
