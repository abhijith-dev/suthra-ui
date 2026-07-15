import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./SplitButton.module.css";

export interface SplitButtonProps extends SharedVisualProps {
  label: ReactNode;
  menuLabel?: ReactNode;
  onAction?: () => void;
  onToggle?: () => void;
  disabled?: boolean;
  className?: string;
}

export function SplitButton({
  label,
  menuLabel = "▾",
  onAction,
  onToggle,
  disabled,
  variant = "normal",
  size = "md",
  state = "default",
  className
}: SplitButtonProps) {
  return (
    <div className={cn(styles.root, styles.row, className)} {...visualDataAttrs({ variant, size, state })}>
      <button
        type="button"
        className={cn(styles.surface, styles.clickable)}
        onClick={onAction}
        disabled={disabled}
      >
        {label}
      </button>
      <button
        type="button"
        className={cn(styles.surface, styles.clickable)}
        aria-label="Toggle menu"
        onClick={onToggle}
        disabled={disabled}
      >
        {menuLabel}
      </button>
    </div>
  );
}
