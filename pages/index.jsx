import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSortedPost } from "@/lib/posts";
import PostsCard from "@/components/PostsCard";
import ProfileCard from "@/components/ProfileCard";

export async function getStaticProps() {
  const newestPost = getSortedPost();
  return {
    props: {
      newestPost,
    },
  };
}
export default function Home({newestPost}){
  return(
    <div>
      <Head>
        <title>Gurego</title>
      </Head>
      <div className="flex flex-col py-4 gap-8 justify-center items-center h-96">
        <div>
          <div className=' flex flex-col justify-items-center justify-center select-none'>
              <p className="text-5xl uppercase font-extrabold">Selamat Datang</p>
              <p className='text-3xl font-normal pt-5 pb-2'>Website ini saya bangun dengan menggunakan</p>
              <Link target="_blank" href="https://nextjs.org">
                <Image className="w-72 h-auto hover:shadow-2xl duration-300" src="/next.svg" alt="next" width={100} height={100}/>
              </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-2xl py-6">Check My New Project</p>
        <PostsCard postData={newestPost} />
      </div>
    </div>
  )
}
