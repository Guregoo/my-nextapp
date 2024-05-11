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
        <title>Blog</title>
      </Head>
      <h1 className=''>My Posts</h1>
      <PostsCard postData={allPostsData} />
    </div>
  );
}
