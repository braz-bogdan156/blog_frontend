import { useParams } from "react-router-dom";
import {
  useGetPostQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
} from "../features/posts/postsApi";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";
import { parseApiError } from "../utils/parseApiError";
import PostContent from "../components/PostContent/PostContent";
import CommentsSection from "../components/CommentsSection/CommentsSection";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { data: post, isLoading: loadingPost } = useGetPostQuery(postId);
  const {
    data: comments = [],
    isLoading: loadingComments,
    refetch,
  } = useGetCommentsQuery(postId);
  const [addComment, { isLoading: adding }] = useAddCommentMutation();

  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) return;
    try {
      await addComment({ postId, text }).unwrap();
      setText("");
      refetch();
      toast.success("Comment added!");
    } catch (err: unknown) {
      toast.error(parseApiError(err));
    }
  };

  if (loadingPost)
    return (
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner size={32} />
      </div>
    );

  if (!post)
    return <p className="text-red-500 text-center mt-6">Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <PostContent title={post.title} content={post.content} />
      <CommentsSection
        comments={comments}
        loading={loadingComments}
        text={text}
        onTextChange={setText}
        onSubmit={handleSubmit}
        isSubmitting={adding}
      />
    </div>
  );
}