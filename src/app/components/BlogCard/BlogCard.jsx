import styles from "./blog-card.module.css";
import Image from "next/image";
import ReadMore from "../ReadMore/ReadMore";

const BlogCard = ({blog}) => {
  return (
    <div className={styles.card}>
      <Image
        src={blog.image?.image}
        alt="Blog post image"
        className={styles.cardImage} 
        width={500}
        height={200}
      />
      <div className={styles.cardContent}> 
        <h2 className={styles.cardTitle}> 
          {blog.title}
        </h2>
        <p className={styles.cardExcerpt} dangerouslySetInnerHTML={{__html: blog.content}} /> 
        {/* <div className={styles.cardAuthor}> 
          <Image
            src="/placeholder.svg?height=30&width=30"
            alt="Author avatar"
            className={styles.authorAvatar} // Changed to camelCase
            width={30}
            height={30}
          />
          <span className={styles.authorName}>
            Jane Doe
          </span>
        </div> */}
        <a href={`/blogs/${blog.title.toLowerCase().split(" ").join("-")}`}> 
          <ReadMore name="Read More" />
        </a>
        
      </div>
    </div>
  );
};

export default BlogCard;
