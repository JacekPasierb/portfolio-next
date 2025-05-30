import type {Metadata} from "next";
import {raleway} from "./ui/fonts";
import Footer from "./components/Footer/Footer";
import ClientLayout from "./components/ClientLayout";
import "./globals.css"

export const metadata: Metadata = {
  title: "Jacek Pasierb - Portfolio",
  description:
    "Oficjalne portfolio przedstawiające moje projekty, umiejętności i doświadczenie zawodowe.",
  keywords: [
    "portfolio",
    "Jacek Pasierb",
    "projekty",
    "umiejętności",
    "frontend",
    "backend",
    "web development",
    "full stack developer",
  ],
  authors: [{name: "Jacek Pasierb", url: "https://jacekpasierb.netlify.app/"}],

  robots: "index, follow",
};

export const generateViewport = () => {
  return {
    width: "device-width",
    initialScale: 1,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        ></link>
      <link rel="preload" as="image" href="/hero.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body className={`${raleway.className} `}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
          defer
        ></script>
      </body>
    </html>
  );
}
