/* eslint-disable react/display-name */
import ChakraUIRenderer, { defaults } from "chakra-ui-markdown-renderer";
import { Text, useTheme, ListItem, Box } from "@chakra-ui/react";

const newTheme = {
  ...defaults,
  paragraph: (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    return <Text my={6}>{children}</Text>;
  },
  blockquote: (props) => {
    // eslint-disable-next-line react/prop-types
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
};
export default ChakraUIRenderer(newTheme);
