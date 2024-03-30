"use client";

import { Avatar as ChakraAvatar, HStack, Text } from "@chakra-ui/react";

export default function Avatar(props) {
  const { src, nickname, name, color } = props;

  return (
    <HStack p={2} overflow="hidden">
      <ChakraAvatar src={src} w={5} h={5} bg={`#${color}`} icon={<></>} />
      <Text
        fontSize={"xs"}
        fontWeight={"600"}
        textwrap="no-wrap"
        whiteSpace="nowrap"
      >
        {nickname}
      </Text>
      <Text fontSize={"xs"} color={"text.100"} noOfLines={1}>
        {name}
      </Text>
    </HStack>
  );
}
