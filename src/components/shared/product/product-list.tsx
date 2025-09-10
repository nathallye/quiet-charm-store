import React from "react";
import { useTranslations } from "next-intl";

import { ProductDTO } from "@/dto";

import { ProductCard } from "./product-card";

interface ProductListProps {
  data: ProductDTO[];
  title?: string;
  limit?: number;
}

export const ProductList = ({ data, title, limit }: ProductListProps) => {
  const t = useTranslations("pages.home_page");

  // Apply limit if provided, otherwise show all products
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="m-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: ProductDTO) => (
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
