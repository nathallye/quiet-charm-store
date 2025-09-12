export interface ProductDTO {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  collection: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
}
