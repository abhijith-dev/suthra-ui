import { useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Tabs.module.css";

export interface TabsItem {
  label: ReactNode;
  value: string;
  content: ReactNode;
}

export interface TabsProps extends SharedVisualProps {
  items: TabsItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? items[0]?.value);
  const controlled = typeof value === "string";
  const currentValue = controlled ? value : internalValue;
  const selected = items.find((item) => item.value === currentValue) ?? items[0];

  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      <div className={styles.row} role="tablist">
        {items.map((item) => (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={item.value === selected?.value}
            className={cn(styles.surface, styles.clickable)}
            onClick={() => {
              if (!controlled) {
                setInternalValue(item.value);
              }
              onValueChange?.(item.value);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.surface} role="tabpanel">
        {selected?.content}
      </div>
    </div>
  );
}
