import React from "react";
import { CategoryProps } from "./categories.types";
import Link from "next/link";

export default async function CategoryCard({ category }:CategoryProps) {
  return (
    <Link href={`/categories/categoryDetails/${category._id}`} className="flex flex-col items-center gap-2 border border-secondary rounded-md p-4 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col items-center gap-2">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img src={category.image} alt={category.name} />
        </div>
        <h3>{category.name}</h3>
      </div>
    </Link>
  );
}
