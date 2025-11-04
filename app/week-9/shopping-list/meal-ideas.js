"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    function loadMealIdeas(ingredient) {
      fetchMealIdeas(ingredient).then((data) => {
        setMeals(data);
      });
    }
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <>
      {!ingredient && (
        <>
          <h2 className="text-xl font-bold mb-4">
            Meal Ideas (select an ingredient)
          </h2>
          <p>Choose an item to see ideas.</p>
        </>
      )}
      {ingredient && (
        <>
          <h2 className="text-xl font-bold mb-4">
            Meal Ideas with &quot;{ingredient}&quot;
          </h2>
          {meals && meals.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {meals.map((meal) => (
                <li key={meal.idMeal} className="border p-4 rounded">
                  <p className="font-bold">{meal.strMeal}</p>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No meal ideas found.</p>
          )}
        </>
      )}
    </>
  );
}

const fetchMealIdeas = async function (ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    console.log(data);
    return data.meals;
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};
