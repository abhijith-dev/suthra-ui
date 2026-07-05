import { cva } from "class-variance-authority";

import styles from "./Input.module.css";

export const inputFieldVariants = cva(styles.input, {
  variants: {
    hasLeft: {
      true: styles.hasLeft,
      false: ""
    },
    hasRight: {
      true: styles.hasRight,
      false: ""
    }
  },
  defaultVariants: {
    hasLeft: false,
    hasRight: false
  }
});

export const inputElementPositionVariants = cva("", {
  variants: {
    side: {
      left: styles.leftEl,
      right: styles.rightEl
    }
  }
});
