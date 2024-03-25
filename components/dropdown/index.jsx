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
  Box,
  Divider,
} from "@chakra-ui/react";
import Avatar from "@/components/avatar";
import Link from "next/link";
import { CaretDownIcon } from "@/public/svg";

export const Dropdown = (props) => {
  const { text } = props;

  return (
    <Popover placement="bottom-end" arrowSize={"xl"}>
      <PopoverTrigger>
        <Button
          _hover={{ color: "text.200" }}
          color={"text.100"}
          fontSize={"14px"}
          fontWeight={"400"}
          rightIcon={<CaretDownIcon />}
          variant="link"
        >
          {text}
        </Button>
      </PopoverTrigger>
      <PopoverContent maxW={"290px"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize={"12px"} fontWeight={"600"} color={"text.200"}>
          Fitler by author
        </PopoverHeader>
        <PopoverBody p={0}>
          <Box p={2}>
            <Input
              placeholder="Basic usage"
              size="sm"
              borderRadius={4}
              borderColor={"border.100"}
            />
          </Box>
          <Divider />
          <Link m={2} href="/">
            <Avatar
              name={"Dan Abramov"}
              nickname={"dan-abramov"}
              px={8}
              py={"2px"}
              src="https://bit.ly/dan-abramov"
              _hover={{ backgroundColor: "blackAlpha.100" }}
            />
          </Link>
          <Divider />
          <Link href="/">
            <Avatar
              name={"Kent Dodds"}
              nickname={"kent-dodds"}
              px={8}
              py={"3px"}
              src="https://bit.ly/kent-c-dodds"
            />
          </Link>{" "}
          <Divider />
          <Link href="/">
            <Avatar
              name={"Ryan Florence"}
              nickname={"ryan-florence"}
              px={8}
              py={"3px"}
              src="https://bit.ly/ryan-florence"
            />
          </Link>{" "}
          <Divider />
          <Link href="/">
            <Avatar
              alt="Segun Adebayo"
              name={"Furkan Cat"}
              nickname={"furkan-cat"}
              px={8}
              py={"3px"}
              src="https://bit.ly/sage-adebayo"
            />
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
