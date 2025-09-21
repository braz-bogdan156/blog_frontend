import PostItem from "./../PostItem/PostItem";
import type { PostListProps } from "../../interfaces/interfaces";
import styles from "./PostsList.module.css";

export default function PostsList({ posts, deletingId, onDelete }: PostListProps) {
  if (posts.length === 0) {
    return <p className={styles.empty}>No posts found</p>;
  }

  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={onDelete}
          deleting={deletingId === post.id}
        />
      ))}
    </ul>
  );
}