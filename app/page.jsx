"use client";

import { useEffect } from "react";
import { useDataSlice } from "@/store/index";
import Table from "@/components/table/table";
import NoData from "@/components/no-data/no-data";
import { headerConstant } from "@/utils/constants";

export default function Page() {
  const data = useDataSlice((state) => state.data);
  const fetchData = useDataSlice((state) => state.fetchData);
  // set fetched data to zustang
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table>
      <Table.Header data={headerConstant} />
      {data.length ? (
        data?.map((item) => <Table.Item key={item.number} data={item} />)
      ) : (
        <NoData />
      )}
    </Table>
  );
}
