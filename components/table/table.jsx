"use client";

import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import TableHeader from "./table-header";
import TableItem from "./table-item";

export default function Table({ children }) {
  const [isXs] = useMediaQuery("(max-width: 545px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Container maxW={isXs ? "none" : "container.xl"} mt={2} p={isXs && 0}>
      <Box
        border={isXs ? "0" : "1px"}
        borderColor="border.100"
        borderRadius={6}
        borderStyle="solid"
      >
        {children}
      </Box>
    </Container>
  );
}

Table.Header = TableHeader;
Table.Item = TableItem;
