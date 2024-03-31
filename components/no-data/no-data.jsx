import { Box, Spinner } from "@chakra-ui/react";

export default function NoData() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Spinner />
    </Box>
  );
}
