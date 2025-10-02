"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <div className="mx-auto max-w-md p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Add New Item</h1>
      <div className="flex flex-col gap-5 p-4 bg-gray-900 rounded-md">
        <p className="text-gray-500 text-sm">
          Quantity:{" "}
          <span className="text-gray-300 text-xl font-bold">{quantity}</span>
        </p>
        <div className="flex gap-x-3">
          <button
            className="bg-gray-700 disabled:bg-gray-500 cursor-pointer text-white px-4 py-2 rounded"
            disabled={quantity === 1}
            onClick={decrement}
          >
            -
          </button>
          <button
            className="bg-blue-600 disabled:bg-blue-950 cursor-pointer text-white px-4 py-2 rounded"
            disabled={quantity === 20}
            onClick={increment}
          >
            +
          </button>
        </div>
        <p className="text-gray-500 text-xs">Allowed range: 1–20</p>
      </div>
    </div>
  );
}
