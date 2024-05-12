import { useRouter } from 'next/router';
import { getPostsByCategory, getAllCategories } from '@/lib/posts';
import PostsCard from '@/components/PostsCard';

export default function Category({ posts }) {
  const router = useRouter();
  const { category } = router.query;

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Category : {category}</h1>
      <PostsCard postData={posts} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const posts = getPostsByCategory(category);
  return {
    props: {
      posts
    }
  };
}

export async function getStaticPaths() {
  const categories = getAllCategories(); // Mendapatkan semua kategori
  const paths = categories.map(category => ({
    params: { category }
  }));

  return {
    paths,
    fallback: false
  };
}
