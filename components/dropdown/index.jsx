"use client";

import NextLink from "next/link";
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
import Link from "next/link";
import Avatar from "@/components/avatar";
import { CaretDownIcon, CheckIcon } from "@/public/svg";
import { useRef } from "react";
import { useFilterSlice } from "@/store";

export const Dropdown = (props) => {
  const { text, onChange, onClick, filteredState, data } = props;
  //const originalData = useDataSlice((state) => state.originalData);
  const searched = useFilterSlice((state) => state.searched);
  const reset = useFilterSlice((state) => state.resetState);
  const initRef = useRef();

  // const labelSearchData = useMemo(() => {
  //   if (!labelInputValue.length) {
  //     const labels = [
  //       ...new Set(
  //         originalData.map((item, i) =>
  //           item.labels.map((labels, x) => labels["name"])
  //         )
  //       ).values(),
  //     ];
  //     const uniqueLabels = new Set(labels.flat());

  //     return uniqueLabels;
  //   } else {
  //     const filtered = originalData.filter((item) =>
  //       item.labels.toLowerCase().includes(labelInputValue.toLowerCase())
  //     );

  //     return filtered;
  //   }
  // });

  return (
    <Popover placement="bottom-end" arrowSize={"xl"} onClose={() => reset("")}>
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
            >
              {text}
            </Button>
          </PopoverTrigger>
          <PopoverContent maxW={"300px"} h="450px">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader
              fontSize={"12px"}
              fontWeight={"600"}
              color={"text.200"}
            >
              Fitler by author
            </PopoverHeader>
            <Box p={2}>
              <Input
                borderColor={"border.100"}
                borderRadius={4}
                onChange={onChange}
                placeholder="Basic usage"
                size="sm"
                value={searched}
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
                  <Link
                    as={NextLink}
                    href="/"
                    key={data.id || data.label}
                    onClick={() => {
                      //reset("");
                      onClick(data);
                      onClose();
                    }}
                    style={{
                      display: "block",
                    }}
                    _hover={{ backgroundColor: "blackAlpha.100" }}
                  >
                    <Flex align="center" pl={4}>
                      {filteredState ? (
                        <CheckIcon opacity={login === filteredState ? 1 : 0} />
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
                    <Divider />
                  </Link>
                );
              })}
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
