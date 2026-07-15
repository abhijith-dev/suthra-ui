import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../../components/Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Accept terms",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
