import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import client from "../../../../client";
import Card from "../../common/Blog/Card";
import Button from "../../common/Buttons";
import style from './style.module.css'
const HomeBlogs = () => {
  const [blogData, setblogData] = useState([]);

  useEffect(() => {
    async function getBlogData() {
      const data = await client.fetch(`*[_type == 'post'] | order(publishedAt){
        _id,
        title,
        'slug': slug.current,
        'authorImg': author->image.asset->url ,
        'authorName': author->name,
        categories,
        'information': sumary,
        'date' : publishedAt,
        'imagePost': mainImage.asset->url
        }[0...3]`);
      setblogData(data);
    }
    getBlogData();
  }, []);

  if (!blogData?.length) {
    return;
  }

  return (
    <section className="md-border relative rounded-lg">
      <div className="flex justify-center h-[70px] items-baseline">
      <h1 className="text-center text-4xl self-center ">Blogs</h1>
      <div className="absolute right-px z-10">
      <Image src="/icon-written.svg" width={150} height={150}  alt="" />
      </div>
      </div>
    <div
      className="flex flex-col justify-center my-4 items-center border-t"
      id="homeBlog"
    >
      
      <div className="flex flex-wrap justify-center md-justify-start  my-4 w-full">
        {blogData.map(({ _id, slug, ...props }) => (
          <Link href={`blogs/${slug}`} key={_id}>
            <a className={`${style['container-card']} mx-3 my-2 border rounded-xl`}>
              <Card {...props} />
            </a>
          </Link>
        ))}
      </div>

      <Button text="Leer más" className="text-blue-500 hover:underline" link="/blogs"/>
    </div>
    </section>
  );
};

export default HomeBlogs;
