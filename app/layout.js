import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "在线纹理制作棋盘波点格子方格子",
  description: "纹理制作，棋盘，波点纹理,格子纹理，方格子，布料纹理，在线调色纹理",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
