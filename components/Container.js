import { Box } from "@chakra-ui/core";

export default function Container({ children, ...props }) {
  return (
    <Box w="100%" maxW="1150px" mx="auto" px={8} {...props}>
      {children}
    </Box>
  );
}
