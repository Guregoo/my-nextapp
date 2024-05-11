import Date from "@/components/Date";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSortedPost } from "@/lib/posts";
import PostsCard from "@/components/PostsCard";

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
      <div className='h-screen flex flex-col justify-items-center justify-center select-none'>
          <p className="text-4xl uppercase font-extrabold">Selamat Datang di Website Saya</p>
          <p className='text-2xl font-light pt-5 pb-2'>Website ini saya bangun dengan menggunakan</p>
            <Link target="_blank" href="https://nextjs.org">
              <Image className="w-72 h-auto" src="/next.svg" alt="next" width={100} height={100}/>
            </Link>
      </div>
      <div className="">
        <PostsCard postData={newestPost} />
      </div>
    </div>
  )
}