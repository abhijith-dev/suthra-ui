import type { ReactNode } from "react";
import { PanelRightOpen } from "lucide-react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Drawer.module.css";

export interface DrawerProps extends SharedVisualProps {
  open?: boolean;
  side?: "left" | "right";
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Drawer({
  open,
  side = "right",
  title,
  children,
  icon,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: DrawerProps) {
  const resolvedIcon = icon ?? <PanelRightOpen size={16} aria-hidden="true" />;

  return (
    <aside
      aria-hidden={!open}
      className={cn(styles.root, className)}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: "min(420px, 90vw)",
        transform: open ? "translateX(0)" : `translateX(${side === "right" ? "100%" : "-100%"})`,
        transition: "transform 180ms ease"
      }}
      {...visualDataAttrs({ variant, size, state })}
    >
      <div className={styles.surface}>
        {title ? (
          <div className={styles.row}>
            <span aria-hidden="true">{resolvedIcon}</span>
            <h3>{title}</h3>
          </div>
        ) : null}
        {children}
      </div>
    </aside>
  );
}
