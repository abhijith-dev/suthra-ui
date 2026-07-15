import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Tooltip.module.css";

export interface TooltipProps extends SharedVisualProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  return (
    <span className={cn(styles.root, styles.inline, className)} title={String(content)}>
      {children}
    </span>
  );
}
