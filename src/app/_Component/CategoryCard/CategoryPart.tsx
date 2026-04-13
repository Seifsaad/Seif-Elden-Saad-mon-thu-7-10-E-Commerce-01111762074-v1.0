import React from "react";
import { getAllCategories } from "_/Api/route.services";
import CategoryCard from "./CategoryCard";

export default async function CategoryPart() {
  const allCategories = await getAllCategories();
  console.log(allCategories);

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 container mx-auto py-15 ">
      {allCategories?.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
}
