import { cn } from "../../lib/cn";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Pagination.module.css";

export interface PaginationProps extends SharedVisualProps {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  return (
    <div className={cn(styles.root, styles.row, className)}>
      <button
        type="button"
        className={cn(styles.surface, styles.clickable)}
        disabled={page <= 1}
        onClick={() => onPageChange?.(page - 1)}
      >
        Previous
      </button>
      <span className={styles.hint}>
        {page} / {totalPages}
      </span>
      <button
        type="button"
        className={cn(styles.surface, styles.clickable)}
        disabled={page >= totalPages}
        onClick={() => onPageChange?.(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
