import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductDTO } from "@/dto";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ProductPrice } from "./product-price";

interface ProductCardProps {
  product: ProductDTO;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations("pages.home_page");

  return (
    <Card>
      <CardHeader className="p-0">
        <Link href={`/product/${product.slug}`}>
          <Image
            priority={true}
            src={product.images![0]}
            alt={product.name}
            className="aspect-square object-cover rounded"
            height={300}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.collection}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} stars</p>
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
