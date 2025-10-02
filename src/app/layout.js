// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import FooterWrapper from "./components/FooterWrapper";
import SmoothWrapper from "./components/home/SmoothWrapper";

export const metadata = {
  title: "RCDP - Regionalni Centar Za Dinamičnu Psihijatriju",
  description: "Regionalni Centar Za Dinamičnu Psihijatriju",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RCDP - Regionalni Centar Za Dinamičnu Psihijatriju",
    description: "Regionalni Centar Za Dinamičnu Psihijatriju",
    url: "https://toma-rcdp.vercel.app",
    siteName: "RCDP",
    images: [
      {
        url: "https://toma-rcdp.vercel.app/featured.png",
        width: 1200,
        height: 630,
        alt: "RCDP SEO Thumbnail",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCDP - Regionalni Centar Za Dinamičnu Psihijatriju",
    description: "Regionalni Centar Za Dinamičnu Psihijatriju",
    images: ["https://toma-rcdp.vercel.app/featured.png"],
  },
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
