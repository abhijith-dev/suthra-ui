import type { InputHTMLAttributes, ReactNode } from "react";

export type InputVariant = "normal" | "glass" | "dark";
export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "error" | "success";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
  radius?: "sm" | "md" | "lg" | "pill";
  fullWidth?: boolean;
  elevated?: boolean;
  animated?: boolean;
  label?: string;
  hint?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isLoading?: boolean;
  className?: string;
}
