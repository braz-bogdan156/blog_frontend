import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import type { CommentsSectionProps } from "../../interfaces/interfaces";
import styles from "./CommentsSection.module.css";

export default function CommentsSection({
  comments,
  loading,
  text,
  onTextChange,
  onSubmit,
  isSubmitting,
}: CommentsSectionProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Comments</h3>

      {loading ? (
        <p className={styles.loading}>Loading comments...</p>
      ) : comments.length > 0 ? (
        <ul className={styles.list}>
          {comments.map((c) => (
            <CommentItem key={c.id} text={c.text} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No comments yet</p>
      )}

      <CommentForm
        text={text}
        onChange={onTextChange}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}