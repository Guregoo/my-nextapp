import PostArticle from '@/components/PostArticle';
import { getAllPostSlugs, getPostDataBySlug } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <div>
      <PostArticle postData={postData}/>
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
