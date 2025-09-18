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
      <ProductList title={t("newest_arrivals")} data={products} limit={5} />
    </div>
  );
};
