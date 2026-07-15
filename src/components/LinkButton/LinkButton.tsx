import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./LinkButton.module.css";

export interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">,
    SharedVisualProps {
  href: string;
  children: ReactNode;
}

export function LinkButton({
  href,
  children,
  variant = "normal",
  size = "md",
  state = "default",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(styles.root, styles.inline, className)}
      {...visualDataAttrs({ variant, size, state })}
      {...props}
    >
      <span className={cn(styles.surface, styles.clickable)}>{children}</span>
    </a>
  );
}
