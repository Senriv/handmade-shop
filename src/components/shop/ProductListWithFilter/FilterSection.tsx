import React from "react";

type FilterSectionProps = {
  className?: string;
};
const FilterSection = ({ className }: FilterSectionProps) => {
  return (
    <section className={`${className}`}>
      <h1>Фильтра!!!!!</h1>
    </section>
  );
};

export default FilterSection;
