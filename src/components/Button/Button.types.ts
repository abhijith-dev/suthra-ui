import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "./Button.variants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  radius?: "sm" | "md" | "lg" | "pill";
  fullWidth?: boolean;
  elevated?: boolean;
  animated?: boolean;
}
