import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shadi Emtanis",
  description: "Real-estate Agent - Haifa",
};

export default function RootLayout({ children }) {
  return (
     <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
