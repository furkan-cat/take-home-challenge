"use client";

import { Box, Container, Flex, HStack, Spacer } from "@chakra-ui/react";
import NavLink from "@/components/nav-link";
import { Dropdown } from "@/components/dropdown";
import { tableHeaderLeftLinks, tableHeaderRightLinks } from "@/utils/constants";
import { CaretDownIcon } from "@/public/svg";

export default function Page() {
  return (
    <Container
      maxW="2xl"
      border={"1px"}
      borderColor={"border.100"}
      borderStyle={"solid"}
    >
      <Box p={"16px"}>
        <Flex>
          <HStack spacing={"16px"}>
            {tableHeaderLeftLinks.map((item) => (
              <NavLink
                icon={item.icon}
                key={item.text}
                text={item.text}
                to={item.to}
                value={2510}
              />
            ))}
          </HStack>
          <Spacer />
          <HStack spacing={"16px"}>
            <HStack gap={1} alignItems={"baseline"}>
              <Dropdown text="Author" />
              <CaretDownIcon />
            </HStack>

            <HStack gap={1} alignItems={"baseline"}>
              <Dropdown text="Label" />
              <CaretDownIcon />
            </HStack>

            {tableHeaderRightLinks.map((item) => (
              <Box
                _hover={{ color: "text.200" }}
                color={"text.100"}
                fontSize={"14px"}
                key={item.text}
              >
                {item.icon}
                {item.text}
              </Box>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
}
