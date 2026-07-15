import { useMemo, useState } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./OTPInput.module.css";

export interface OTPInputProps extends SharedVisualProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function OTPInput({
  length = 6,
  value,
  onChange,
  className,
  disabled,
  variant = "normal",
  size = "md",
  state = "default"
}: OTPInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const controlled = typeof value === "string";
  const current = controlled ? value : internalValue;
  const chars = useMemo(() => current.padEnd(length, " ").slice(0, length).split(""), [current, length]);

  return (
    <div className={cn(styles.root, styles.row, className)} {...visualDataAttrs({ variant, size, state })}>
      {chars.map((char, index) => (
        <input
          key={index}
          className={styles.control}
          maxLength={1}
          value={char.trim()}
          disabled={disabled}
          onChange={(event) => {
            const nextChar = event.target.value.slice(-1);
            const nextValue =
              current.slice(0, index) + nextChar + current.slice(index + 1, length);
            if (!controlled) {
              setInternalValue(nextValue);
            }
            onChange?.(nextValue);
          }}
        />
      ))}
    </div>
  );
}
