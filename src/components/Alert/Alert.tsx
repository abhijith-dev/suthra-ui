import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Alert.module.css";

export interface AlertProps extends SharedVisualProps {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Alert({
  title,
  description,
  icon,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: AlertProps) {
  const resolvedIcon =
    icon ??
    (state === "success" ? <CheckCircle2 size={16} aria-hidden="true" /> : null) ??
    (state === "error" ? <AlertCircle size={16} aria-hidden="true" /> : <Info size={16} aria-hidden="true" />);

  return (
    <div role="alert" className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      <div className={cn(styles.surface, styles.row)}>
        <span aria-hidden="true">{resolvedIcon}</span>
        <div>
          {title ? <strong>{title}</strong> : null}
          {description ? <p className={styles.hint}>{description}</p> : null}
        </div>
      </div>
    </div>
  );
}
