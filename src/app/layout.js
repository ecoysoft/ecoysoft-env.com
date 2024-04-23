import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/widgets/layout/navbar";
import Footer from "@/shared/widgets/layout/footer";

const ttl_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
export const metadata = {
  title: "ecoysoft environment",
  description: "The next level brand creator!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ttl_web.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
