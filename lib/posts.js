import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'contents');

export function getPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);
    return {
      slug,
      content,
      metadata: data
    };
  });
  return allPostsData;
}
export function getAllCategories() {
  const allPostsData = getPostData()
  const categories = allPostsData.map(post => post.metadata.category);
  return [...new Set(categories)];
}
export function getPostsByCategory(category) {
  const allPostsData = getPostData();
  return allPostsData.filter(post => post.metadata.category === category);
}
export function getSortedPost() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);
    return {
      slug,
      content,
      metadata: data
    };
  });
  return allPostsData.sort((a, b) =>{
    if(a.metadata.date < b.metadata.date){
      return 1;
    } else{
      return -1;
    }
  })
}
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    };
  });
}
export async function getPostDataBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);
  return {
    slug,
    content: mdxSource,
    metadata: data
  };
}
