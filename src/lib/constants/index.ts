export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "QC store";

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Quiet Charm is a women's vintage clothing store that celebrates timeless elegance and modest style.";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
