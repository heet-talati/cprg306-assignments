"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import * as itemsData from "./items.json";
import Head from "next/head";

// export const metadata = {
//   title: "Shopping List",
// };

export default function Page() {
  const [items, setItems] = useState(
    JSON.parse(JSON.stringify(itemsData.default))
  );

  function handleAddItem(name, quantity, category) {
    setItems([
      ...items,
      {
        id: String(Date.now()),
        name: name,
        quantity: quantity,
        category: category,
      },
    ]);
  }

  return (
    <main className="mx-auto max-w-xl p-4 flex flex-col">
      <h1 className="text-2xl font-bold">Week 7 - Shopping List</h1>
      <NewItem onAddItem={handleAddItem}></NewItem>
      <ItemList items={items} setItems={setItems}></ItemList>
    </main>
  );
}
