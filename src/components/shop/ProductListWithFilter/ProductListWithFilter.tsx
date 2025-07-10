import React from "react";

type ProductListWithFilterProps = {
  children: React.ReactNode;
  className?: string;
};

const ProductListWithFilter = ({
  children,
  className,
}: ProductListWithFilterProps) => {
  return <section className={`${className}`}>{children}</section>;
};

export default ProductListWithFilter;
