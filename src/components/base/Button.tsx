"use client";

import { FC, ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  className: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` rounded-md bg-primary500 text-white font-bold uppercase ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
