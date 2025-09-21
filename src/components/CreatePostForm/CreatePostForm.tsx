import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CreateFormField from "../CreateFormField/CreateFormField";
import LoadingSpinner from "../LoadingSpinner";
import type { CreatePostFormProps } from "../../interfaces/interfaces";
import styles from "./CreatePostForm.module.css";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(1, "Content is required"),
});
export type CreateFormData = z.infer<typeof postSchema>;

export default function CreatePostForm({ onSubmit, isSubmitting }: CreatePostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(postSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <CreateFormField error={errors.title?.message}>
        <input
          {...register("title")}
          placeholder="Title"
          className={styles.input}
          disabled={isSubmitting}
        />
      </CreateFormField>

      <CreateFormField error={errors.content?.message}>
        <textarea
          {...register("content")}
          placeholder="Content"
          className={styles.textarea}
          disabled={isSubmitting}
        />
      </CreateFormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.button}
      >
        {isSubmitting && <LoadingSpinner size={18} />}
        {isSubmitting ? "Saving..." : "Create"}
      </button>
    </form>
  );
}