import { Link } from "react-router-dom";
import type { PostItemProps } from "../../interfaces/interfaces";

export default function PostItem({ post, onDelete, deleting }: PostItemProps) {
  return (
    <li className="p-4 border rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
      {/* Контейнер з текстом */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/posts/${post.id}`}
          className="text-lg font-semibold hover:underline break-words"
        >
          {post.title}
        </Link>
        <p className="text-sm text-gray-600 break-words">{post.content}</p>
      </div>

      {/* Кнопки */}
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <Link
          to={`/posts/${post.id}/edit`}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-center"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          disabled={deleting}
          className={`px-2 py-1 rounded text-white text-center ${
            deleting
              ? "bg-red-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {deleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </li>
  );
}
