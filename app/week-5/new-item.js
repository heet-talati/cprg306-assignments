"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const options = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const item = { name, category, quantity };
    console.log("Item:", item);
    alert(
      `
      Item: ${item.name}
      Quantity: ${item.quantity}
      Category: ${item.category}
      `
    );

    setQuantity(1);
    setName("");
    setCategory("produce");
  }

  return (
    <div className="mx-auto max-w-md p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Add New Item</h1>
      <form className="flex flex-col p-4 bg-gray-900 rounded-md">
        <div className="flex flex-col gap-2 p-4">
          <label htmlFor="item-name" className="text-gray-500">
            Item Name
          </label>
          <input
            type="text"
            name="item-name"
            id="item-name"
            className="border border-gray-700 rounded p-2"
            placeholder="e.g. Apples, 3lbs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-5 p-4">
          <p className="text-gray-500 text-sm">
            Quantity:{" "}
            <span className="text-gray-300 text-xl font-bold">{quantity}</span>
          </p>
          <div className="flex gap-x-3">
            <button
              className="bg-gray-700 disabled:bg-gray-500 cursor-pointer text-white px-4 py-2 rounded"
              disabled={quantity === 1}
              onClick={decrement}
              type="button"
            >
              -
            </button>
            <button
              className="bg-blue-600 disabled:bg-blue-950 cursor-pointer text-white px-4 py-2 rounded"
              disabled={quantity === 20}
              onClick={increment}
              type="button"
            >
              +
            </button>
          </div>
          <p className="text-gray-500 text-xs">Allowed range: 1–20</p>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <label htmlFor="item-name" className="text-gray-500">
            Item Category
          </label>
          <select
            name="item-category"
            id="item-category"
            className="border border-gray-700 rounded p-2"
            placeholder="e.g. Apples, 3lbs"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {options.map((option) => (
              <option
                className="bg-gray-800 text-white"
                key={option}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          value={"Add Item"}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
