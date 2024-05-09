import { getPostData } from '@/lib/posts';
import Head from 'next/head';
import Link from 'next/link';

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
    <div className="container">
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="page-title">This is my blog</h1>
      {allPostsData.map(({ slug, metadata }) => (
        <div key={slug}>
          <Link className="link-text" href={`/posts/${slug}`}>
              <h2>{metadata.title}</h2>
          </Link>
          <p>{metadata.description}</p>
          <p>{metadata.date}</p>
        </div>
      ))}
    </div>
  );
}
