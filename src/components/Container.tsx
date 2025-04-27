import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1440px] mx-auto px-[90px]">{children}</div>;
};
