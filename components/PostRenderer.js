/* eslint-disable react/display-name */
import ChakraUIRenderer, { defaults } from "chakra-ui-markdown-renderer";
import { Text, useTheme, ListItem } from "@chakra-ui/react";

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
      <Text
        my={6}
        px={6}
        borderLeftWidth={4}
        borderLeftStyle="solid"
        borderLeftColor={theme.colors.primary[200]}
      >
        {children}
      </Text>
    );
  },
  listItem: (props) => {
    return <ListItem {...props} style={{ marginTop: "1rem" }} />;
  },
};
export default ChakraUIRenderer(newTheme);
