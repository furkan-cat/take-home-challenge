"use client";

import NextLink from "next/link";
import Link from "next/link";
import { useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import Avatar from "@/components/avatar";
import { CaretDownIcon, CheckIcon } from "@/public/svg";
import { useFilterSlice } from "@/store/index";

export default function Dropdown(props) {
  const { text, onChange, onClick, filteredState, data } = props;
  const searched = useFilterSlice((state) => state.searched);
  const reset = useFilterSlice((state) => state.resetState);
  const initRef = useRef();

  return (
    <Popover
      placement="bottom-end"
      arrowSize={"xl"}
      onClose={() => reset("")}
      data-testid="dropdown"
    >
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              _hover={{ color: "text.200" }}
              color={"text.100"}
              fontSize={"14px"}
              fontWeight={"400"}
              rightIcon={<CaretDownIcon />}
              variant="link"
              ref={initRef}
              onClick={() => onClose()}
              data-testid="dropdown-button"
            >
              {text}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            maxW="300px"
            maxH="450px"
            data-testid="dropdown-content"
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader
              fontSize={"12px"}
              fontWeight={"600"}
              color={"text.200"}
              data-testid="dropdown-header"
            >
              Filter by author
            </PopoverHeader>
            <Box p={2}>
              <Input
                borderColor={"border.100"}
                borderRadius={4}
                onChange={onChange}
                placeholder="Basic usage"
                size="sm"
                value={searched}
                data-testid="dropdown-input"
              />
            </Box>
            <PopoverBody p={0} m={0} overflowY="scroll">
              <Divider />

              {data?.map((data) => {
                const login = data.user?.login;
                const url = data.user?.avatar_url;
                const color = data?.color;
                const label = data?.label;

                return (
                  <Flex
                    align="center"
                    pl={4}
                    key={data.id || data.label}
                    onClick={() => {
                      onClick(data);
                      onClose();
                    }}
                    style={{
                      display: "block",
                    }}
                    _hover={{ backgroundColor: "blackAlpha.100" }}
                  >
                    {filteredState ? (
                      <CheckIcon
                        opacity={login === filteredState ? 1 : 0}
                        data-testid="dropdown-filtered-state"
                      />
                    ) : null}
                    <Avatar
                      name={login || label}
                      nickname={login || label}
                      px={8}
                      py={"2px"}
                      src={url}
                      color={color}
                    />
                  </Flex>
                );
                <Divider />;
              })}
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
