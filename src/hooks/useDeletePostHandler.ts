import { useState } from "react";
import { useDeletePostMutation } from "../features/posts/postsApi";
import toast from "react-hot-toast";
import { parseApiError } from "../utils/parseApiError";

export function useDeletePostHandler() {
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async (id: number) => {
    try {
      setDeletingId(id);
      await deletePost(id).unwrap();
      toast.success("Post deleted!");
    } catch (err) {
      toast.error(parseApiError(err));
    } finally {
      setDeletingId(null);
    }
  };

  return { deletingId, handleDelete };
}