import { Box } from "@chakra-ui/react";

export default function Container({ ...props }) {
  return <Box w="100%" maxW="1150px" mx="auto" px={8} {...props}></Box>;
}
