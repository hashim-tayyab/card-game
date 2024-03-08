import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "../components/ThirdwebProvider";
import { Sepolia } from "../components/ThirdwebProvider";
import { GlobalContextProvider } from "./Context/context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Card Game",
};

export default function RootLayout({children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <ThirdwebProvider activeChain={Sepolia}>
        <GlobalContextProvider>
          <body className={inter.className}>{children}</body>
        </GlobalContextProvider>
      </ThirdwebProvider>
    </html>
  );
}
