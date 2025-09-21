import { Link } from "react-router-dom";
import type { PostItemProps } from "../../interfaces/interfaces";

export default function PostItem({ post, onDelete, deleting }: PostItemProps) {
  return (
    <li className="p-4 border rounded flex justify-between items-center">
      <div>
        <Link
          to={`/posts/${post.id}`}
          className="text-lg font-semibold hover:underline"
        >
          {post.title}
        </Link>
        <p className="text-sm text-gray-600">{post.content}</p>
      </div>
      <div className="space-x-2">
        <Link
          to={`/posts/${post.id}/edit`}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          disabled={deleting}
          className={`px-2 py-1 rounded text-white ${
            deleting ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {deleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </li>
  );
}