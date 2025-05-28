import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[767px] mx-auto px-[18px] sm:px-[33px] sm:max-w-[1439px] md:px-[90px] md:min-w-[1440px]">
      {children}
    </div>
  );
};
