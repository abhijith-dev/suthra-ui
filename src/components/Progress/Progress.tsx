import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Progress.module.css";

export interface ProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
    SharedVisualProps {
  value?: number;
  max?: number;
}

export function Progress({
  value = 0,
  max = 100,
  className,
  variant = "normal",
  size = "md",
  state = "default",
  ...props
}: ProgressProps) {
  const safeValue = Math.max(0, Math.min(value, max));
  const width = `${(safeValue / max) * 100}%`;

  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })} {...props}>
      <div className={styles.surface}>
        <div style={{ width, height: 6, borderRadius: 9999, background: "currentColor", opacity: 0.5 }} />
      </div>
    </div>
  );
}
