import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ProductType } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { ProductPrice } from "./product-price";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations("components.product");

  return (
    <Card>
      <CardHeader className="p-0 items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            priority={true}
            src={product.images![0]}
            alt={product.name}
            className=" object-contain w-full h-full rounded-xl"
            height={150}
            width={150}
          />
        </Link>
      </CardHeader>
      <CardContent className="px-4 grid gap-2">
        <div className="text-xs">{product.collection}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{t("stars_amount", { number: product.rating })}</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">{t("out_of_stock")}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
