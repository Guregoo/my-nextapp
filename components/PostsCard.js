import Image from "next/image";
import Link from "next/link";
import Date from "./Date";

export default function PostsCard({postData, title}) {
  return(
    <div className='border flex flex-wrap gap-10'>
      <h2>{title}</h2>
      {postData.map(({ slug, metadata }) => (
        <div key={slug} className='my-5 w-80 h-auto rounded overflow-hidden shadow-lg hover:shadow-xl hover:shadow-gray-300 duration-300'>
          <Link className='' href={`/posts/${slug}`}>
          <Image className="w-full h-auto object-cover shadow-black shadow-md rounded-sm" src={metadata.thumbnail} alt='laptop' width={100} height={100} />
          <div className='p-5'>  
            <h2>{metadata.title}</h2>
            {metadata.description}
            <br />
            <Date dateString={metadata.date}/>
          </div>
          </Link>
          <div className='p-5 pt-2'>
          <Link className='bg-gray-300 p-2 rounded-md font-medium' href={`/posts/category/${metadata.category}`}>
            #{metadata.category}
          </Link>
        </div>
        </div>
      ))}
    </div>
  )
};
