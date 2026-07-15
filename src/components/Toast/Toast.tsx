import type { ReactNode } from "react";
import { Bell } from "lucide-react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Toast.module.css";

export interface ToastProps extends SharedVisualProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Toast({
  title,
  description,
  action,
  icon,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: ToastProps) {
  const resolvedIcon = icon ?? <Bell size={16} aria-hidden="true" />;

  return (
    <div role="status" className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      <div className={styles.surface}>
        <div className={styles.row}>
          <span aria-hidden="true">{resolvedIcon}</span>
          <div>
            {title ? <strong>{title}</strong> : null}
            {description ? <p className={styles.hint}>{description}</p> : null}
          </div>
        </div>
        {action ? <div className={styles.row}>{action}</div> : null}
      </div>
    </div>
  );
}
