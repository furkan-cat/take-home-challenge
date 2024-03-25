"use client";

import { useEffect } from "react";
import { useStore } from "@/store";
import Table from "@/components/table/table";
import { headerConstant } from "@/utils/constants";

export default function Page() {
  const getData = useStore();
  // set fetched data to zustang
  useEffect(() => {
    getData.fetchData();
  }, []);

  const data = useStore.getState().data;
  console.log(data);

  return (
    <Table>
      <Table.Header data={headerConstant} />
      {data?.map((item) => (
        <Table.Item key={item.title} data={item} />
      ))}
    </Table>
  );
}
