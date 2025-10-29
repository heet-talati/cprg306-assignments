"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import * as itemsData from "./items.json";
import Head from "next/head";

// export const metadata = {
//   title: "Shopping List",
// };

export default function Page() {
  const [items, setItems] = useState(
    JSON.parse(JSON.stringify(itemsData.default))
  );
  const [selectedItemIngredient, setSelectedItemIngredient] = useState("");

  function handleSelectedItem(ingredient) {
    ingredient = ingredient
      .replace(
        /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
        ""
      )
      .split(",")[0]
      .trim();
    setSelectedItemIngredient(() => ingredient);
  }

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
    <main className="mx-auto max-w-5xl p-4 flex">
      <section className="w-full grid md:grid-cols-2 gap-6">
        <section className="w-full">
          <h1 className="text-2xl font-bold">Week 7 - Shopping List</h1>
          <NewItem onAddItem={handleAddItem}></NewItem>
          <ItemList
            items={items}
            setItems={setItems}
            onSelectItem={handleSelectedItem}
          ></ItemList>
        </section>
        <section className="w-full">
          <MealIdeas ingredient={selectedItemIngredient}></MealIdeas>
        </section>
      </section>
    </main>
  );
}
