import { Container } from "@/components/Container";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderMain />
      <main>
        <Container>{children}</Container>
      </main>
      <FooterMain />
    </>
  );
}
