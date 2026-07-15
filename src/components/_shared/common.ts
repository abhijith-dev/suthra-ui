import type { SharedVisualProps } from "./common.types";

export function visualDataAttrs({
  variant = "normal",
  size = "md",
  state = "default",
  radius = "md",
  fullWidth = false,
  elevated = false,
  animated = true
}: SharedVisualProps) {
  return {
    "data-variant": variant,
    "data-size": size,
    "data-state": state,
    "data-radius": radius,
    "data-full-width": fullWidth,
    "data-elevated": elevated,
    "data-animated": animated
  };
}
