import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import ThemeProvider from "./themes/theme-provider";
import { Inter, Roboto } from "next/font/google";
import { pageBg } from "../../utils/styles";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Aman",
  description: "This is the description for my site",
};




//my old CV site : https://i-amansharma07.github.io/CV/


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pageBg} antialiased ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="relative top-0 z-20 md:sticky">
            <NavBar />
          </header>
          <div className="max-w-[900px] mx-auto px-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
