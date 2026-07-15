export type Variant = "normal" | "glass" | "dark";
export type Size = "sm" | "md" | "lg";
export type State = "default" | "error" | "success";
export type Radius = "sm" | "md" | "lg" | "pill";

export interface SharedVisualProps {
  variant?: Variant;
  size?: Size;
  state?: State;
  radius?: Radius;
  fullWidth?: boolean;
  elevated?: boolean;
  animated?: boolean;
  className?: string;
}
