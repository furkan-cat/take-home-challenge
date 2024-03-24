"use client";

import { Avatar as ChakraAvatar, Box, HStack } from "@chakra-ui/react";

export default function Avatar(props) {
  const { name, src, userName, nameSurname } = props;

  return (
    <HStack>
      <ChakraAvatar name={name} src={src} size="xs" />
      <Box>{userName}</Box>
      <Box>{nameSurname}</Box>
    </HStack>
  );
}
