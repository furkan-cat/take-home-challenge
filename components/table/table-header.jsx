"use client";

import { Button, Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import NavLink from "../nav-link";
import { Dropdown } from "../dropdown";
import { CaretDownIcon } from "@/public/svg";
import { useDataSlice, useFilterSlice } from "@/store";
import { useMemo } from "react";
import { handleAuthorSearch, handleLabelsSearch } from "./helpers";

export default function TableHeader({ data }) {
  const originalData = useDataSlice((state) => state.originalData);
  const setFilter = useFilterSlice((state) => state.setFilter);
  const filtered = useFilterSlice((state) => state.filtered);
  const reset = useFilterSlice((state) => state.resetState);
  const setSearch = useFilterSlice((state) => state.setSearch);
  const searched = useFilterSlice((state) => state.searched);
  const updateList = useDataSlice((state) => state.updateList);

  const [isS] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
  });
  const [isM] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
  });

  const updateData = (val) => {
    if (val !== searched) {
      return originalData.filter((item) => item.user.login === val);
    } else {
      return originalData;
    }
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onAuthorClick = (listItem) => {
    const { login } = listItem.user;
    // prevent click event if clicked same item
    if (filtered === login) {
      setFilter("");
    } else {
      setFilter(login);
    }
    // reset input field
    reset("");
    // get list items
    const data = updateData(login);
    updateList(data);
  };

  const updatexData = (val) => {
    if (val !== searched) {
      return originalData.filter((item) =>
        item.labels.some((x) => x.name === val)
      );
    } else {
      return originalData;
    }
  };

  const onLabelsClick = (listItem) => {
    const { label } = listItem;
    // prevent click event if clicked same item
    if (filtered === label) {
      setFilter("");
    } else {
      setFilter(label);
    }
    // reset input field
    reset("");
    // get list items
    const data = updatexData(label);
    updateList(data);
  };

  const searchedAuuthorData = useMemo(() => {
    return handleAuthorSearch(searched, originalData);
  }, [searched, originalData]);

  const searchedLabelsData = useMemo(() => {
    return handleLabelsSearch(searched, originalData);
  }, [searched, originalData]);

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
          />
        ))}
      </HStack>

      <HStack spacing={"16px"}>
        <HStack gap={1} alignItems={"baseline"}>
          <Dropdown
            data={searchedAuuthorData}
            filteredState={filtered}
            onChange={onChange}
            onClick={onAuthorClick}
            text="Author"
          />
        </HStack>

        <HStack gap={1} alignItems={"baseline"}>
          <Dropdown
            data={searchedLabelsData}
            onChange={onChange}
            onClick={onLabelsClick}
            text="Label"
          />
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
