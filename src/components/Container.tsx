import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      style={{
        padding: "0 90px",
        margin: "0 auto",
        maxWidth: "1440px",
      }}
    >
      {children}
    </div>
  );
};
