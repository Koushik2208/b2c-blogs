import styles from "./read-more.module.css";

const ReadMore = ({ name }) => {
  return (
    <button className={styles.cta}>
      <span>{name}</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
};

export default ReadMore;
