import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../../components/Select";

const meta = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Role",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Member", value: "member" }
    ],
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
