import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body  >
        <Navbar />
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
