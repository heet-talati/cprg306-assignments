"use client";

import { useState, useEffect, use } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
// import Head from "next/head";
import { useUserAuth } from "../../contexts/AuthContext";
import { redirect } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

// export const metadata = {
//   title: "Shopping List",
// };

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState([]);
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

  async function handleAddItem(name, quantity, category) {
    const id = await addItem(user.uid, { name, quantity, category });
    setItems([...items, { id, name, quantity, category }]);
  }

  useEffect(() => {
    async function loadItems() {
      const loadedItems = await getItems(user.uid);
      console.log("loadedItems", loadedItems);
      setItems(loadedItems);
    }

    if (user) {
      loadItems();
    }
    console.log("items loaded");
  }, [user]);

  if (!user) redirect("/week-10");

  return (
    <main className="mx-auto max-w-5xl p-4 flex">
      {user && (
        <section className="w-full grid md:grid-cols-2 gap-6">
          <section className="w-full">
            <h1 className="text-2xl font-bold">Week 10 - Shopping List</h1>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <ItemList
              items={items}
              onSelectItem={handleSelectedItem}
            ></ItemList>
          </section>
          <section className="w-full">
            <MealIdeas ingredient={selectedItemIngredient}></MealIdeas>
          </section>
        </section>
      )}
    </main>
  );
}
