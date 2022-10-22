import Link from "next/link";
import { useRouter } from "next/router";
import client from "../../client";
import Card from "../../src/components/common/Blog/Card";
import MainLayout from "../../src/Layout";
import GlobalLayout from "../../src/Layout/GlobalLayout";

const Blogs = ({ allBlogs = [] }) => {

  if( !(allBlogs.length)){
    return <MainLayout>
      <div className="flex flex-col">
      <h1 className="text-center text-4xl">Blogs</h1>
       <div>No hay blogs. </div>

      </div>
      
    </MainLayout>
  }
  return (
    <GlobalLayout>
    <MainLayout>
      <h1 className="text-center text-4xl">Blogs</h1>
      <section className="flex flex-wrap">
      <div className="flex my-4">
        {allBlogs.map(({ _id, slug, ...props }) => (
          <Link href={`blogs/${slug}`} key={_id}>
            <a>
              <Card {...props} />
            </a>
          </Link>
        ))}
      </div>
      </section>
    </MainLayout>
    </GlobalLayout>
  );
};

export default Blogs;

const queryBlog = `*[_type == 'post'] | order(publishedAt){
  _id,
  title,
  'slug': slug.current,
  'authorImg': author->image.asset->url ,
  'authorName': author->name,
  categories,
  'information': sumary,
  'date' : publishedAt,
  'imagePost': mainImage.asset->url
  }`;

export async function getStaticProps() {
  const allBlogs = await client.fetch(queryBlog);
  return {
    props: { allBlogs },
  };
}
