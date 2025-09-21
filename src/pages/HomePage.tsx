import { useState } from "react";
import { useGetPostsQuery } from "../features/posts/postsApi";
import LoadingSpinner from "../components/LoadingSpinner";

import Pagination from "../components/Pagination/Pagination";
import SearchSortBar from "../components/SearchSortBar/SearchSortBar";
import PostsList from "../components/PostsList/PostsList";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import { useFilteredSortedPosts } from "../hooks/useFilteredSortedPosts";
import { useDeletePostHandler } from "../hooks/useDeletePostHandler";

const PAGE_SIZE = 5;

export default function HomePage() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();
  const { deletingId, handleDelete } = useDeletePostHandler();
 
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedPosts = useFilteredSortedPosts(posts, search, sortOrder);
  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const paginatedPosts = sortedPosts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner size={32} />
      </div>
    );

  if (isError) return <p className="text-red-500">Error loading posts</p>;

  return (
    <div className="p-4">
      <HomePageHeader />
      <SearchSortBar search={search} sortOrder={sortOrder}onSearchChange={(val) => {
          setSearch(val);
          setPage(1);
        }}
        onSortChange={setSortOrder}
      />
    <PostsList posts={paginatedPosts} deletingId={deletingId} onDelete={handleDelete} />
    <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
