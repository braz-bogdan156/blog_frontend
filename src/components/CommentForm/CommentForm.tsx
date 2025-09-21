import type { CommentFormProps } from "../../interfaces/interfaces";
import styles from "./CommentForm.module.css";

export default function CommentForm({
  text,
  onChange,
  onSubmit,
  isSubmitting,
}: CommentFormProps) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a comment..."
        className={styles.input}
      />
      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className={styles.button}
      >
        {isSubmitting ? "Adding..." : "Add"}
      </button>
    </div>
  );
}