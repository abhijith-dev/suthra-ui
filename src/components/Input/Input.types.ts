import type { InputHTMLAttributes, ReactNode } from "react";

export type InputVariant = "normal" | "glass" | "modern";
export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "error" | "success";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
  label?: string;
  hint?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isLoading?: boolean;
  className?: string;
}
