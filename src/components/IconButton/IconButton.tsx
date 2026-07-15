import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import { Spinner } from "../Spinner";
import styles from "./IconButton.module.css";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    SharedVisualProps {
  icon: ReactNode;
  label: string;
  isLoading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      label,
      isLoading = false,
      variant = "normal",
      size = "md",
      state = "default",
      className,
      disabled,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={cn(styles.root, styles.inline, className)}
      aria-label={label}
      disabled={disabled || isLoading}
      {...visualDataAttrs({ variant, size, state })}
      {...props}
    >
      <span className={cn(styles.surface, styles.iconOnly, styles.clickable)}>
        {isLoading ? <Spinner size={size} variant={variant} /> : icon}
      </span>
    </button>
  )
);

IconButton.displayName = "IconButton";
