import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Divider.module.css";

export interface DividerProps extends HTMLAttributes<HTMLHRElement>, SharedVisualProps {
  orientation?: "horizontal" | "vertical";
}

export function Divider({ orientation = "horizontal", className, ...props }: DividerProps) {
  return orientation === "horizontal" ? (
    <hr className={cn(styles.divider, className)} {...props} />
  ) : (
    <span
      className={cn(className)}
      style={{ width: 1, alignSelf: "stretch", background: "var(--suthra-color-neutral-300, #d1d5db)" }}
      aria-hidden="true"
    />
  );
}
