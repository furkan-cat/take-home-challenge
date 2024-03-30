"use client";

import { useEffect } from "react";
import { useDataSlice } from "@/store";
import Table from "@/components/table/table";
import { headerConstant } from "@/utils/constants";
import NoData from "@/components/no-data/no-data";

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
      ) }
    </Table>
  );
}
