
// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webbiify Infotech",
  description: "Transforming ideas into digital excellence through innovative web solutions and cutting-edge technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}