import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import ThemeProvider from "./themes/theme-provider";
import { Inter, Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Aman",
  description: "This is the description for my site",
};

//antialiased
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[#fcfcfc] dark:bg-[#191919] antialiased ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="relative top-0 z-20 md:sticky">
            <NavBar />
            <div className="max-w-[900px] mx-auto px-4">{children}</div>
          </header>
        </ThemeProvider>
      </body>
    </html>
  );
}
