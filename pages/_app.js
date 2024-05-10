import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  return(
    <main className={`${poppins.className} px-6 py-4`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  ) 
}
