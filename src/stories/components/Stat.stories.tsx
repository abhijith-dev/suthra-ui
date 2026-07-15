import type { Meta, StoryObj } from "@storybook/react";

import { Stat } from "../../components/Stat";

const meta = {
  title: "Data Display/Stat",
  component: Stat,
  tags: ["autodocs"],
  args: {
    label: "Revenue",
    value: "$12,400",
    trend: "+12%",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
