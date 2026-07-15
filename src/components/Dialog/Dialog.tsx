import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Dialog.module.css";

export interface DialogProps extends SharedVisualProps {
  open?: boolean;
  title?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Dialog({
  open,
  title,
  children,
  actions,
  icon,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: DialogProps) {
  const resolvedIcon = icon ?? <Sparkles size={16} aria-hidden="true" />;

  return (
    <dialog open={open} className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      <div className={styles.surface}>
        {title ? (
          <div className={styles.row}>
            <span aria-hidden="true">{resolvedIcon}</span>
            <h3>{title}</h3>
          </div>
        ) : null}
        {children}
        {actions ? <div className={styles.row}>{actions}</div> : null}
      </div>
    </dialog>
  );
}
