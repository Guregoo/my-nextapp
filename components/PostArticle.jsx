import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";

export default function PostArticle({postData}) {
  return(
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
  )
}