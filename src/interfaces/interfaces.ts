
import type { CreateFormData } from "../components/CreatePostForm/CreatePostForm";
import type { PostFormData } from "../components/UpdatePostForm/PostForm";

type ID = number;
type ISODate = string;

export interface BaseEntity {
  id: ID;
  createdAt?: ISODate;
  updatedAt?: ISODate;
}

export interface Post extends BaseEntity {
  title: string;
  content: string;
  comments?: Comment[];
}

export interface Comment extends BaseEntity {
  postId: ID;
  text: string;
}

export interface ApiError {
  data?: { message?: string } | string;
  status?: number;
  error?: string;
}
export interface ValidationError { message: string; path?: string }
export type CustomErrorData = { message?: string | ValidationError[] };

export type PostSummary = Pick<Post, "id" | "title" | "content">;
export type CommentSummary = Pick<Comment, "id" | "text">;


export type FormProps<T> = {
  defaultValues?: T;
  onSubmit: (data: T) => void;
  isSubmitting?: boolean;
};
export type PostFormProps = FormProps<PostFormData>;

export type WithError = { error?: string | null };
export type WithText = { text: string; onChange: (v: string) => void };

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type SearchSortBarProps = {
  search: string;
  sortOrder: "asc" | "desc";
  onSearchChange: (value: string) => void;
  onSortChange: (value: "asc" | "desc") => void;
};

export type PostItemProps = {
  post: PostSummary;
  onDelete: (id: ID) => void;
  deleting?: boolean;
};

export type PostListProps = {
  posts: PostSummary[];
  deletingId?: ID | null;
  onDelete: (id: ID) => void;
};

export type CreatePostFormProps = FormProps<CreateFormData>;
export type UpdatePostFormProps = FormProps<PostFormData>;

export interface BaseCommentFormProps {
  text: string;
  onSubmit: () => void;
  isSubmitting: boolean;
}
export interface CommentFormProps extends BaseCommentFormProps {
  onChange: (value: string) => void;
}
export interface CommentsSectionProps extends BaseCommentFormProps {
  comments: { id: number; text: string }[];
  loading: boolean;
  onTextChange: (value: string) => void;
}
export type PostContentProps = Pick<Post, "title" | "content">
export type CommentItemProps = Pick<Comment, "text">;

export interface BaseFieldProps {
  error?: string;
  children: React.ReactNode;
}

export interface FormFieldProps extends BaseFieldProps {
  label: string;
}
export type CreateFormFieldProps = BaseFieldProps;



