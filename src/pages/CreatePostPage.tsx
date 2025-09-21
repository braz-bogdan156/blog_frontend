import { useCreatePostMutation } from "../features/posts/postsApi";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import CreatePostForm, { type CreateFormData } from "../components/CreatePostForm/CreatePostForm";
import { parseApiError } from "../utils/parseApiError";

export default function CreatePostPage() {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const navigate = useNavigate();
  
  const onSubmit = async (data: CreateFormData) => {
    try {
      const newPost = await createPost(data).unwrap();
      toast.success("Post created");
      navigate(`/posts/${newPost.id}`);
    } catch (err) {
      toast.error(parseApiError(err));
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Post</h1>

      <CreatePostForm onSubmit={onSubmit} isSubmitting={isLoading} />
    </div>
  );
}