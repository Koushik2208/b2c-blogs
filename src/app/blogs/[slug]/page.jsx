import fetchWrapper from "@/app/lib/fetchWrapper";
import HtmlParser from "@/app/components/HtmlParser/HtmlParser";
import styles from "./index.module.css";
import Image from "next/image";

export async function generateMetadata({ params }, parent) {
  const { slug } = await params;

  // fetch data
  const blog = await fetchWrapper(`catlog/seo-url/${slug}/`);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.product_data.title,
    openGraph: {
      images: [blog.product_data?.image?.image, ...previousImages],
    },
  };
}

const BlogDetail = async ({ params }) => {
  const { slug } = await params;
  try {
    const blog = await fetchWrapper(`catlog/seo-url/${slug}/`);

    if (!blog || !blog.product_data) {
      return <div>Blog not found</div>; // Handle empty or invalid response
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{blog.product_data.title}</h1>
        <Image
          src={blog.product_data?.image?.image}
          alt="Blog post image"
          className={styles.cardImage}
          width={500}
          height={200}
        />
        <div className={styles.content}>
          <HtmlParser data={blog.product_data.content} />
        </div>
        {/* <p dangerouslySetInnerHTML={{__html: blog.product_data.content}} />  */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <div>Failed to load blog details</div>; // Graceful error handling
  }
};

export default BlogDetail;
