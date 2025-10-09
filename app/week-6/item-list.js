"use client";

import { useState } from "react";
import Item from "./item";
import * as Items from "./items.json";

export default function ItemList() {
  const [items, setItems] = useState(JSON.parse(JSON.stringify(Items.default)));
  const [sortBy, setSortBy] = useState("name");

  return (
    <>
      <div className="flex items-center gap-2 my-3">
        <p className="font-medium text-sm text-gray-500 ">Sort by:</p>
        <button
          className={`font-medium text-sm px-3 py-1.5 rounded cursor-pointer ${
            sortBy === "name"
              ? "text-blue-200 bg-blue-600"
              : "text-gray-900 bg-blue-200"
          }`}
          onClick={() => {
            setSortBy("name");
            setItems((items) =>
              items.sort((a, b) => a.name.localeCompare(b.name))
            );
          }}
        >
          Name
        </button>
        <button
          className={`font-medium text-sm px-3 py-1.5 rounded cursor-pointer ${
            sortBy === "category"
              ? "text-blue-200 bg-blue-600"
              : "text-gray-900 bg-blue-200"
          }`}
          onClick={() => {
            setSortBy("category");
            setItems((items) =>
              items.sort((a, b) => a.category.localeCompare(b.category))
            );
          }}
        >
          Category
        </button>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
}
