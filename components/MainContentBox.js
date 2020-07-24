import { Box } from "@chakra-ui/core";

export default function MainContentBox({ children, ...props }) {
  return (
    <Box w="100%" maxW="960px" mx="auto" py="2rem" mt="4rem" {...props}>
      {children}
    </Box>
  );
}
