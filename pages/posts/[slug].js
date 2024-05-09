import Link from 'next/link';
import { getAllPostSlugs, getPostDataBySlug } from '../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Head from 'next/head';

const components = {
  Image
}

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>{postData.metadata.title}</title>
      </Head>
      <article className="">
        <MDXRemote {...postData.content} />
      </article>
      <br />
      <Link className="link-text" href="/posts">Back &laquo;</Link>
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
