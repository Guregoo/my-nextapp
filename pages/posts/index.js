import { getPostData } from '@/lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Date from '@/components/date';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className=''>My Posts</h1>
      <div className='border flex flex-wrap gap-12 justify-center'>
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
  );
}
