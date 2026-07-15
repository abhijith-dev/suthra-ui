import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Popover.module.css";

export interface PopoverProps extends SharedVisualProps {
  trigger: ReactNode;
  content: ReactNode;
  className?: string;
}

export function Popover({ trigger, content, className, variant = "normal", size = "md", state = "default" }: PopoverProps) {
  return (
    <details className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      <summary className={cn(styles.surface, styles.clickable)}>{trigger}</summary>
      <div className={styles.surface}>{content}</div>
    </details>
  );
}
