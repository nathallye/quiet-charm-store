import { useTranslations } from "next-intl";

import { ProductType } from "@/types";

import { ProductImages, ProductPrice } from "../shared/product";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface ProductDetailsProps {
  product: ProductType;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const t = useTranslations("pages.product_details");

  return (
    <section className="my-4 mx-8">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImages images={product.images!} />
        </div>
        {/* Details Column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product.collection} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>
              {t("reviews", {
                rating: product.rating,
                num_reviews: product.numReviews,
              })}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p>{`${t("description")}:`}</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/* Action Column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>{t("price")}</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>{t("status")}</div>
                {product.stock > 0 ? (
                  <Badge variant="outline">{t("status_badge.in_stock")}</Badge>
                ) : (
                  <Badge variant="destructive">
                    {t("status_badge.unavailable")}
                  </Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full">{t("button")}</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
