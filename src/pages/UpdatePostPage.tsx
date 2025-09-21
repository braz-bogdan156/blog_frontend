import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPostQuery, useUpdatePostMutation } from "../features/posts/postsApi";
import toast from "react-hot-toast";
import { parseApiError } from "../utils/parseApiError";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFoundMessage from "../components/NotFoundMessage/NotFoundMessage";
import PostForm, {type PostFormData}  from "../components/UpdatePostForm/PostForm";

export default function UpdatePostPage() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const { data: post, isLoading } = useGetPostQuery(postId);
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<PostFormData | null>(null);

  useEffect(() => {
    if (post) {
      setInitialValues({ title: post.title, content: post.content });
    }
  }, [post]);

  const handleSubmit = async (data: PostFormData) => {
    try {
      await updatePost({ id: postId, data }).unwrap();
      toast.success("Post updated!");
      navigate("/");
    } catch (err) {
      toast.error(parseApiError(err));
    }
  };

  if (isLoading) return 
  <div className="flex justify-center items-center h-full">
  <LoadingSpinner/>;
  </div>
  if (!post || !initialValues) return <NotFoundMessage />;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Edit Post</h1>
      <PostForm
        defaultValues={initialValues}
        onSubmit={handleSubmit}
        isSubmitting={isUpdating}
      />
    </div>
  );
}