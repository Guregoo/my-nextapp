import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body className="" >
        <header className="sticky top-0">
          <Navbar/>
        </header>
        <main className="">
          <Main/>
        </main>
        <footer className="relative bottom-0">
          <Footer />
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
