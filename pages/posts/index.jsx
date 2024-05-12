import { getPostData } from '@/lib/posts';
import Head from 'next/head';
import PostsCard from '@/components/PostsCard';

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
        <title>Projects</title>
      </Head>
      <p className='text-3xl font-bold py-8'>Check All My Projects Here</p>
      <PostsCard postData={allPostsData} />
    </div>
  );
}
