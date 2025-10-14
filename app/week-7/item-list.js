"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items].sort((a, b) => {
    // Sort case-insensitively
    const A = a[sortBy]?.toLowerCase();
    const B = b[sortBy]?.toLowerCase();

    if (A < B) return -1;
    if (A > B) return 1;

    // Secondary sort: if sorting by category, then sort by name inside each category
    if (sortBy === "category") {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }

    return 0;
  });

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
          }}
        >
          Category
        </button>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {sortedItems.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
}
