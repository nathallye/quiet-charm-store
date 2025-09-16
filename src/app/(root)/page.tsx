import { getLatestProducts } from "@/lib/actions/product.actions";
import { Home } from "@/components/pages";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return <Home products={latestProducts} />;
};

export default HomePage;
