import Table from "@/components/table/table";
import create from "./actions";

export default async function Page() {
  const { data, originalData } = await create();

  return <Table data={data} originalData={originalData} />;
}
