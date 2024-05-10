import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
  return(
    <div className="flex flex-auto bg-slate-600 select-none shadow-black shadow-md">
      <div className="flex justify-center items-center px-6 py-3">
      <Link draggable={false} href="/">
      <Image 
        draggable={false}
        alt="logo"
        src="/logo/logo.png"
        width={100}
        height={100}
        className="w-10 h-auto"
        />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5 p-4">
        <Link draggable={false} className="text-slate-50 hover:underline" href="/">Home</Link>
        <Link draggable={false} className="text-slate-50 hover:underline" href="/about">About</Link>
        <Link draggable={false} className="text-slate-50 hover:underline" href="/contact">Contact</Link>
        <Link draggable={false} className="text-slate-50 hover:underline" href="/posts">Blog</Link>
      </div>
    </div>
  )
}