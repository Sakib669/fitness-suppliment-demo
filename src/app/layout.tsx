import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "POWERGEN STORE — Pure Performance & Bioavailable Nutrition",
  description:
    "Science-backed sports supplements, cross-flow whey isolates, mass gainers, and micronutrient bio-complexes engineered for peak human performance.",
  keywords: [
    "protein",
    "whey isolate",
    "fitness supplements",
    "mass gainer",
    "creatine",
    "powergen store",
    "sports nutrition",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden selection:bg-forest-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
