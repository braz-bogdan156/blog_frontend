import { useMemo } from "react";
import type { Post } from "../interfaces/interfaces";

export function useFilteredSortedPosts(posts: Post[] | undefined, search: string, sortOrder: "asc" | "desc") {
  const filtered = useMemo(() => {
    if (!posts) return [];
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  }, [filtered, sortOrder]);

  return sorted;
}