import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
    </div>
  );
}
