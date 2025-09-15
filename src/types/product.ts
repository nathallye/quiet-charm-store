import z from "zod";

import { insertProductSchema } from "@/lib/validator";

export type ProductType = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
