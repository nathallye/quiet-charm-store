import React from "react";
import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number;
  className?: string;
}

export const ProductPrice = ({ value, className }: ProductPriceProps) => {
  // Ensures two decimal places
  const stringValue = value.toFixed(2);
  // Split into integer and decimal parts
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};
