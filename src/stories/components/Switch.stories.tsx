import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../../components/Switch";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    label: "Notifications",
    defaultChecked: true,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
