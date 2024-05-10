import Link from 'next/link';
import { getAllPostSlugs, getPostDataBySlug } from '../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>{postData.metadata.title}</title>
      </Head>
      <article>
        <MDXRemote {...postData.content} />
      </article>
      <br />
      <Link className="text-md underline hover:text-blue-300" href="/posts">Back &laquo;</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostDataBySlug(params.slug);
  return {
    props: {
      postData
    }
  };
}
