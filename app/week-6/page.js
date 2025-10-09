import ItemList from "./item-list";
import Head from "next/head";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-xl p-4 flex flex-col">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList></ItemList>
    </main>
  );
}
