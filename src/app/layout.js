// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import FooterWrapper from "./components/FooterWrapper";
import SmoothWrapper from "./components/home/SmoothWrapper";

export const metadata = {
  title: "RCDP - Regionalni Centar Za Dinamičnu Psihijatriju",
  description: "Regionalni Centar Za Dinamičnu Psihijatriju",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />
        <SmoothWrapper>
          {children}
          <FooterWrapper />
        </SmoothWrapper>
      </body>
    </html>
  );
}
