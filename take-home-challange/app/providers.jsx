"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export function Providers({ children }) {
  const theme = extendTheme({
    colors: {
      border: {
        100: "#d0d7de",
      },
      text: {
        100: "#636c76",
        200: "#1f2328",
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
