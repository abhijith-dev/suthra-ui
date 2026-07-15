import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../../components/Tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Overview", value: "overview", content: "Overview content" },
      { label: "Settings", value: "settings", content: "Settings content" }
    ],
    defaultValue: "overview",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
