import Nav from "@/components/Nav";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import ThemeProvider from "@/context/ThemeContext";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "Countries API",
  description: "Get data about countries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito_sans.variable}`}>
      <body>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
