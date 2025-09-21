import { api } from "../../api/api";
import type { Comment, Post } from "../../interfaces/interfaces";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map((p) => ({ type: "Post" as const, id: p.id })),
              { type: "Post" as const, id: "LIST" },
            ]
          : [{ type: "Post" as const, id: "LIST" }],
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Post" as const, id }],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({ url: "/posts", method: "POST", body }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    updatePost: builder.mutation<Post, { id: number; data: Partial<Post> }>({
      query: ({ id, data }) => ({ url: `/posts/${id}`, method: "PUT", body: data }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Post", id }],
    }),
    deletePost: builder.mutation<{ message?: string }, number>({
      query: (id) => ({ url: `/posts/${id}`, method: "DELETE" }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    getComments: builder.query<Comment[], number>({
      query: (postId) => `/comments/post/${postId}`,
      providesTags: (_result, _error, postId) => [{ type: "Comment" as const, id: postId }],
    }),
    addComment: builder.mutation<Comment, { postId: number; text: string }>({
  query: ({ postId, text }) => ({
    url: `/comments`,
    method: "POST",
    body: { postId, text },
  }),
  invalidatesTags: (_res, _err, { postId }) => [
    { type: "Comment", id: postId },
    { type: "Post", id: postId },
  ],
}),
  }),
  overrideExisting: false,
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetCommentsQuery,
  useAddCommentMutation,
} = postsApi;