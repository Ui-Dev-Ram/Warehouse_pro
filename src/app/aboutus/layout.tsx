import HeaderTop from "@/components/home/header/HeaderTop";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="">
          {children}
        </body>
      </html>
    );
  }