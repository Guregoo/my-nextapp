import Date from "@/components/date";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPostData } from "@/lib/posts";

export async function getStaticProps() {
  const allPostsData = getPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}){
  return(
    <div>
      <Head>
        <title>Gurego</title>
      </Head>
      <h1 className=''>Home</h1>
      <div className='pb-10'>
        <p className="text-xl">Selamat Datang di Website Saya</p>
        <br />
        <p className='text-xl py-2'>Website ini saya bangun dengan menggunakan</p>
        <Link href="https://nextjs.org">
          <Image className="w-72 h-auto" src="/next.svg" alt="next" width={100} height={100}/>
        </Link>
      </div>
      <div className="border">
        <h2 className=''>Check My Newest Post</h2>
        <div className='border flex flex-wrap gap-10'>
          {allPostsData.map(({ slug, metadata }) => (
            <div key={slug} className='my-5 w-80 h-auto rounded overflow-hidden border shadow-lg hover:shadow-xl hover:shadow-gray-300 duration-300'>
              <Link className='' href={`/posts/${slug}`}>
              <Image className="w-full h-auto object-cover shadow-black shadow-md rounded-sm" src={metadata.thumbnail} alt='laptop' width={100} height={100} />
              <div className='p-5'>  
                <h2>{metadata.title}</h2>
                {metadata.description}
                <br />
                <Date dateString={metadata.date}/>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}