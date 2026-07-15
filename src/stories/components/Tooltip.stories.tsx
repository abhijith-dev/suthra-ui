import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../../components/Tooltip";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Tooltip text",
    children: <button type="button">Hover target</button>
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
