import { notFound } from "next/navigation";

import { getProductBySlug } from "@/lib/actions/product.actions";
import { ProductDetails } from "@/components/pages";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
