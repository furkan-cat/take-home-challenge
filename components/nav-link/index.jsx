"use client";

import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function NavLink(props) {
  const { icon, text, to, value } = props;

  return (
    <Link href={to}>
      <Flex
        _hover={{ color: "hoveredText.100" }}
        alignItems={"flex-end"}
        color={"mutedText.100"}
        fontSize={"14px"}
        gap={"4px"}
      >
        {icon}
        {value} {text}
      </Flex>
    </Link>
  );
}
