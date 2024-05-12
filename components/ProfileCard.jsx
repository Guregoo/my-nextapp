import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ProfileCard() {
  return(
    <div className="flex justify-center items-center">
      <div className="dark:border-black">
        <div className="">
        <Image className="h-52 w-auto self-center rounded-full border-4 border-gray-300" alt="profile" src="/images/pp.jpg" width={500} height={500}/>
        <div className="py-3 text-center">
          <p className="font-medium text-2xl">Gregorious Jovi</p>
          <p className="font-normal text-xl italic">Keep Curious</p>
        </div>
        </div>
        <p>Check My Sosial Media</p>
        <div className="item-center justify-center">
        <div className="flex flex-auto justify-center items-center gap-3">
        <Link target="_blank" href="https://github.com/Guregoo">
          <FaGithub size={25} className="size-6 "/>
        </Link>
        <Link target="_blank" href="https://www.facebook.com/gregorious.jovi">
          <FaFacebook size={25} className="size-6 "/>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/greg_jovi">
          <FaInstagram size={25} className="size-6 "/>
        </Link>
        <Link target="_blank" href="https://www.youtube.com/@guregooo">
          <FaYoutube size={25} className="size-6 "/>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
};
