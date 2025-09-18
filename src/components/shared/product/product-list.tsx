import React from "react";
import { useTranslations } from "next-intl";

import { ProductType } from "@/types";

import { ProductCard } from "./product-card";

interface ProductListProps {
  data: ProductType[];
  title?: string;
  limit?: number;
}

export const ProductList = ({ data, title, limit }: ProductListProps) => {
  const t = useTranslations("components.product");

  // Apply limit if provided, otherwise show all products
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="mx-10 my-8">
      <h2 className="font-bold my-4 text-amber-700  text-2xl">{title}</h2>
      {limitedData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {limitedData.map((product: ProductType) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
      {limitedData.length === 0 && (
        <div>
          <p>{t("no_product_found")}</p>
        </div>
      )}
    </div>
  );
};
