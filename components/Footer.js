import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear()
  return(
    <div className="p-10 flex select-none flex-col overflow-hidden gap-2 justify-center items-center text-teal-50 bg-slate-600 bg-lg:text-left">
      <div>
      &copy;Copyright {year} Gregorious Jovi
      </div>
      <div>
        Check My Social Media.
      </div>
      <div className="item-center justify-center">
        <div className="flex flex-auto justify-center items-center gap-3">
        <Link target="_blank" href="https://github.com/Guregoo">
          <FaGithub size={25} className="size-6 hover:size-7 duration-300"/>
        </Link>
        <Link target="_blank" href="https://www.facebook.com/gregorious.jovi">
          <FaFacebook size={25} className="size-6 hover:size-7 duration-300"/>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/greg_jovi">
          <FaInstagram size={25} className="size-6 hover:size-7 duration-300"/>
        </Link>
        <Link target="_blank" href="https://www.youtube.com/@guregooo">
          <FaYoutube size={25} className="size-6 hover:size-7 duration-100"/>
        </Link>
        </div>
      </div>
    </div>
  )
}