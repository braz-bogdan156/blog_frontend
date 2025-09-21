import { Link } from "react-router-dom";
import styles from "./HomePageHeader.module.css";

export default function HomePageHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Posts</h1>
      <Link to="/create" className={styles.button}>
        Create Post
      </Link>
    </div>
  );
}