import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/provider/LanguageProvider";
import { ThemeProvider } from "next-themes";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"], // پشتیبانی از زبان فارسی/عربی و انگلیسی
  weight: ["300", "400", "500", "700"], // وزن‌های مورد نیاز
  variable: "--font-tajawal", // متغیر CSS برای استفاده در Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="ltr">
      <body className={`${tajawal.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
