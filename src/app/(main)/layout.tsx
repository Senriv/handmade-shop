import { Container } from "@/components/Container";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
    </Container>
  );
}
