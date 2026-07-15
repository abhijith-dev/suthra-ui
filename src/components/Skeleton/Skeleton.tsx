import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Skeleton.module.css";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement>, SharedVisualProps {
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
}

export function Skeleton({
  width = "100%",
  height = 16,
  rounded = true,
  className,
  variant = "normal",
  size = "md",
  state = "default",
  ...props
}: SkeletonProps) {
  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })} {...props}>
      <div
        className={cn(styles.surface, styles.animatePulse)}
        style={{ width, height, borderRadius: rounded ? 9999 : undefined }}
      />
    </div>
  );
}
