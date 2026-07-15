import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLElement>, SharedVisualProps {
  heading?: ReactNode;
  description?: ReactNode;
}

export function Card({
  heading,
  description,
  children,
  className,
  variant = "normal",
  size = "md",
  state = "default",
  ...props
}: CardProps) {
  return (
    <section
      className={cn(styles.root, className)}
      {...visualDataAttrs({ variant, size, state })}
      {...props}
    >
      <div className={styles.surface}>
        {heading ? <h3>{heading}</h3> : null}
        {description ? <p className={styles.hint}>{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
