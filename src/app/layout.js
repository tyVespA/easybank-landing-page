import "./globals.css";
import { Public_Sans } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--public-sans",
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
