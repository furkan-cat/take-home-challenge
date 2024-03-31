"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { useDataSlice } from "@/store/index";
import NoData from "@/components/no-data/no-data";
import TableHeader from "./table-header";
import TableItem from "./table-item";
import { headerConstant } from "@/utils/constants";

export default function Table(props) {
  const { data, originalData } = props;
  const setFetchedData = useDataSlice((state) => state.setFetchedData);
  const [isXs] = useMediaQuery("(max-width: 545px)", {
    ssr: true,
    fallback: false,
  });

  // set fetched server side data to global state management tool zustang
  useEffect(() => {
    setFetchedData(data, originalData);
  }, []);

  // get setted data from zustang store to indicate table components properly
  const storeData = useDataSlice((state) => state.data);

  return (
    <>
      {!storeData.length > 0 ? (
        <NoData />
      ) : (
        <Container maxW={isXs ? "none" : "container.xl"} mt={2} p={isXs && 0}>
          <Box
            border={isXs ? "0" : "1px"}
            borderColor="border.100"
            borderRadius={6}
            borderStyle="solid"
          >
            <Table.Header data={headerConstant} />
            {storeData?.map((item) => (
              <Link key={item.number} href={item.html_url}>
                <Table.Item key={item.number} data={item} />
              </Link>
            ))}
          </Box>
        </Container>
      )}
    </>
  );
}

Table.Header = TableHeader;
Table.Item = TableItem;
