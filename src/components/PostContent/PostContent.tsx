import type { PostContentProps } from "../../interfaces/interfaces";
import styles from "./PostContent.module.css";

export default function PostContent({ title, content }: PostContentProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
}