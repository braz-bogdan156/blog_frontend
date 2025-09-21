import type { SearchSortBarProps } from "../../interfaces/interfaces";
import styles from "./SearchSortBar.module.css";

export default function SearchSortBar({
  search,
  sortOrder,
  onSearchChange,
  onSortChange,
}: SearchSortBarProps) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.input}
      />
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        className={styles.select}
      >
        <option value="asc">Sort A → Z</option>
        <option value="desc">Sort Z → A</option>
      </select>
    </div>
  );
}