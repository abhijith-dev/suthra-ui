import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Badge.module.css";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, SharedVisualProps {}

export function Badge({
  children,
  className,
  variant = "normal",
  size = "sm",
  state = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(styles.root, styles.inline, className)}
      {...visualDataAttrs({ variant, size, state })}
      {...props}
    >
      <span className={cn(styles.surface, styles.pill)}>{children}</span>
    </span>
  );
}
