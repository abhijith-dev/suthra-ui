import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Spinner.module.css";

export interface SpinnerProps extends SharedVisualProps {
  className?: string;
}

export function Spinner({ className, variant = "normal", size = "md", state = "default" }: SpinnerProps) {
  return (
    <span className={cn(styles.root, styles.inline, className)} {...visualDataAttrs({ variant, size, state })}>
      <span className={cn(styles.surface, styles.animatePulse, styles.iconOnly)} aria-hidden="true">
        •
      </span>
    </span>
  );
}
