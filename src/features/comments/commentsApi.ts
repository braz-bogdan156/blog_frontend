import { api } from "../../api/api";
import type { Comment } from "../../interfaces/interfaces";


export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (_r, _e, postId) => [{ type: "Comment", id: postId }],
    }),
    createComment: builder.mutation<Comment, { postId: number; text: string }>({
      query: ({ postId, text }) => ({
        url: `/posts/${postId}/comments`,
        method: "POST",
        body: { text },
      }),
      invalidatesTags: (_r, _e, { postId }) => [{ type: "Comment", id: postId }],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } = commentsApi;