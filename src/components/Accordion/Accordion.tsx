import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Accordion.module.css";

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps extends SharedVisualProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({
  items,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: AccordionProps) {
  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      {items.map((item, index) => (
        <details key={index} open={item.defaultOpen} className={styles.surface}>
          <summary>{item.title}</summary>
          <div>{item.content}</div>
        </details>
      ))}
    </div>
  );
}
