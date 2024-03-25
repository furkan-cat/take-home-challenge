"use client";

import { Avatar as ChakraAvatar, HStack, Text } from "@chakra-ui/react";

export default function Avatar(props) {
  const { src, nickname, name } = props;

  return (
    <HStack {...props}>
      <ChakraAvatar name={name} src={src} size="xs" />
      <Text fontSize={"xs"} fontWeight={"600"}>
        {nickname}
      </Text>
      <Text fontSize={"xs"} color={"text.100"}>
        {name}
      </Text>
    </HStack>
  );
}
