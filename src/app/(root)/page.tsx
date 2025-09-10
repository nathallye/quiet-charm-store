import { useTranslations } from "next-intl";

import { sampleData } from "@/db/sample-data";
import { ProductList } from "@/components/shared/product/product-list";

const HomePage = () => {
  const t = useTranslations("pages.home_page");

  return (
    <div className="space-y-8">
      <h2 className="font-medium mx-10 my-4 text-2xl">
        {t("latest_products")}
      </h2>
      <ProductList
        title="Newest Arrivals"
        data={sampleData.products}
        limit={4}
      />
    </div>
  );
};

export default HomePage;
