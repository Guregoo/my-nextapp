import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <div className="">
          <navbar className="sticky top-0">
            <Navbar/>
          </navbar>
          <main className="min-h-screen">
            <Main/>
          </main>
          <footer className="p-4  bottom-0 text-slate-50 bg-slate-600">
            <Footer />
          </footer>
          </div>
        <NextScript />
      </body>
    </Html>
  );
}
