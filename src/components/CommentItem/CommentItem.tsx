import type { CommentItemProps } from "../../interfaces/interfaces";
import styles from "./CommentItem.module.css";

export default function CommentItem({ text }: CommentItemProps) {
  return <li className={styles.item}>{text}</li>;
}