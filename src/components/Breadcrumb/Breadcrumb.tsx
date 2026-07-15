import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Breadcrumb.module.css";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends SharedVisualProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav className={cn(styles.root, className)} aria-label="Breadcrumb">
      <ol className={styles.row}>
        {items.map((item, index) => (
          <li key={index} className={styles.row}>
            {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            {index < items.length - 1 ? <span className={styles.hint}>{separator}</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
