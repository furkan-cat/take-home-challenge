"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
  VStack,
} from "@chakra-ui/react";
import Avatar from "@/components/avatar";

export const Dropdown = (props) => {
  const { text } = props;

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          _hover={{ color: "text.200" }}
          color={"text.100"}
          fontSize={"14px"}
          fontWeight={"400"}
          variant="link"
        >
          {text}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize={"12px"} fontWeight={"600"} color={"text.200"}>
          Fitler by author!
        </PopoverHeader>
        <PopoverBody>
          <Input placeholder="Basic usage" size="sm" />

          <VStack>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              userName={"furkan-cat"}
              nameSurname={"Furkan Cat"}
            />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
