import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "../FormField/FormField";
import type { PostFormProps } from "../../interfaces/interfaces";
import styles from "./PostForm.module.css";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(1, "Content is required"),
});

export type PostFormData = z.infer<typeof postSchema>;

export default function PostForm({ defaultValues, onSubmit, isSubmitting }: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormField label="Title" error={errors.title?.message}>
        <input
          type="text"
          {...register("title")}
          className={styles.input}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="Content" error={errors.content?.message}>
        <textarea
          {...register("content")}
          className={styles.textarea}
          disabled={isSubmitting}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.button}
      >
        {isSubmitting ? "Saving..." : "Update"}
      </button>
    </form>
  );
}