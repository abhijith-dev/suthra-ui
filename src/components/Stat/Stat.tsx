import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Stat.module.css";

export interface StatProps extends SharedVisualProps {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  className?: string;
}

export function Stat({
  label,
  value,
  trend,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: StatProps) {
  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      <div className={styles.surface}>
        <p className={styles.hint}>{label}</p>
        <p>{value}</p>
        {trend ? <p className={styles.hint}>{trend}</p> : null}
      </div>
    </div>
  );
}
