import { hashSync } from "bcrypt-ts-edge";

export const sampleData = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Jane",
      email: "jane@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],

  products: [
    {
      name: "Vintage White Button-Up Top",
      slug: "vintage-white-button-up-top",
      category: "Blouses & Tops",
      description:
        "A timeless blouse with puff sleeves and delicate vintage details, perfect for both casual and elegant looks",
      images: [
        "/images/sample-products/p1-1.png",
        "/images/sample-products/p1-2.png",
      ],
      price: 59.99,
      collection: "Seaside Romance Collection",
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Terracotta Linen Midi Dress",
      slug: "terracotta-linen-midi-dress",
      category: "Dresses",
      description:
        "A charming vintage-inspired midi dress with puff sleeves, button details, and a bow-tied waist",
      images: [
        "/images/sample-products/p2-1.png",
        "/images/sample-products/p2-2.png",
      ],
      price: 129.95,
      collection: "Vintage Elegance Collection",
      rating: 4.9,
      numReviews: 3,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.png",
    },
    {
      name: "Yellow Gingham Dress",
      slug: "yellow_gingham_dress",
      category: "Dresses",
      description:
        "A cheerful vintage-inspired midi dress featuring puff sleeves, button details, and a flattering square neckline in a bright yellow gingham pattern",
      images: [
        "/images/sample-products/p3-1.png",
        "/images/sample-products/p3-2.png",
      ],
      price: 79.9,
      collection: "Seaside Romance Collection",
      rating: 4.8,
      numReviews: 11,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Pink Floral Dress",
      slug: "pink_floral_dress",
      category: "Dresses",
      description:
        "A romantic vintage-inspired midi dress with puff sleeves, button-down front, and a delicate tie-front detail in a soft pink floral print.",
      images: [
        "/images/sample-products/p4-1.png",
        "/images/sample-products/p4-2.png",
      ],
      price: 89.9,
      collection: "Vintage Elegance Collection",
      rating: 4.7,
      numReviews: 7,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "High-Waisted A-Line Blue Skirt",
      slug: "high-waisted-a-Line-blue-skirt",
      category: "Skirts",
      description:
        "A flowy, high-waisted A-line skirt that brings movement and sophistication to your outfit",
      images: [
        "/images/sample-products/p1-1.png",
        "/images/sample-products/p1-2.png",
      ],
      price: 85.9,
      collection: "Seaside Romance Collection",
      rating: 4.5,
      numReviews: 8,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
  ],
};
