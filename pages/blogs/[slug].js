import SanityBlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import client from "../../client";
import Author from "../../src/components/common/Blog/Author";
import MainLayout from "../../src/Layout";

const Post = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [currentPost, setCurrentPost] = useState("");
  const URL = `
  *[slug.current == '${slug}']{
    title,
    'slug': slug.current,
    'authorImg': author->image.asset->url ,
    'authorName': author->name,
    categories,
    'information': sumary,
    'date' : publishedAt,
    'imagePost': mainImage.asset->url,
    body
  }
`;

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await client.fetch(URL);
        setCurrentPost(res[0]);
      } catch (err) {
        console.log(err);
        setCurrentPost([]);
      }
    }
    fetchBlog();
  }, [URL]);

  return (
    <MainLayout>
      <main className="">
        {currentPost ? (
          <>
            <div className="w-full ">
              <Image
                src={currentPost?.imagePost}
                layout="responsive"
                width={700}
                height={300}
                className="max-h-[300px]"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="max-w-[300px] text-4xl my-8 mx-auto text-center">
                {currentPost.title}
              </h1>
              <div className="post-details">
                <Author
                  authorImg={currentPost.authorImg}
                  authorName={currentPost.authorName}
                  date={currentPost.date}
                />
              </div>
              <div className="mb-20 break-words leading-4 text-justify px-6">
                <SanityBlockContent
                  blocks={currentPost.body}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}
                />
              </div>
            </div>
          </>
        ) : null}
      </main>
    </MainLayout>
  );
};

export default Post;
