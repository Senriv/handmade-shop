import React from "react";

type FilterProps = {
  className?: string;
};
const Filter = ({ className }: FilterProps) => {
  return (
    <section className={`${className}`}>
      <h1>Фильтра!!!!!</h1>
    </section>
  );
};

export default Filter;
