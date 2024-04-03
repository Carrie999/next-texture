import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "在线纹理制作棋盘波点格子方格子Online Creating texture | chessboard| wave point|square grid",
  description: "纹理制作，棋盘，波点纹理,格子纹理，方格子，布料纹理，在线调色纹理, texture production, chessboard, polka dot texture, grid texture, square grid, fabric texture, online color matching texture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
