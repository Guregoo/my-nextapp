import { getPostData } from '@/lib/posts';
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
