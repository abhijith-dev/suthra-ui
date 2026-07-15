import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Avatar.module.css";

export interface AvatarProps extends SharedVisualProps {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
}

export function Avatar({
  src,
  alt,
  name,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: AvatarProps) {
  const fallback = (name ?? "?").slice(0, 2).toUpperCase();

  return (
    <span className={cn(styles.root, styles.inline, className)} {...visualDataAttrs({ variant, size, state })}>
      <span className={cn(styles.surface, styles.iconOnly, styles.row)}>
        {src ? <img src={src} alt={alt ?? name ?? "Avatar"} width={24} height={24} /> : fallback}
      </span>
    </span>
  );
}
