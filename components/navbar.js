import Link from "next/link"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Navbar(){
  return(
    <navbar className={`${inter.className} navbar`}>
      <Link className="nav-link" href="/">Home</Link>
      <Link className="nav-link" href="/about">About</Link>
      <Link className="nav-link" href="/contact">Contact</Link>
      <Link className="nav-link" href="/posts">Blog</Link>
    </navbar>
  )
}