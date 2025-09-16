import React from "react";
import { useTranslations } from "next-intl";

import { Product } from "@/generated/prisma";

import { ProductList } from "../shared/product";

interface HomeProps {
  products: Product[];
}

export const Home = ({ products }: HomeProps) => {
  const t = useTranslations("pages.home");

  return (
    <div className="space-y-8">
      <h2 className="font-medium mx-10 my-4 text-2xl">
        {t("latest_products")}
      </h2>
      <ProductList title={t("newest_arrivals")} data={products} limit={4} />
    </div>
  );
};
