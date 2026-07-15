import { forwardRef } from "react";

import { Select, type SelectProps } from "../Select";

export interface MultiSelectProps extends SelectProps {}

export const MultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>((props, ref) => (
  <Select ref={ref} multiple {...props} />
));

MultiSelect.displayName = "MultiSelect";
