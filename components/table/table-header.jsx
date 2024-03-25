"use client";

import { Button, Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import NavLink from "../nav-link";
import { Dropdown } from "../dropdown";
import { CaretDownIcon } from "@/public/svg";

export default function TableHeader({ data }) {
  const [isS] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
  });
  const [isM] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
  });

  return (
    <Flex
      justifyContent={isM ? "space-between" : "start"}
      alignItems="center"
      flex={1}
      bg={"bg.100"}
      p="16px"
    >
      <HStack
        spacing={"16px"}
        display={isM ? "flex" : "none"}
        alignItems="center"
      >
        {data.leftLinks.map((item) => (
          <NavLink
            icon={item.icon}
            key={item.text}
            text={item.text}
            to={item.to}
            value={2510}
          />
        ))}
      </HStack>

      <HStack spacing={"16px"}>
        <HStack gap={1} alignItems={"baseline"}>
          <Dropdown text="Author" />
        </HStack>

        <HStack gap={1} alignItems={"baseline"}>
          <Dropdown text="Label" />
        </HStack>

        {data.rightLinks.map((item) => (
          <Flex
            _hover={{ color: "text.200" }}
            alignItems={"baseline"}
            color={"text.100"}
            fontSize={"14px"}
            key={item.text}
            gap={1}
            display={
              !isS ? "block" : isS && item.showOnMobile ? "block " : "none"
            }
          >
            <Button
              _hover={{ color: "text.200" }}
              color={"text.100"}
              fontSize={"14px"}
              fontWeight={"400"}
              rightIcon={<CaretDownIcon />}
              variant="link"
            >
              {item.text}
            </Button>
          </Flex>
        ))}
      </HStack>
    </Flex>
  );
}
